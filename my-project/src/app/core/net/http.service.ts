/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2018-10-19 11:50:25
 * @Last Modified by: qiuz
 * @Last Modified time: 2019-05-14 14:22:14
 */

import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Resource } from './resource-api';
import { HttpDES, DES, SED, sign } from '@common/encrypt-des';
import { isDate } from 'date-fns';
import { getUserName } from '@common/common-tool';

const matchUrlSearchParams = (url: any, urlSearchParams: any) => {
  if (!urlSearchParams) {
    return url.replace(/\/:[^?]+/g, '');
  }
  const u = new URLSearchParams();
  let _url = Object.keys(urlSearchParams).reduce((pre, next) => {
    if (pre.includes(':' + next)) {
      return pre.replace(':' + next, urlSearchParams[next]);
    } else {
      if (urlSearchParams[next] && urlSearchParams[next].constructor === Array) {
        urlSearchParams[next].forEach((value: any) => {
          u.append(next, value);
        });
      } else {
        u.append(next, urlSearchParams[next]);
      }
      return pre;
    }
  }, url);
  _url = _url.replace(/\/:[^?]+/g, '');
  return _url + (u.toString() === '' ? '' : '?' + u);
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private headers: any;
  private options: any;

  constructor(
    private http: HttpClient,
  ) {
    this.headers = new HttpHeaders(
      { 'Content-Type': 'application/json' }
    );
    this.options = { headers: this.headers };
  }

  get(url: string, urlSearchParams?: any, options?: any): Observable<any> {
    return this.http.request('GET', matchUrlSearchParams(Resource[url] || url, urlSearchParams), { ...this.options, ...options });
  }

  post(url: string, urlSearchParams?: any, bodyParams: any = {}, options?: any): Observable<any> {

    const postOptions = { des: false, ...options };
    let result = getUserName();
    const
      token = result.token || '',
      userId = result.userId || null,
      postParams: any = {};

    Object.assign(bodyParams, { userId });
    Object.keys(bodyParams).forEach(key => {
      if (!isDate(bodyParams[key])) {
        postParams[key] = bodyParams[key];
      }
    });

    const timestamp = new Date().getTime();
    const signature = sign({
      body: postParams,
      timestamp,
      token,
    });

    const authParams = {
      body: postParams,
      sign: signature,
      timestamp,
      token,
    };

    console.log(urlSearchParams, '请求参数', authParams);
    const _bodyParams = postOptions.des ? { body: HttpDES(JSON.stringify(authParams)) } : authParams;

    return this.http.request('POST', matchUrlSearchParams(Resource[url] || url, urlSearchParams),
      Object.assign({ ...this.options, ...options }, {
        body: JSON.stringify(_bodyParams)
      })
    );
  }

  upload(url: string, urlSearchParams?: any, formData?: any, options?: any): Observable<any> {
    options = { headers: {} };
    let result = getUserName();

    const
      token = result.token || '',
      accessToken = result.accessToken || '',
      userId = result.userId || null,
      userName = result.userName || '';

    const timestamp = new Date().getTime();

    formData.append('userId', userId);
    formData.append('userName', userName);
    formData.append('token', token);
    formData.append('accessToken', accessToken);
    formData.append('signature', timestamp.toString(10));
    formData.append('timestamp', timestamp.toString(10));

    console.log(url, '请求参数', urlSearchParams);
    return this.http.request('POST', matchUrlSearchParams(Resource[url] || url, urlSearchParams),
      Object.assign({ ...this.options, ...options }, {
        body: formData
      })
    );
  }

  delete(url:string, urlSearchParams:any, options:any) {
    return this.http.request('DELETE', matchUrlSearchParams(Resource[url], urlSearchParams), { ...this.options, ...options });
  }

  put(url:string, urlSearchParams:any, bodyParams:any, options:any) {
    return this.http.request('PUT', matchUrlSearchParams(Resource[url], urlSearchParams),
      Object.assign({ ...this.options, ...options }, {
        body: JSON.stringify(bodyParams)
      })
    );
  }

  patch(url:string, urlSearchParams:any, bodyParams:any, options:any) {
    return this.http.request('PATCH', matchUrlSearchParams(Resource[url], urlSearchParams),
      Object.assign({ ...this.options, ...options }, {
        body: JSON.stringify(bodyParams)
      })
    );
  }
}
