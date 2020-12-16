/*
 * @Author: XuChaoC
 * @Date: 2019-09-06 09:44:23
 * @LastEditors: TerryMin
 * @LastEditTime: 2020-12-15 16:15:38
 * @Description:
 */
import { SettingsService } from '@delon/theme';
import { Component, OnDestroy, Inject, Optional, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
// import { NzModalService } from 'ng-zorro-antd';
import {
  SocialService,
  SocialOpenType,
  TokenService,
  DA_SERVICE_TOKEN,
} from '@delon/auth';
// import { ReuseTabService } from '@delon/abc';
import { ReuseTabService } from '@delon/abc/reuse-tab';
import { environment } from '@env/environment';
import { StartupService } from '@core/startup/startup.service';
import { HttpService } from '@core/net/http.service';
import { LocalStorage } from '@common/local-storage';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { DES, SED } from '@common/encrypt-des';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import * as _ from 'lodash';

@Component({
  selector: 'passport-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  providers: [SocialService],
})
export class UserLoginComponent implements OnInit, OnDestroy {
  form: FormGroup;
  error = '';
  type = 0;
  loading = false;
  scodeSrc: any = '';

  constructor(
    fb: FormBuilder,
    private router: Router,
    public msg: NzMessageService,
    // private modalSrv: NzModalService,
    private settingsService: SettingsService,
    private socialService: SocialService,
    private httpService: HttpService,
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    @Optional()
    @Inject(ReuseTabService)
    private reuseTabService: ReuseTabService,
    @Inject(DA_SERVICE_TOKEN) private tokenService: TokenService,
    private startupSrv: StartupService,
  ) {
    this.form = fb.group({
      userName: [null, [Validators.required]],
      password: [null, Validators.required],
      mobile: [null, [Validators.required, Validators.pattern(/^1\d{10}$/)]],
      inputCode: [null, [Validators.required]],
      remember: [true],
    });
    // modalSrv.closeAll();
  }

  // region: fields

  get userName() {
    return this.form.controls.userName;
  }
  get password() {
    return this.form.controls.password;
  }
  get mobile() {
    return this.form.controls.mobile;
  }
  get inputCode() {
    return this.form.controls.inputCode;
  }
  get remember() {
    return this.form.controls.remember;
  }

  ngOnInit(): void {
    // this.getCaptcha();
  }

  // endregion

  switch(ret: any) {
    this.type = ret.index;
  }

  // region: get captcha

  // tslint:disable-next-line:member-ordering
  count = 0;
  // tslint:disable-next-line:member-ordering
  interval$: any;

  // endregion
  submit() {
    this.error = '';
    if (this.type === 0) {
      this.userName.markAsDirty();
      this.userName.updateValueAndValidity();
      this.password.markAsDirty();
      this.password.updateValueAndValidity();
      // this.inputCode.markAsDirty();
      // this.inputCode.updateValueAndValidity();
      // if (this.userName.invalid || this.password.invalid || this.inputCode.invalid) return;

      if (this.userName.invalid || this.password.invalid) return;
    } else {
      this.mobile.markAsDirty();
      this.mobile.updateValueAndValidity();
      this.inputCode.markAsDirty();
      this.inputCode.updateValueAndValidity();
      if (this.mobile.invalid || this.inputCode.invalid) return;
    }

    // **注：** DEMO中使用 `setTimeout` 来模拟 http
    // 默认配置中对所有HTTP请求都会强制[校验](https://ng-alain.com/auth/getting-started) 用户 Token
    // 然一般来说登录请求不需要校验，因此可以在请求URL加上：`/login?_allow_anonymous=true` 表示不触发用户 Token 校验
    this.loading = true;

    this.httpService.post('login', {}, {
      userName: this.userName.value,
      password: this.password.value,
      // inputCode: this.inputCode.value,
      // remember: this.remember.value,
    }, { type: 'login' })
      .subscribe((res: any) => {
        this.loading = false;
        const { userAccount, id, realName, menus } = res.data.userRoleMenuDTO;
        const userInfo = Object.assign({}, { token: res.data.token, userName: userAccount, userId: id, realName: realName });
        LocalStorage.setItem('userInfo', DES(userInfo));
        // 清空路由复用信息
        this.reuseTabService.clear();
        // 登录数据处理
        const formatHttpDataMenu = _.isArray(menus) ? menus.map((item: any) => {
          item.icon = `md-iconfont ${item.menuIcon}`;
          if (_.isArray(item.subMenus)) {
            item.children = item.subMenus.map((childItem: any) => {
              childItem.icon = `md-iconfont ${childItem.menuIcon}`;
              childItem.children = childItem.subMenus;
              return childItem;
            });
          } else {
            item.children = [];
          }
          return item;
        }) : [];

        LocalStorage.setItem('menuInfo', formatHttpDataMenu);
        LocalStorage.setItem('queryParams', {});
        console.log(formatHttpDataMenu);

        // 菜单栏权限控制;默认首页是项目管理否则取第一个菜单栏
        let url = '';
        formatHttpDataMenu.forEach((item: any) => {
          if (item.link === '/home') {
            url = 'home';
          }
        });

        // 默认加载该模块下面首个菜单
        url = _.isArray(menus) ? (url === '' ? formatHttpDataMenu[0].subMenus[0].link : url) : 'no-authority';

        this.startupSrv.load().then(() => this.router.navigate([url]));
      }, () => {
        // this.getCaptcha();
        this.loading = false;
      });
  }

  // region: social

  open(type: string, openType: SocialOpenType = 'href') {
    let url = ``;
    let callback = ``;
    if (environment.production)
      callback = 'https://ng-alain.github.io/ng-alain/callback/' + type;
    else callback = 'http://localhost:4200/callback/' + type;
    switch (type) {
      case 'auth0':
        url = `//cipchk.auth0.com/login?client=8gcNydIDzGBYxzqV0Vm1CX_RXH-wsWo5&redirect_uri=${decodeURIComponent(
          callback,
        )}`;
        break;
      case 'github':
        url = `//github.com/login/oauth/authorize?client_id=9d6baae4b04a23fcafa2&response_type=code&redirect_uri=${decodeURIComponent(
          callback,
        )}`;
        break;
      case 'weibo':
        url = `https://api.weibo.com/oauth2/authorize?client_id=1239507802&response_type=code&redirect_uri=${decodeURIComponent(
          callback,
        )}`;
        break;
    }
    if (openType === 'window') {
      this.socialService
        .login(url, '/', {
          type: 'window',
        })
        .subscribe(res => {
          if (res) {
            this.settingsService.setUser(res);
            this.router.navigateByUrl('/');
          }
        });
    } else {
      this.socialService.login(url, '/', {
        type: 'href',
      });
    }
  }

  // endregion

  ngOnDestroy(): void {
    if (this.interval$) clearInterval(this.interval$);
  }
}
