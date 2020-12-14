/*
 * @Author: TerryMin
 * @Date: 2020-10-29 10:02:10
 * @LastEditors: TerryMin
 * @LastEditTime: 2020-10-29 10:02:24
 * @Description: file not
 */
import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
 
declare const require: any;
 
// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);