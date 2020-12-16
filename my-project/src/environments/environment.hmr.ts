/*
 * @Author: TerryMin
 * @Date: 2020-12-15 14:47:40
 * @LastEditors: TerryMin
 * @LastEditTime: 2020-12-15 17:46:47
 * @Description: file not
 */
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  SERVER_URL: `./`,
  production: false,
  useHash: true,
  hmr: true,
  DES_KEY: '50F7A4D9',
  DES_IV: 'AB8BAD24'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
