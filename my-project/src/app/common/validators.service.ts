/*
 * @Author: XuChaoC
 * @Date: 2019-08-15 14:28:22
 * @LastEditors: XuChaoC
 * @LastEditTime: 2020-03-06 16:26:06
 * @Description:
 */
import { isFunction } from './is-type';
import { FormControl, ValidatorFn, AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Injectable } from '@angular/core';
import { FormArray } from '@angular/forms';
import * as _ from 'lodash';
import { isArray, isString, isNumber, isDate } from 'util';
import { formatDate } from '@angular/common';
import { HttpService } from './../core/net/http.service';
import { noAvail } from './common-tool';
interface Icomflag {
  checkbox?: Array<string>;
  dateRange?: object;
}
interface Ifixed {
  objDecimal: number; // 小数位
  integer: number; // 整数位
  isZore?: boolean; // 是否可以为0
  empty?: boolean; // 是否非必填
  maxNumber?: number; // 最大值
  minNumber?: number; // 最小值
  negative?: boolean; // 是否可为负数
  special?: number; // 特殊值
}
interface ImobileParam {
  name: string; // 预约人姓名
  projectCode: string; // 项目code
  formOption: any; // 表单配置项
}
const parserTest = (target: string, regExp: Array<RegExp>, fn?: Function): boolean => {
  const valArr = regExp.map(list => list.test(target));
  let val = valArr.every(list => list);
  if (isFunction(fn)) val = val && fn(target);
  return val;
};
@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {
  constructor(
    private httpService: HttpService
  ) { }
  /**
   * @fn:
   * @descripition: 验证formArray中的formcontroller是否都合法
   */
  formArrValid(condition = true): ValidatorFn {
    return (formArray: FormArray) => {
      const dirty = [];
      const arrValid = formArray.controls.every((item, index) => {
        if (item.dirty) {
          dirty.push(index);
          return item.valid;
        } else {
          return true;
        }
      });
      const filter = formArray.value.filter(item => !noAvail(item));
      const result = condition ? arrValid : (filter.length === 0 || filter.length === formArray.value.length || dirty.length !== formArray.value.length); // 当condition为false时，都合法或者都不合法时(并且都是脏的)，formGroup校验通过
      return result ? null : { arrValid: true };
    };
  }
  /**
   * @fn:
   * @descripition: 校验formArray是否有相同项
   */
  formArrIsDef(formArray: FormArray): any {
    const transformArr = (prve, nex) => {
      if (_.isString(nex)) {
        return prve.concat([nex]);
      } else if (_.isArray(nex)) {
        return prve.concat(nex ? [formatDate(nex[0], 'yyyy-MM-dd', 'zh-Hans') + ' ' + formatDate(nex[1], 'yyyy-MM-dd', 'zh-Hans')] : []);
      }
    };
    if (!formArray.value.flat(Infinity)[0]) return;
    const formControlArr = formArray.value.reduce((prve, nex) => transformArr(prve, nex), []);
    const arrValid = new Set(formControlArr);
    return arrValid.size === formArray.value.length ? null : { arrUniform: true };
  }
  /**
   * @fn:
   * @descripition: 校验formArray后面时间大于前面时间
   */
  timeSort(formArray: FormArray): any {
    formArray = _.cloneDeep(formArray);
    const formControlArr = formArray.value.map(item => {
      return !isDate(item) ? null : new Date(item).getTime();
    });
    if (formControlArr.some(i => i === null)) return null;
    const getNum = (num) => {
      num = num.toString();
      num = num.substring(0, num.length - 2);
      return parseInt(num, 10);
    };
    return getNum(formControlArr[0]) < getNum(formControlArr[1]) ? null : { timeSort: true };

  }
  /**
   * @fn:
   * @descripition: 校验多个checkbox是否checked
   */
  checkboxVal(formControl: FormControl): any {
    formControl = _.cloneDeep(formControl);
    if (!formControl.value) return { checkedSome: true };
    const checkedSome = formControl.value.some(item => {
      return item.checked === true;
    });
    return checkedSome ? null : { checkedSome: true };
  }
  /**
   * @fn:
   * @descripition: email校验
   **/
  emailVal(formControl: FormControl): any {
    if (!formControl.value) return null;
    const emailVal = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/.test(formControl.value);
    return emailVal ? null : { emailVal: true };
  }
  /**
   * @fn:
   * @descripition: email校验
   **/
  areaVal(formControl: FormControl): any {
    const value = formControl.value;
    if (!value && !isArray(value)) return null;
    return value.length > 2 ? null : { valComplement: true };
  }
  /**
   * @fn:
   * @descripition: 校验textarea
   */
  textareaVal(formControl: FormControl) {
    if (!formControl.value) return null;
    const textareaVal = /^(?!.*?_$)[a-zA-Z0-9\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5_\u4e00-\u9fa5]{2,20}$/.test(formControl.value);
    return textareaVal ? null : { textareaVal: true };
  }
  /**
   * @fn:
   * @descripition: 校验商户和餐厅名称
   */
  businessIpt(formControl: FormControl) {
    if (!formControl.value) return null;
    const busInput = /^[\u4e00-\u9fa5a-zA-Z]{2,20}$/.test(formControl.value);
    return busInput ? null : { busInput: true };
  }
  /**
   * @fn:
   * @descripition: 校验是否只有空格或换行
   */
  expertEmpty(formControl: FormControl) {
    if (!formControl.value) return null;
    let str = formControl.value;
    str = str.replace(/\ +/g, ''); // 去掉空格
    str = str.replace(/[ ]/g, ''); // 去掉空格
    str = str.replace(/[\r\n]/g, ''); // 去掉回车换行
    return str.length > 0 ? null : { empty: true };
  }
  /**
  * @fn:
  * @descripition: 电话校验
  **/
  phone(formControl: FormControl): any {
    if (!formControl.value) return null;

    const phoneTure = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/.test(formControl.value);
    return phoneTure ? null : { phone: true };
  }
  /**
  * @fn:
  * @descripition:五星
  **/
  startFive(formControl: FormControl): any {
    if (!formControl.value) return null;
    const vali = parserTest(formControl.value, [/^([1-5])$/]);
    return vali ? null : { fiveStart: true };
  }
  /**
  * @fn:
  * @descripition:最多两位小数的实数，整数6位
  **/
  fixedTow(formControl: FormControl): any {
    if (!formControl.value) return null;
    const vali = parserTest(formControl.value, [/^(0|[1-9]\d*)(\s|$|\.\d{1,2}\b)/], val => val <= 999999.99);
    return vali ? null : { fixedTow: true };
  }

  /**
  * @fn: integer整数位数,也可能是个对象（-1表示整数位没有限制） decimal小数位数 isZore是否可以为0,empty 能否为空, maxNumber最大值 minNumber最小值 negative是否可以为负数 允许的特殊值
  * @descripition: 数字校验   // 科学计数法不适用
  **/
  numberFixed(decimal: Ifixed | number = 2, integer = -1, isZore = true, empty = false, maxNumber?, minNumber?, negative = false, special?): ValidatorFn {
    return (formControl: FormControl): { [key: string]: any } | null => {
      if (_.isObject(decimal)) {
        let objDecimal;
        ({ objDecimal= 2, integer = -1, isZore= true, empty = false, maxNumber, minNumber, negative = false, special } = decimal as Ifixed);
        decimal = objDecimal;
      }
      let valid = true;
      if (empty && (formControl.value === '' || formControl.value === null)) return null;
      if ([undefined, null, NaN].includes(formControl.value)) return { fixed: true };
      const value = formControl.value.toString();
      const number = parseFloat(value);
      if (!/^(-?[0-9]+)(\.[0-9]+)?$/.test(formControl.value)) {
        valid = false;
      } else if (isZore === false && number === 0) {
        valid = false;
      } else if ((maxNumber || maxNumber === 0) && number > maxNumber) {
        valid = false;
      } else if ((minNumber || minNumber === 0) && number < minNumber) {
        valid = false;
      } else if (negative === false && number < 0) {
        valid = false;
      } else if (!_.isNaN(decimal) && (value.split('.')[1] || []).length > decimal) {
        valid = false;
      } else if (integer > -1) {
        if (Math.abs(number) > parseFloat(new Array(integer).fill(9).join('')) + parseFloat(new Array(decimal).fill(9).join('') || '0') / Math.pow(10, decimal as number)) {
          valid = false;
        }
      }
      if (!noAvail(special) && (String(special) === value)) valid = true;
      return valid ? null : { fixed: true };
    };
  }
  /**
  * @fn:
  * @descripition: 不小于5000
  **/
  lessThan(formControl: FormControl): any {
    if (!formControl.value) return null;

    let lessThan: any = /^[1-9]\d*$/.test(formControl.value);
    if (lessThan) {
      lessThan = parseInt(formControl.value, 10);
      lessThan = lessThan <= 5000;
    }
    return lessThan ? null : { lessThan: true };
  }


  /**
   *  异步校验
   */

  // 手机号校验
  mobileAsync(params: ImobileParam): AsyncValidatorFn {
    const { name, formOption } = params;
    console.log(params);

    return (control: AbstractControl): Promise<ValidationErrors | null> => {
      const customerMobile = control.value;
      return new Promise((resolve, reject) => {
        this.httpService.post('appointmentApi', { type: 'findCustomerName' }, { ...params, customerMobile }).subscribe(res => {
          console.log(res);
          const customerName = res.data && res.data.customerName;
          // 返回null时，不做校验，非null是对应名字是否正确
          const result = customerName ? customerName === name ? null : { mobileAsync: true } : null;
          if (result) formOption.error.mobileAsync = `已绑定姓名：${customerName}`;
          resolve(result);
          return;
        });
      });
    };
  }
}
interface IbusinessData {
  allFormData: object; // data原始数据
  resultData: object; // resultData处理好的数据
  confirmed: string[]; // 表单的固定项
  formArrFlag?: string[]; // 判定该字段是否是表单array字段
  comflag?: Icomflag; // 配置属性特别格式
  creatBisiness?: boolean; // 是否是创建商户

}
export class GetPictureUrl { }
export class SbumitDealData {
  constructor() { }
  result: object;
  dataForSubmit(params: IbusinessData) {
    let { allFormData, resultData, confirmed, formArrFlag, comflag, creatBisiness } = params;
    const outArr = [];
    // console.log(allFormData);
    for (const [key, value] of Object.entries(allFormData)) {
      // 筛分商户的公共属性
      if (key) {
        confirmed.push(...formArrFlag);
        confirmed = _.uniq(confirmed);
        if (formArrFlag && formArrFlag.includes(key) && isArray(formArrFlag)) {
          // 筛分产品的公共属性
          const goods = [];
          value.forEach(item => {
            const attributes = [];
            const submitObj = {};
            for (const [proKey, provalue] of Object.entries(item)) {
              // 将配置属性打包成后 特殊格式
              if (confirmed && confirmed.includes(proKey)) {
                if (['tax', 'serviceCharge'].includes(proKey)) {
                  Object.assign(submitObj, { [proKey]: provalue || provalue === 0 ? Math.floor(provalue as number * 100) / 100 : 0 });
                } else {
                  Object.assign(submitObj, { [proKey]: provalue });
                }
              } else {
                // 配置属性是数组的情况，可能是时间段，checkbox
                if (comflag && comflag.checkbox.includes(proKey)) {
                  if (isArray(provalue)) {
                    // 为checkbox的情况转换
                    provalue['forEach'](function (v, i) {
                      if (isString(v)) {
                        if (proKey === 'APPLICABLE_DATE') {
                          if (i === 0) attributes.push({ attrCode: proKey, attrValue: provalue.join('~') });
                        } else {
                          // 不可用时间段
                          attributes.push({ attrCode: proKey, attrValue: v });
                        }
                      } else if (isArray(v)) {
                        // 不可用日期段
                        attributes.push({ attrCode: proKey, attrValue: v.map(list => list.split(' ')[0]).join('~') });
                      }
                    });
                  } else if (isString(provalue) || isNumber(provalue)) {
                    // 适用时间段
                    attributes.push({ attrCode: proKey, attrValue: provalue });
                  }
                } else {
                  // 非时间段，checkbox等的 普通转换
                  attributes.push({ attrCode: proKey, attrValue: provalue });
                }
              }
              Object.assign(submitObj, { attributes });
            }
            goods.push(submitObj);
          });
          // goods 产品表单处理好的格式
          Object.assign(resultData, { [key]: goods });
        } else if (!confirmed.includes(key) && !creatBisiness) {
          // 非产品表单普通转换  但也是动态属性
          outArr.push({ attrCode: key, attrValue: value });
        } else {
          if (isArray(value) && key !== 'merchantLabel') {
            // 非产品表单的固定属性 时间处理
            Object.assign(resultData, { [key]: value.join('~') });
          } else {
            Object.assign(resultData, { [key]: value });
          }
        }
        if (outArr.length > 0) Object.assign(resultData, { attributes: outArr });
      }
    }
    // console.log(resultData);

    return resultData;
  }
}

