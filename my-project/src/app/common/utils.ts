// /*
//  * @Author: qiuz
//  * @Github: <https://github.com/qiuziz>
//  * @Date: 2018-12-11 11:28:24
//  * @Last Modified by: qiuz
//  * @Last Modified time: 2019-05-14 13:17:14
//  */

import { isObject, isArray, isDate, isString } from './is-type';
// import * as _ from 'lodash';
// import { LocalStorage } from '@common/local-storage';
// import { ATTR } from './value.service';
// import { formatDate } from '@angular/common';

// /**
//  * @description m => km
//  * @param value string
//  */
// export const convert = (value: string): string => {
//   if (!value) {
//     // console.log('value 不能为空');
//     return '0';
//   }
//   const result = parseInt(value, 10);
//   return result > 1000 ? ((result / 1000).toFixed(2) + 'k') : result + '';
// };

// /**
//  * @description digital toFixed 强制保留小数位数
//  * @param value string
//  * @param decimals string
//  */
// export const digitalFormat = (value: any, decimals: number = 2) => {
//   if (!value) return '0';
//   const result = parseFloat(value);
//   if (isNaN(result)) {
//     // console.log('传入的值解析错误');
//     return '0';
//   }
//   let resultStr = (Math.round(result * 100) / 100).toString();
//   let strLength = resultStr.indexOf('.');
//   if (strLength < 0) {
//     strLength = resultStr.length;
//     resultStr += '.';
//     while (resultStr.length <= strLength + decimals) {
//       resultStr += '0';
//     }
//   } else {
//     resultStr = Number(result.toFixed(decimals)).toString();
//   }

//   return resultStr;
// }

// /**
//  * @description sub toFixed
//  * @param reduction string
//  * @param minuend string
//  * @param decimals string
//  */
// function subCount(reduction: string, minuend: string, decimals: number = 2): string {
//   if (!reduction) return '0';
//   if (!minuend) return reduction;
//   const result1 = parseFloat(reduction);
//   const result2 = parseFloat(minuend);
//   if (isNaN(result1) || isNaN(result2)) {
//     // console.log('传入的值解析错误');
//     return '0';
//   }
//   return Number((result1 - result2).toFixed(decimals)).toString();
// }


// /**
//  * @description digital prefix zore
//  * @param number string
//  */
// export const zore = (number: number): string => {
//   return number < 10 ? ('0' + number) : number + '';
// };

// /**
//  * @description ms => {minute, second}
//  * @param remain string
//  * @param remain string
//  */
// function msToTime(remain: number): object {
//   const
//     minute = parseInt(`${remain / 60000}`, 10),
//     second = parseInt(`${remain % 60000 / 1000}`, 10);

//   return {
//     minute: isNaN(minute) ? 0 : minute,
//     second: isNaN(second) ? 0 : second
//   };
// }

// /**
//  * @description date format
//  * @param date Date
//  */
// export const dateFormate = (date: Date) => {
//   const
//     Y = date.getFullYear() + '-',
//     M = zore(date.getMonth() + 1) + '-',
//     D = zore(date.getDate()),
//     h = zore(date.getHours()) + ':',
//     m = zore(date.getMinutes()) + ':',
//     s = zore(date.getSeconds());

//   return Y + M + D;
// };

// /**
// * @description 仅返回日期，不显示时分秒
// */
// export const viewDate = (date: string) => {
//   return date.split(' ', 2)[0];
// };

// const noViewSecond = (date: string) => {
//   return date.substr(0, date.length - 3);
// };

// const formatPhone = (phone: string) => {
//   if (!phone) return '';
//   return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
// };

// /**
//  * randomStrCode 产生指定长度随机字母数字组合
//  * @param len number
//  */
// export const randomStrCode = (len: number): string => {
//   const b = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//   let
//     d,
//     e,
//     c = '';
//   for (d = 0; len > d; d += 1) {
//     e = Math.random() * b.length, e = Math.floor(e), c += b.charAt(e);
//   }
//   return c.toLocaleUpperCase();
// };

/**
 * sortForAscii
 * @param len object
 */
export const sortForAscii = (obj: any, lowerCase = false, caseSensitive: boolean = false): string => {
  if (!isObject(obj)) {
    // console.log('参数必须为Object');
    return '';
  }
  let upperObj:any = {};
  Object.keys(obj).forEach(key => {
    if ((obj[key] || obj[key] === 0) && !isDate(obj[key])) {
      upperObj[key] = (isObject(obj[key]) || isArray(obj[key])) ? 'MID' : (obj[key] + '');
    }
  });
  upperObj = caseSensitive ? upperObj : JSON.parse(JSON.stringify(upperObj).toLocaleLowerCase());
  // console.log(upperObj);
  let sortObjToString = '';
  const sortKeys = Object.keys(upperObj).sort();
  // console.log(sortKeys);
  const LEN = sortKeys.length - 1;
  sortKeys.forEach((key, index) => {
    sortObjToString += upperObj[key] ? `${key}=${upperObj[key]}${index < LEN ? '&' : ''}` : ``;
  });

  return lowerCase ? sortObjToString.toLocaleLowerCase() : sortObjToString.toLocaleUpperCase();
};

// /**
//  *@description 下載文件
//  */
// export const downloadBlob = (blob, filename) => {
//   if (window.navigator.msSaveOrOpenBlob) {
//     navigator.msSaveBlob(blob, filename);
//   } else {
//     const link = document.createElement('a');
//     const body = document.querySelector('body');

//     link.href = window.URL.createObjectURL(blob);
//     link.download = filename;

//     // fix Firefox
//     link.style.display = 'none';
//     body.appendChild(link);

//     link.click();
//     body.removeChild(link);

//     window.URL.revokeObjectURL(link.href);
//   }
// };
// /**
//  * @fn:
//  * @descripition: texarea中的字符串转换为~间隔
//  */
// export const transformForStr = (formControlValse, target) => {
//   for (const [key, value] of Object.entries(formControlValse)) {
//     if (isObject(value) || isArray(value)) {
//       transformForStr(value, target);
//     } else {
//       target.forEach(element => {
//         if (key === element && isString(value)) {
//           let str = '';
//           str = value['replace'](/\r\n/g, '~');
//           str = str.replace(/\n/g, '~');
//           formControlValse[key] = str;
//         }
//       });

//     }
//   }
// };
// /**
//  * @fn:
//  * @descripition: texarea中的字符串转换为数组
//  */
// interface Iexport {
//   checkObj: any; // checkObj.allChecked 是否全选标识
//   except: Array<string>; // 全选状态下要排除的元素
//   include: Array<string>; // 非全选状态下包含元素
//   flag: string; // 列表数据唯一区分的字段
//   compData?: Array<any>; // 实例化的st  表格
//   _allChecked?: boolean; // st 单页全选标识
//   _indeterminate?: boolean; // st 半选标识
// }
// export const dataformExport = (exportData: Iexport) => {
//   exportData.checkObj.allChecked = exportData._allChecked ? exportData._allChecked : exportData._indeterminate ? exportData.checkObj.allChecked ? true : false : false;
//   // console.log(exportData.checkObj.allChecked);
//   if (exportData.checkObj.allChecked) {
//     exportData.compData.forEach((item) => {
//       if (!item['checked']) {
//         exportData.except.push(item[exportData.flag]);
//       } else {
//         _.pull(exportData.except, item[exportData.flag]);
//       }
//     });
//   } else {
//     exportData.compData.forEach((item) => {
//       if (item['checked']) {
//         exportData.include.push(item[exportData.flag]);
//       } else {
//         _.pull(exportData.include, item[exportData.flag]);
//       }
//     });
//   }
//   // if (exportData._allChecked) {
//   //   exportData.except = [];
//   // } else if (!exportData._indeterminate && !exportData._allChecked) {
//   //   exportData.include = [];
//   // }
//   const result = exportData.checkObj.allChecked ? { except: Array.from(new Set(exportData.except)) } : { include: Array.from(new Set(exportData.include)) };
//   return result;
// };
// export const formatNumber = n => {
//   n = n.toString();
//   return n[1] ? n : '0' + n;
// };
// /**
//  * @fn:
//  * @descripition: 时间格式化
//  */
// export const formatTime = (date: Date, formatD: string = 'yyyy-MM-dd') => {
//   const [lang, short] = [formatD.match('yyyy-MM-dd'), /(H)|(m)|(s)/.test(formatD)];
//   const formatArray: any = formatD.split(' ').length > 1 ? formatD.split(' ')[1].split(':') : formatD.split(':').length > 1 ? formatD.split(':') : [];
//   let hms = '';
//   const hmsArray: any = [];
//   const year = date.getFullYear();
//   const month = date.getMonth() + 1;
//   const day = date.getDate();
//   formatArray.forEach(item => {
//     switch (item) {// HH:mm:ss
//       case 'HH':
//         const hour = date.getHours();
//         hmsArray.push(hour);
//         break;

//       case 'mm':
//         const minute = date.getMinutes();
//         hmsArray.push(minute);
//         break;

//       case 'ss':
//         const second = date.getSeconds();
//         hmsArray.push(second);
//         break;

//       default:
//         break;
//     }
//   });

//   if (hmsArray.length > 1) {
//     hms = ' ' + hmsArray.map(formatNumber).join(':');
//   }
//   let result = '';
//   if (lang && !short) {
//     result = [year, month, day].map(formatNumber).join('-');
//   } else if (lang && short) {
//     result = [year, month, day].map(formatNumber).join('-') + hms;
//   } else if (short) {
//     result = hms;
//   }
//   // console.log(result);
//   return result;
// };

// /**
//  * @fn:
//  * @descripition: 扁平化转换时间格式
//  */
// export const flatDate = (formControlValse, especial) => {
//   for (const [key, value] of Object.entries(formControlValse)) {
//     if (Object.keys(especial).includes(key) && isArray(value)) {
//       const pro = [];
//       const odd = [], even = [];
//       value['forEach']((v) => {
//         if (isDate(v)) {
//           pro.push(formatTime(v, especial[key]));
//         } else if (isString(v)) {
//           pro.push(formatTime(new Date(v), especial[key]));
//         }
//         if (isDate(v) || isString(v)) formControlValse[key] = pro[0].match('yyyy-MM-dd') ? pro.join('~') : pro.join('~').replace(/\s/g, '');
//         if (isArray(v)) {
//           v['forEach']((val, i) => {
//             if (i % 2 === 0) {
//               even.push(formatTime(new Date(val), especial[key]));
//             } else {
//               odd.push(formatTime(new Date(val), especial[key]));
//             }
//           });
//         }
//       });
//       if (even.length > 0) {
//         even.forEach((val, index) => {
//           pro.push([val, odd[index]]);
//         });
//         formControlValse[key] = pro.map((item) => item.join('~'));
//       }
//       // console.log(formControlValse[key]);
//     }
//     if (isObject(value) || isArray(value)) {
//       flatDate(value, especial);
//     } else {
//       if (Object.prototype.toString.call(value) === '[object Date]') {
//         formControlValse[key] = dateFormate(value as Date);
//       }
//     }
//   }
// };

// /**
//  * @fn:
//  * @descripition: 旧key到新key的映射 keyMapObj--映射规则 array--要转换的数组  same--key值与value值是否相同 persist是否保留映射之前的属性
//  */
// export const keyMapSwitch = (keyMapObj: object, array: Array<object>, same?: boolean, persist?: boolean): Array<object> => {
//   // console.log(keyMapObj, array);
//   array.forEach((item) => {
//     for (const key of Object.keys(item)) {
//       const newKey = keyMapObj[key];
//       if (newKey) {
//         item[newKey] = item[key];
//         if (same) item['value'] = item[key];
//         if (!persist) delete item[key];
//       }
//     }
//   });
//   // console.log(array);
//   return array;
// };

// /**
//  * @fn:
//  * @descripition: 将后端数据解析正常格式 attrCode-attrValue  转换成 对象形式  onlyShow不将~转换为数组
//  */
// export const transformResponse = (resArr: Array<object> | object, truansformArr?: Array<string>, attributes = 'attributes', isDelete = true, onlyShow = false) => {
//   // console.log(resArr, truansformArr);
//   const formatAttr = (value: object) => {
//     if (isArray(value[attributes])) {
//       value[attributes]['forEach'](item => {
//         let key: any, val: any, trsArr: boolean;
//         if (isObject(item)) {
//           for (const [k, v] of Object.entries(item)) {
//             if (k === 'attrCode') {
//               key = v;
//               trsArr = truansformArr ? truansformArr.includes(v as string) : false;
//             } else if (k === 'attrValue') {
//               if (trsArr) {
//                 if (isArray(value[key])) {
//                   const newArr = [];
//                   val = [...value[key].flat(Infinity), ...v['split']('~')];
//                   if (key !== ATTR.BUS_TYPE) {
//                     for (const i = 0; val.length > 0;) {
//                       newArr.push(val.splice(0, 2));
//                     }
//                     val = newArr;
//                   }
//                 } else {
//                   val = onlyShow ? v : v['split']('~');
//                 }
//               } else {
//                 val = v;
//               }
//             }
//             value[key] = k === 'attrCode' ? value[key] : val;
//           }
//         }
//       });
//     }
//     const availableDate = value['UN_AVAILABLE_DATE'];
//     if (isArray(availableDate) && isString(availableDate[0])) value['UN_AVAILABLE_DATE'] = [availableDate];
//     if (isDelete) delete value[attributes];
//   };

//   if (isArray(resArr)) {
//     (resArr as any[]).forEach((value) => {
//       formatAttr(value);
//     });
//   } else if (isObject(resArr)) {
//     formatAttr(resArr);
//   }

// };

// /**
//  * @fn:
//  * @descripition: 导出失败时，提示错误信息
//  */
// export const exportTips = (res: any, _this) => {
//   if (res.type === 'application/json') {
//     let reader = new FileReader();
//     reader.readAsText(res);
//     reader.onload = function () { // 文件读取完毕
//       let errorrTips = JSON.parse(reader.result + '');
//       _this.message.error(errorrTips.msg);
//     }
//   }
// }

// /**
//  * @fn:
//  * @descripition: 导出到下载中心失败时，提示错误信息
//  */
// export const exportToDownTips = (res: any, _this) => {
//   if (res.type === 'application/json') {
//     let reader = new FileReader();
//     reader.readAsText(res);
//     reader.onload = function () { // 文件读取完毕
//       let result = JSON.parse(reader.result + '');
//       if (result.code === 'SUCCESS') {
//         _this.isShowDownBanner = true;
//         setTimeout(() => {
//           _this.isShowDownBanner = false;
//         }, 3000);
//       } else {
//         _this.message.error(result.msg);
//       }
//     }
//   }
// }

// /**
//  * @fn:
//  * @descripition: 替换加密（中间几位 替换成 ****）
//  */
// export const replaceEncry = (text: any, start: number, end: number, replaceText: string): string => {
//   if (!isString(text)) return;
//   const result = text.substring(0, start - 1) + replaceText + text.substring(end - 1);
//   return result;
// };
// /**
//  * @fn: 过滤空格
//  * @descripition: 使用说明 content要出去空格的操作对象  fields对象的属性(key)集合（如果该属性的值是一个数组，那么会深层trim） path根据路径来精确定位属性，并trim
//  */
// export const filterSpace = (content: any, fields?: Array<string>, paths?: Array<string>) => {
//   const circleFun = (value, keyWord?) => {
//     if (isString(value)) {
//       return value.trim();
//     } else if (isArray(value) && (!keyWord || (keyWord && fields.includes(keyWord)))) {
//       const storage = value.reduce((prve, next) => prve.concat(isString(next) ? [next.trim()] : (circleFun(next, keyWord) || [next])), []);
//       value.splice(0);
//       value.push(...storage);
//     } else {
//       for (const [key, val] of Object.entries(value)) {
//         if (key) {
//           if (isObject(val) || isArray(val)) {
//             circleFun(val, key);
//           } else {
//             if (isString(value[key]) && fields.includes(key)) value[key] = value[key].trim();
//           }
//         }
//       }
//     }
//   };
//   if ((isString(content) || isObject(content) || isArray(content))) {
//     if (_.isArray(fields) && fields.length > 0) circleFun(content);
//     if (_.isArray(paths) && paths.length > 0) {
//       paths.forEach(path => {
//         const getVal = _.get(content, path);
//         console.log(getVal);

//         if (isString(getVal)) _.set(content, path, getVal.trim());
//       });
//     }
//   }
//   return content;
// };

// /**
//  * @fn:
//  * @descripition: 获取Url
//  */
// const getLocationUrl = () => {
//   let hash = window.location.hash.split(';')[0];
//   if (isString(hash)) {
//     const index = hash.indexOf('?');
//     if (index > -1) {
//       hash = hash.substr(1, index - 1);
//     } else {
//       hash = hash.substr(1);
//     }
//   }
//   return hash;
// }

// /**
//  * @fn:
//  * @descripition: 获取列表用户按钮权限
//  */
// export const getModelBtns = () => {
//   let isExist = [];
//   let hash = getLocationUrl();
//   const menu = LocalStorage.getItem('menuInfo');
//   const searchRoute = (menuList) => {
//     for (const item of menuList) {
//       if (isArray(item.subMenus) && item.subMenus.length > 0) {
//         searchRoute(item.subMenus);
//       } else {
//         if (item.link === hash && isArray(item.buttons)) {
//           isExist = item.buttons.map(list => list.buttonName);
//           // 既是按钮又是菜单按钮添加
//           if (isArray(item.menuButtons) && item.menuButtons.length > 0) {
//             for (const ele of item.menuButtons) {
//               isExist.push(ele.text);
//             }
//           }
//         }
//       }
//     }
//   };
//   if (isArray(menu)) {
//     searchRoute(menu);
//   }
//   console.log('isExist', isExist);
//   return isExist;
// };

// /**
//  * @fn:
//  * @descripition: 获取详情多级权限按钮
//  */
// export const getDetailBtns = () => {
//   let isExist = [];
//   let hash = getLocationUrl();
//   const menu = LocalStorage.getItem('menuInfo');
//   // console.log(menu);

//   const searchRoute = (menuList) => {
//     for (const item of menuList) {
//       if (isArray(item.subMenus) && item.subMenus.length > 0) {
//         searchRoute(item.subMenus);
//       } else {
//         if (isArray(item.menuButtons) && item.menuButtons.length > 0) {
//           if (item.link === hash) {
//             isExist = item.menuButtons;
//           } else {
//             for (const ele of item.menuButtons) {
//               if (ele.link === hash) {
//                 // isTable：1有菜单按钮（一个页面既有菜单又有按钮统一都配置成1）；0只有按钮
//                 isExist = ele.isTable === 1 ? ele.menuButtons : ele.buttons;
//               } else {
//                 if (isArray(ele.menuButtons) && (ele.menuButtons.length > 0)) {
//                   searchRoute(ele.menuButtons);
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   };

//   if (isArray(menu)) {
//     searchRoute(menu);
//   }
//   console.log('btnExist', isExist);
//   return isExist;
// };

// /**
//  * @fn:
//  * @descripition: 判断用户是否有进入指定的菜单的权限
//  */
// export const getIsMenuAuthority = (...urlArr) => {
//   let isMenuAuthority = false;
//   const menu = LocalStorage.getItem('menuInfo');
//   console.log(menu, urlArr);
//   if (isArray(menu) && menu.length > 0) {
//     for (const oneMenue of menu) {
//       if (oneMenue.link === urlArr[0] && isArray(oneMenue.subMenus) && oneMenue.subMenus.length > 0) {
//         for (const twoMenue of oneMenue.subMenus) {
//           if (twoMenue.link === urlArr[1]) {
//             isMenuAuthority = true;
//           }
//         }
//       }
//     }
//   }
//   return isMenuAuthority;
// };

// /**
//  * @fn:
//  * @descripition: 根据列表是否有该按钮判断能否进入对应的详情页面
//  */
// export const getListBtn = (...urlArr) => {
//   let isFromTopToBottom = false;
//   const menu = LocalStorage.getItem('menuInfo');
//   console.log(menu, urlArr);
//   if (isArray(menu) && menu.length > 0) {
//     for (const oneMenue of menu) {
//       if (oneMenue.link === urlArr[0] && isArray(oneMenue.subMenus) && oneMenue.subMenus.length > 0) {
//         for (const twoMenue of oneMenue.subMenus) {
//           if (twoMenue.link === urlArr[1]) {
//             if (isArray(twoMenue.buttons) && twoMenue.buttons.length > 0) {
//               const localBtn = twoMenue.buttons.map(item => item.buttonName);
//               console.log(localBtn);
//               isFromTopToBottom = localBtn.includes(urlArr[2]);
//             }
//           }
//         }
//       }
//     }
//   }
//   return isFromTopToBottom;
// };

// /**
//  * @fn:
//  * @descripition: 商户订单 转换expireDate字段
//  */
// export const dealDate = (date) => {
//   if (_.isDate(new Date(date))) {
//     if (new Date() > new Date(date)) {
//       return `${formatDate(date, 'yyyy-MM-dd', 'zh-Hans')}(已过期)`;
//     } else {
//       return formatDate(date, 'yyyy-MM-dd', 'zh-Hans');
//     }
//   }
//   return date;
// };

// /**
//  * @fn:
//  * @descripition: 商户订单 不可用时间列表
//  */
// export const disabledHourList = (start: number, end: number): number[] => {
//   const result: number[] = [];
//   for (let i = start; i < end; i++) {
//     result.push(i);
//   }
//   return result;
// }