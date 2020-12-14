/*
 * @Author: TerryMin
 * @Date: 2020-12-02 10:55:51
 * @LastEditors: TerryMin
 * @LastEditTime: 2020-12-02 11:29:12
 * @Description: file not
 */
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'exponentialStrength'})
export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: number, exponent?: number): number {
    return Math.pow(value, isNaN(exponent) ? 1 : exponent);
  }
}
