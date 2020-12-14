/*
 * @Author: TerryMin
 * @Date: 2020-12-02 10:55:51
 * @LastEditors: TerryMin
 * @LastEditTime: 2020-12-02 11:45:24
 * @Description: file not
 */
import {Pipe, PipeTransform } from '@angular/core'
@Pipe({name: 'strLengthOne'})
export class StrLengthOnePipe implements PipeTransform{
  transform(value: string, args?: any): any {
    console.log(value,args);
    return value.repeat(args);
  }
}