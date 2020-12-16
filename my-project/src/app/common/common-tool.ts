// /*
//  * @Author: XuChaoC
//  * @Date: 2019-07-24 16:44:45
//  * @LastEditors: TerryMin
//  * @LastEditTime: 2020-08-31 17:17:50
//  * @Description: 该文件为公共方法集合，与utils.ts相同
//  */
// import { isNumber } from './is-type';
import { LocalStorage } from './local-storage';
import { SED } from './encrypt-des';
// import { isString } from 'util';
// import * as _ from 'lodash';
// import { FormGroup, AbstractControl } from '@angular/forms';
// import { isEqual } from 'date-fns';
// import { formatDate } from '@angular/common';
// import { ALL_CONSTANT } from './value.service';

// /**
// * @fun
// * @description 获取当前账号的信息
// */
export const getUserName = () => {
  let operateUser = LocalStorage.getItem('userInfo');
  try {
    operateUser = SED(operateUser);
  } catch (error) {
    operateUser = {};
  }
  return operateUser;
};

// /**
// * @fun str规则label  flg规则数子
// * @description 转换预约规则
// */
// export const strSplice = (str, flg, sn) => {
//   if (!isString(str) && isNumber(sn)) return str;
//   const arr = str.split('');
//   arr.splice(sn, 0, flg);
//   return arr.join('');
// };
// /**
// * @fun
// * @description 根据flag修改数组中的某个数据
// */
// export const upDataArr = (arr, flgArr, obj) => {
//   // arr原数组 flagArr[0]数组对象中的key  flagArr[1]数组对象的中value  obj要更新的属性
//   if (_.isArray(arr) && _.isArray(flgArr) && _.isObject(obj)) {
//     arr.forEach(list => {
//       if (_.isObject(list) && list[flgArr[0]] === flgArr[1]) {
//         Object.assign(list, obj);
//       }
//     });
//   }
// };
// /**
// * @fun
// * @description 根据条件修改arr
// */
// export const emitArrCondition = (arr, condition, obj, index) => {
//   // arr原数组 condition添加项或删除项的条件  obj要添加或删除的项  index如果是要添加，要插入数组的下标
//   if (_.isArray(arr) && _.isBoolean(condition) && _.isObject(obj) && !_.isNaN(index)) {
//     if (condition) {
//       let newArr = [];
//       arr.splice(index, 0, obj);
//       newArr = _.uniqWith(arr, _.isEqual);
//       arr.splice(0);
//       arr.push(...newArr);
//     } else {
//       _.pullAllWith(arr, [obj], _.isEqual);
//     }
//   }
// };
// /**
// * @fun
// * @description 表单值判空
// */
// export const noAvail = (value) => {
//   if (value === undefined || value === null || value === '' || _.isNaN(value)) return true;
// };
// /**
// * @fun
// * @description 有就删除，没有就添加 （add有值的情况，有就不变，没有就添加）
// */
// export const toggleArray = (arr, list, i, add?) => {
//   // arr原数组 list表示要检测的项，如果数组中没有，把list插入哪个下标
//   if (_.isArray(arr) && noAvail(list) && _.isNumber(i)) {
//     const index = arr.findIndex(item => _.isEqual(item, list));
//     if (index > -1 && !add) {
//       arr.splice(index, 1);
//     } else {
//       arr.splice(i, 0, list);
//     }
//   }
// };
// /**
//  * @fn:
//  * @descripition: formSubmit时验证form表单 filter校验时需要排除的字段
//  */
// export const checkForm = (filter: Array<string>, ...formGroup: Array<FormGroup>): Array<boolean> => {
//   const isInvalid = [];
//   const isValidAndValuable = [];
//   formGroup = _.pullAll(formGroup, [undefined]);
//   console.log(filter);
//   console.log(formGroup);
//   for (const item of formGroup) {
//     for (const i of Object.keys(item.controls)) {
//       if (_.isArray(filter) && !filter.includes(i)) {
//         const control = item.controls[i];
//         control.markAsDirty();
//         control.updateValueAndValidity();
//         if (_.isArray(control['controls'])) {
//           control['controls'].forEach(value => {
//             value.markAsDirty();
//             value.updateValueAndValidity();
//           });
//         }
//         isInvalid.push(item.controls[i]['invalid']);
//         const valid = item.controls[i]['valid'];
//         if (item.controls[i].value !== '' && valid) isValidAndValuable.push(valid);
//       }
//     }
//   }
//   const isCanDeActivate = isValidAndValuable.some((item) => {
//     return item === true;
//   });
//   // console.log(isValidAndValuable, isInvalid);

//   return [isInvalid.some((item) => item === true), isCanDeActivate];
// };
// /**
//  * @fn:
//  * @descripition: 记录缓存更新时间，便于后端变动数据后拉数据
//  */
// export const saveUpdata = (key: string, rememberUpdata = {}): void => {
//   const obj = { [key]: formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss', 'zh-Hans') };
//   if (_.isObject(rememberUpdata)) {
//     Object.assign(rememberUpdata, obj);
//   } else {
//     rememberUpdata = obj;
//   }
//   LocalStorage.setItem('rememberUpdata', rememberUpdata);
// };
// /**
//  * @fn:
//  * @descripition:  移除手动添加的error
//  */
// export const removeErrors = (keys: string[], control: AbstractControl) => {
//   if (!control || !keys || keys.length === 0) {
//     return;
//   }
//   const remainingErrors = keys.reduce((errors, key) => {
//     delete errors[key];
//     return errors;
//   }, { ...control.errors });
//   console.log(remainingErrors);

//   control.setErrors(remainingErrors);

//   if (Object.keys(control.errors || {}).length === 0) {
//     control.setErrors(null);
//   }
// };

// /**
//  * @fn:
//  * @descripition:  手动添加error
//  */
// export const addErrors = (errors: { [key: string]: any }, control: AbstractControl) => {
//   if (!control || !errors) {
//     return;
//   }
//   control.setErrors({ ...control.errors, ...errors });
//   console.log(111);

// };
// /**
//  * @fn:
//  * @descripition: 浅复制操作
//  */
// export const assignObj = (targetFiledArr: (object | string)[], targetObj, originObj) => {
//   if (_.isArray(targetFiledArr) && _.isObject(targetObj) && _.isObject(originObj)) {
//     targetFiledArr.forEach(item => {
//       if (_.isObject(item)) {
//         const arr = Object.keys(item);
//         targetObj[arr[0]] = originObj[item[arr[0]]];
//       } else {
//         targetObj[item as string] = originObj[item as string];
//       }
//     });
//   }
// };
// /**
//  * @fn:
//  * @descripition: generator函数调用
//  */
// export const generatorNext = (generatorFun, initArg) => {
//   const funct = generatorFun(initArg);
//   const circleStep = (argment?) => {
//     const { value, done } = funct.next(argment);
//     if (done !== true) {
//       value.then(resolve => circleStep(resolve)).catch(rej => console.log(rej));
//     }
//   };
//   try {
//     circleStep();
//   } catch (error) {
//     console.log(error);
//   }
// };
// /**
//  * @fn:
//  * @descripition: 将code转换为name   feild--要转换的字段啊  value--字段值
//  */
// export const codeMapName = (value: any, feild: string) => {
//   if (!([null, '', NaN, undefined].includes(value)) && _.isString(feild)) {
//     const array = ALL_CONSTANT[feild];
//     if (array) {
//       const findOne = array.find(item => item.value === value);
//       if (findOne) return Object.values(findOne)[0];
//     }
//   }
//   return value;
// };
// /**
//  * @fn:
//  * @descripition: 获取加密文件
//  */
// export const getBase64 = (img: File, callback: (img: string) => void) => {
//   const reader = new FileReader();
//   reader.addEventListener('load', () => callback(reader.result.toString()));
//   reader.readAsDataURL(img);
// };
// /**
//  * @fn:
//  * @descripition: 转换为attr格式
//  */
// export const formatAttr = (formatObj: object, fields: string[], toKey: string, callBack) => {
//   console.log(formatObj,fields)
//   for (const [key, val] of Object.entries(formatObj)) {
//     if (fields.includes(key)) {
//       (formatObj[toKey] || (formatObj[toKey] = [])).push({ attrCode: key, attrValue: val });
//       delete formatObj[key];
//     }
//   }
//   callBack(formatObj[toKey]);
// };

