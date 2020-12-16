/*
 * @Author: TerryMin
 * @LastEditors: TerryMin
 * @Description:  file not
 * @Date: 2019-04-29 08:52:45
 * @LastEditTime: 2020-12-10 11:35:58
 */

const API_HOST = '';
const SERVICE_NAME = 'api/';
export const Resource: any = {

  // 登录接口
  login: `${API_HOST}${SERVICE_NAME}admin/user/login`,

  // 重新获取Token
  getToken: `${API_HOST}${SERVICE_NAME}/getAccessToken`,

  router: `${API_HOST}${SERVICE_NAME}/queryMenuInfo`,

  // 菜单按钮
  buttonList: `${API_HOST}${SERVICE_NAME}/button/list`,

  /**
   * 项目管理
   */
  project: `${API_HOST}${SERVICE_NAME}project/:type`,

  /**
   * 预约单管理
   */
  appointment: `${API_HOST}${SERVICE_NAME}appointment/appointmentAdmin/:type`,

  /**
   * 预约单管理后端内部接口，暂时调用
   */
  appointmentApi: `${API_HOST}${SERVICE_NAME}appointment/appointmentApi/:type`,


  /**
   * 激活码管理
   */
  activationCodeList: `${API_HOST}${SERVICE_NAME}/activationCode/:type`,

  /**
   * 商户管理
   */
  businessList: `${API_HOST}${SERVICE_NAME}/business/:type`,


  /**
   * 商户产品列表
   */
  businessProducList: `${API_HOST}${SERVICE_NAME}/businessProduc/:type`,

  /**
   *产品类目
   */
  kindList: `${API_HOST}${SERVICE_NAME}/kind/:type`,

  forbiddenDateList: `${API_HOST}${SERVICE_NAME}merchant/admin/unableDate/:type`,

  /**
  * 系统管理
  */
  // 账号管理
  account: `${API_HOST}${SERVICE_NAME}admin/user/:type`,

  // 查看的项目列表
  userProject: `${API_HOST}${SERVICE_NAME}admin/userProject/:type`,

  // 权限组管理
  group: `${API_HOST}${SERVICE_NAME}admin/group/:type`,

  // 角色管理
  role: `${API_HOST}${SERVICE_NAME}admin/role/:type`,

  // 菜单按钮
  menu: `${API_HOST}${SERVICE_NAME}admin/menu/:type`,

  // 按钮
  button: `${API_HOST}${SERVICE_NAME}admin/button/:type`,

  // 省市区枚举值
  listAllCity: `${API_HOST}${SERVICE_NAME}admin/areaAdmin/:type`,

  // 获取用户权限集合
  permission: `${API_HOST}${SERVICE_NAME}admin/permission/:type`,

  // 下载中心
  downLoad: `${API_HOST}${SERVICE_NAME}admin/:type`,

  // 首页接口
  home: `${API_HOST}${SERVICE_NAME}/:type`,

  /**
   * 激活码接口
   */
  activationcode: `${API_HOST}${SERVICE_NAME}activationcode/activationCodeWeb/:type`,

  /**
   * 机构管理
   */
  institution: `${API_HOST}${SERVICE_NAME}institution/admin/:type`,

  /**
  * 上传文件
  */
  upload: `${API_HOST}${SERVICE_NAME}oss/object/put/single`,

  /**
  * 订单管理
  */
  order: `${API_HOST}${SERVICE_NAME}order/orderAdmin/:type`,

  /**
  * 订单统计管理
  */
  orderStatistic: `${API_HOST}${SERVICE_NAME}order/orderStatistic/:type`,

  /**
  *商户
  */
  merchant: `${API_HOST}${SERVICE_NAME}merchant/admin/:type`,

  /**
  *商户后台api
  */
  merchantApi: `${API_HOST}${SERVICE_NAME}merchant/api/:type`,

  /**
  *短信模块
  */
  sms: `${API_HOST}${SERVICE_NAME}sms/admin/:type`,

};
