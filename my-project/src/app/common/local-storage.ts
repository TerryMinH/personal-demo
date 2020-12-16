/*
 * @Author: qiuziz
 * @Date: 2017-08-18 15:26:27
 * */

class LocalStorageTools {
  getItem(key:any) {
    const value:any = localStorage.getItem(key);
    return value !== 'undefined' ? JSON.parse(value) : undefined;
  }

  setItem(key:any, value:any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  removeItem(key:any) {
    localStorage.removeItem(key);
  }

  get length() {
    return localStorage.length;
  }

  key(number:any) {
    return localStorage.key(number);
  }

  clear() {
    localStorage.clear();
  }
}
class SessionStorageTools {
  getItem(key:any) {
    const value:any = sessionStorage.getItem(key);
    return value !== 'undefined' ? JSON.parse(value) : undefined;
  }

  setItem(key:any, value:any) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  removeItem(key:any) {
    sessionStorage.removeItem(key);
  }

  get length() {
    return sessionStorage.length;
  }

  key(number:any) {
    return sessionStorage.key(number);
  }

  clear() {
    sessionStorage.clear();
  }
}
const LocalStorage = new LocalStorageTools();
const SessionStorage = new SessionStorageTools();
export {
  LocalStorage,
  SessionStorage
};
