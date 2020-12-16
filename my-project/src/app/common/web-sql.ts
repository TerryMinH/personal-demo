import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class WorkIndexedDBService {
  // 声明一些属性，name：数据库名,version：数据库版本
  // name和version发生变化，浏览器就会重新建一个新的indexedDB
  private name = 'dataBase';
  private version = 1;
  private db: any = null;
  private request: any;

  constructor() { }
  // 是否支持indexDB
  isIndexDB() {
    return new Promise((relosve, reject) => {
      if (!window.indexedDB) {
        relosve(false);
      } else {
        relosve(true);
      }
    });
  }

  // 数据库初始化处理和创建表
  public createTable(tableName): void {
    const request = indexedDB.open(this.name, this.version);
    request.onerror = function (event) {
      // console.log('数据库打开报错');
    };
    request.onsuccess = function (event) {
      // console.log('数据库打开成功');
    };
    request.onupgradeneeded = function (e) {
      // @ts-ignore
      const db = e.target.result;
      const store = db.createObjectStore(tableName, {
        keyPath: 'key',
        autoIncrement: false
      });
      store.createIndex('businessName', 'businessName', { unique: false });
      // console.log('创建对象仓库成功');
    };
  }
  // 判定indexDB是否打开
  isOpenDB(): Promise<any> {
    return new Promise<any>((resolve) => {
      if (!this.db) {
        const request = indexedDB.open(this.name, this.version);
        request.onsuccess = function (e) {
          // @ts-ignore
          this.db = e.target.result;
          // console.log('创建对象仓库成功');
          resolve(true);
        };
      } else {
        resolve(true);
      }
    });

  }

  // 关闭数据库
  public close(): void {
    this.db.close();
  }

  // 删除数据库
  public deleteDB(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      // 先关闭连接再删
      this.close();
      const req = indexedDB.deleteDatabase(this.name);
      req.onsuccess = function (event) {
        this.db = null;
        resolve();
      }.bind(this);
      req.onerror = reject;
    });
  }

  // 添加数据
  // 注意：使用事务来做操作比较快。
  public insert(
    tableName: string,
    data: object
  ): void {
    const request = indexedDB.open(this.name, this.version);
    request.onsuccess = function (e) {
      // @ts-ignore
      const db = e.target.result;
      const tx = db.transaction([tableName], 'readwrite');
      const store = tx.objectStore(tableName);
      const reqAdd = store.add(data);
      reqAdd.onsuccess = function () {
        // console.log('保存成功');
      };
      reqAdd.onerror = function () {
        // console.log('保存失败！');
      };
    };
  }

  // 批量添加数据
  public batchInsert(
    storeName: string,
    data: any[]
  ): Promise<any> {
    if (!data || data.length === 0) {
      return Promise.resolve();
    }
    return new Promise<null>((resolve, reject) => {
      const request = indexedDB.open(this.name, this.version);
      request.onsuccess = function (e) {
        // @ts-ignore
        const db = e.target.result;
        const transaction = db.transaction([storeName], 'readwrite');
        const store = transaction.objectStore(storeName);
        const isError = [];
        data.forEach((row, index) => {
          const save = store.add(row);
          save.onerror = function () {
            isError.push(row['key']);
            if (data.length - 1 === index) {
              // console.log(`key为${_.uniq(isError).join()}数据保存失败！`);
            }
          };
        });

      };
    }).catch((error) => {
      // console.log('添加' + storeName + '表数据失败', error);
      return Promise.reject(error);
    });
  }

  // 删除数据
  public workdelete(
    tableName: string,
    keyValue: any
  ): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const request = indexedDB.open(this.name, this.version);
      request.onsuccess = function (e) {
        // @ts-ignore
        const db = e.target.result;
        const tx = db.transaction([tableName], 'readwrite');
        const store = tx.objectStore(tableName);
        const reqDelete = store.delete(keyValue);
        reqDelete.onsuccess = function () {
          // console.log('删除数据成功');
        };
        reqDelete.onerror = function () {
          // console.log('删除数据失败！');
        };
      };
    }).catch((error) => {
      // console.log('删除' + tableName + '表数据  key值' + keyValue + '失败', error);
      return Promise.reject(error);
    });
  }

  // 清除全部表格
  public clearAllData(): Promise<any> {
    const storeNameList: Array<string> = new Array<string>();
    const request = indexedDB.open(this.name, this.version);
    request.onsuccess = function (e) {
      // @ts-ignore
      const db = e.target.result;
      const storeNames = db.objectStoreNames;
      if (storeNames && storeNames.length > 0) {
        for (let i = 0; i < storeNames.length; i++) {
          storeNameList.push(storeNames[i]);
        }
      }

    };
    return Promise.all(
      storeNameList.map((storeName) => {
        const clear = this.clear(storeName);
        // clear.addEventListener('success', () => {
        //   console.log('保存成功');
        // });
        // clear.addEventListener('error', () => {
        //   console.log('保存失败！');
        // });
        return clear;

      })
    );

  }

  // 清空数据
  public clear(
    tableName: string
  ): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const request = indexedDB.open(this.name, this.version);
      request.onsuccess = function (e) {
        // @ts-ignore
        const db = e.target.result;
        const tx = db.transaction([tableName], 'readwrite');
        const transaction = db.transaction(tableName, 'readwrite');
        const store = transaction.objectStore(tableName);
        const req = store.clear();
        req.onsuccess = function () {
          // console.log('清空数据成功');
        };
        req.onerror = function () {
          // console.log('清空数据失败！');
        };
      };
    });
  }

  // 更新数据
  public update(
    tableName: string,
    data: any
  ): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const request = indexedDB.open(this.name, this.version);
      request.onsuccess = function (e) {
        // @ts-ignore
        const db = e.target.result;
        const transaction = db.transaction([tableName], 'readwrite');
        const store = transaction.objectStore(tableName);
        const req = store.put(data);
        req.onsuccess = function () {
          // console.log('更新数据成功');
        };
        req.onerror = function () {
          // console.log('更新数据失败！');
        };
      };
    });
  }

  // 根据Key取得数据
  public selectByKey(
    tableName: string,
    key: any
  ): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const request = indexedDB.open(this.name, this.version);
      request.onsuccess = function () {
        // @ts-ignore
        const db = e.target.result;
        const tx = db.transaction(tableName, 'readwrite');
        const store = tx.objectStore(tableName);
        store.get(key).onsuccess = function (e) {
          // console.log(e);
          if (e.type === 'success' && e.target) {
            resolve(e.target.result);
          } else {
            reject(e.error);
          }
        };
      };
    });
  }

  // 根据索引取得数据
  public selectByIndex(
    tableName: string,
    indexName: string,
    searchWord: any,
    callBack: Function
  ): void {
    const request = indexedDB.open(this.name, this.version);
    request.onsuccess = function (e) {
      // @ts-ignore
      const db = e.target.result;
      const transaction = db.transaction([tableName], 'readonly');
      const store = transaction.objectStore(tableName);
      const index = store.index(indexName);
      const get = index.get(searchWord);
      callBack(get);
      get.onerror = function () {
        // console.log('根据索引查询失败！');
      };
    }.bind(this);
  }
}
