/*
 * @Author: XuChaoC
 * @LastEditors  : XuChaoC
 * @Description: 百度地图服务
 * @Date: 2019-05-07 11:12:50
 * @LastEditTime : 2019-12-23 11:31:12
 */
import { Injectable } from '@angular/core';
import { isObject } from 'util';
import { NzMessageService } from 'ng-zorro-antd';
@Injectable({
  providedIn: 'root'
})
export class BMapService {

  public localSearch: any;
  public totalPages: number;
  public currPage: number;
  public resultArray = [];
  public position: {
    position: {
      latitude: number, // 纬度
      longitude: number, // 经度
    },
    point: any
  };
  public resolve: boolean;
  constructor(private messageService: NzMessageService) { }
  /**
  * @fn:
  * @descripition: 获取百度坐标
  */
  getPosition(): void {

    const geolocation = new BMap.Geolocation();
    const gc = new BMap.Geocoder();
    geolocation.getCurrentPosition((r) => {
      // 通过Geolocation类的getStatus()可以判断是否成功定位。
      let errorMessage = '';
      if (geolocation.getStatus() === 0) {
        this.position = {
          position: {
            latitude: r.point.lat, // 纬度
            longitude: r.point.lng, // 经度
          },
          point: new BMap.Point(r.point.lng, r.point.lat)
        };

      } else {

        switch (geolocation.getStatus()) {

          case 2:

            errorMessage = '位置结果未知 获取位置失败.';

            break;

          case 3:

            errorMessage = '导航结果未知 获取位置失败..';

            break;

          case 4:

            errorMessage = '非法密钥 获取位置失败.';

            break;

          case 5:

            errorMessage = '对不起,非法请求位置  获取位置失败.';

            break;

          case 6:

            errorMessage = '对不起,当前 没有权限 获取位置失败.';

            break;

          case 7:

            errorMessage = '对不起,服务不可用 获取位置失败.';

            break;

          case 8:
            errorMessage = '对不起,请求超时 获取位置失败.';

            break;
        }
        this.messageService.info(errorMessage);
      }
    },
      { enableHighAccuracy: true }
    );
  }
  /**
   * @fn:
   * @descripition:根据录入值模糊查询
   */
  searchLocation(searchCondition: string, cityName: string) {
    if (searchCondition && cityName) {
      this.resolve = false;
      return new Promise((resolve, reject) => {
        const localSearch = this.localSearch = new BMap.LocalSearch(cityName);
        // console.log(city);

        localSearch.search(searchCondition, { forceLocal: true });
        localSearch.setPageCapacity(5);
        localSearch.setSearchCompleteCallback((response) => {
          // console.log(response);
          // 需要获取当前搜索总共有多少条结果
          this.totalPages = response.getNumPages();
          // 获取当前是第几页数据
          this.currPage = response.getPageIndex();
          // 返回成功
          this.resolve = true;

          // 处理百度地图地址取值不固定问题
          for (let [key, value] of Object.entries(response)) {
            if (Array.isArray(value) && value.length !== 0) {
              this.resultArray.push(...value);
            }
          }
          // this.resultArray.push(...response.Ir);
          const { city, province } = response;
          this.resultArray.forEach(item => {
            if (!item.address.startsWith(province) && province) {
              let local = province + item.address;
              if (!local.startsWith(province + city) && city && city !== province) {
                local = province + city + item.address;
              }
              item.address = local;
            }
          });
          resolve(this.resultArray);
        });
      });
    }
  }

}
