/*
 * @Author: TerryMin
 * @Date: 2019-05-22 17:14:13
 * @LastEditors: XuChaoC
 * @LastEditTime: 2019-10-30 20:39:14
 * @Description: 文件上传
 */
import { HttpService } from '@core/net/http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpLoadService {
  constructor(private httpService: HttpService) { }

  // 上传图片
  upLoadFiles(formData: FormData, callback: any) {
    this.httpService.upload('upload', {}, formData).subscribe((res: any) => {
      callback(res);
    });
  }

  // 上传文件
  upLoadFile(formData: FormData, interObj: any = { iheader: 'upload', type: '' }, callback: Function) {
    this.httpService.upload(interObj.iheader, { type: interObj.type }, formData).subscribe((res: any) => {
      callback(res, 'success');
    }, error => callback(error, 'wrong'));
  }

}
