/*
 * @Author: XuChaoC
 * @LastEditors: XuChaoC
 * @Description: 离开路由保存提示  进入路由检查权限
 * @Date: 2019-04-30 16:30:13
 * @LastEditTime: 2019-05-29 18:10:03
 */
import { NzModalService } from 'ng-zorro-antd';
import { BusinessCreateComponent } from './../../routes/business/business-list/business-create/business-create.component';
import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanLeaveGuardService implements CanDeactivate<BusinessCreateComponent> {
  constructor(private cfm: NzModalService) { }
  confirm(observer) {
    this.cfm.confirm({
      nzTitle: '确认要离开吗？',
      nzContent: '你已经填写了部分表单，若离开会将放弃已经填写的内容。',
      nzOkText: '离开',
      nzCancelText: '取消',
      nzOnOk() {
        observer.next(true);
        observer.complete();
      },
      nzOnCancel() {
        observer.next(false);
        observer.complete();
      }
    });
  }
  canDeactivate(
    component: BusinessCreateComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot,
  ): Observable<boolean> {
    return new Observable(observer => {
      component.submitFormSave('formGuard');
      if (component.isCanDeActivate && !component.formSubmit) {// 确保不是点击保存时拦截路由
        this.confirm(observer);
      } else {
        observer.next(true);
      }
    });
  }
}
