/*
 * @Author: XuChaoC
 * @Date: 2019-09-29 13:25:38
 * @LastEditors: TerryMin
 * @LastEditTime: 2020-11-27 14:27:26
 * @Description: 枚举值集合服务，注意要将label或者name写在前面，value写在后面
 */
import { FormGroup } from '@angular/forms';
// 行权限制枚举
export const POWER_LIMITED = [
  { label: '限制使用人', value: 1 },
  { label: '不限制使用人', value: 0 },
];
// 合作方式
export const WAYS_COOPERATION = [
  { label: '代销', value: 'SALE_AGENT' },
  { label: '采购', value: 'PURCHASING' },
  { label: '电销', value: 'TELEMARKETING' },
  { label: '其他', value: 'OTHER' }
];
// 上下架
export const DERCARRIAGE = [
  { label: '上架', value: true },
  { label: '下架', value: false }
];
// 协议 protocol
export const PROTOCOL_ENUM = [
  { label: '进行中', value: 'true' },
  { label: '90天内到期', value: 'false' },
  { label: '已结束', value: 'sss' },
];
// 餐段 Mealsection
export const MEALSE_CTION = [
  { label: '早餐', value: '早餐' },
  { label: '早午餐', value: '早午餐' },
  { label: '午餐', value: '午餐' },
  { label: '晚餐', value: '晚餐' }
];
// 免费停车
export const PARKING_FREE = [
  {
    label: '是',
    value: '是'
  },
  {
    label: '否',
    value: '否'
  },
];
// 是否
export const YES_OR_NO = [
  {
    label: '是',
    value: '1'
  },
  {
    label: '否',
    value: '0'
  },
];
// 启用禁用
export const STATUS_ENUM = [
  { label: '启用', value: '1' },
  { label: '禁用', value: '0' }
];
// 周列表
export const WEEK_ENUM = [
  { label: '周一', value: '周一', disabled: false },
  { label: '周二', value: '周二', disabled: false },
  { label: '周三', value: '周三', disabled: false },
  { label: '周四', value: '周四', disabled: false },
  { label: '周五', value: '周五', disabled: false },
  { label: '周六', value: '周六', disabled: false },
  { label: '周日', value: '周日', disabled: false }
];
// 周转换为number
export const MAP_WEEK = { '周一': 1, '周二': 2, '周三': 3, '周四': 4, '周五': 5, '周六': 6, '周日': 7 };
// 服务列表
export const SERVICE_ENUM = [
  { label: '免费WiFi', value: '免费WiFi', checked: false },
  { label: '健身室', value: '健身室', checked: false },
  { label: '室内游泳池', value: '室内游泳池', checked: false },
  { label: '室外游泳池', value: '室外游泳池', checked: false },
  { label: '专车专享', value: '专车专享', checked: false },
  { label: '准时准点', value: '准时准点', checked: false },
  { label: '免费等待', value: '免费等待', checked: false },
];
// 车型
export const MOTORCYCLE_TYPE = [
  { label: '舒适型', value: '舒适型', checked: false },
  { label: '商务型', value: '商务型', checked: false },
  { label: '豪华型', value: '豪华型', checked: false },
];
// 特别日期 special
export const SPECIAL_DAY = [
  { name: '节假日', value: 1 },
  { name: '自定义', value: 0 }
];
export const SPECIAL_DAY_FORM = [
  { label: '节假日', value: 1 },
  { label: '自定义', value: 0 }
];
// 选择状态
export const SELECT_STATUS = [
  { name: '已选择', value: true },
  { name: '未选择', value: false }
];
// 选择状态 activeStatus
export const ACTIVE_STATUS = [
  {
    name: '全部',
    value: ''
  },
  {
    name: '已激活',
    value: '1'
  },
  {
    name: '未激活',
    value: '0'
  },
  {
    name: '已失效',
    value: '2'
  }
];
// 激活方式 activeStyle
export const ACTIVE_STYLE = [
  {
    name: '全部',
    value: ''
  },
  {
    name: '客户号',
    value: 'CUSTOMER_NUMBER'
  },
  {
    name: '券码',
    value: 'ACTIVATION_CODE'
  },
  {
    name: '卡bin',
    value: 'BIN'
  },
  {
    name: '卡号',
    value: 'CARD'
  },
  {
    name: '手机号',
    value: 'MOBILE'
  },
];
// 券码类型
export const ACTIVE_TYPE = [
  { name: '项目类型', value: 0 },
  { name: '服务包类型', value: 1 },
  { name: '产品类型', value: 2 },
  { name: '权益标品', value: 3 },
];
// 服务类型
export const PROJECT_TYPE = [
  // { label: '服务包兑换', value: 'PACK_EXCHANGE' },
  { label: '一店一价-线上', value: 'SHOP_PRICE_ONLINE' },
  { label: '一店一价-线下', value: 'SHOP_PRICE_UNDERLINE' }
];
// 标签类型
export const LABEL_TYPE = [
  { label: '无', value: '' },
  { label: 'VIP', value: 'VIP' },
  { label: '测试', value: 'TEST' }
];
// 激活类型validityType
export const VALIDITY_TYPE = [
  { label: '自定义有效期', value: '1' },
  { label: '生成即激活', value: '0' },
];

// 机构订单状态映射
export const ORGANISE_ORDER_OBJ = {
  'PENDING': '未使用',
  'USED': '已使用',
  'USING': '使用中',
  'PENDING_PAYMENT': '未使用',
  'PENDING_CONFIRM': '待确认收款',
  'REFUNDING': '退款中',
  'CANCEL': '已取消',
  'CLOSED': '已关闭',
  'CLOSED_USED': '已关闭(使用过)',
}

// 动态属性  注--尽量不要在代码中出现魔术字符串，(后台swagger上不会出现以下字段，只展示一个attr)
export enum ATTR {
  // 产品动态字段
  DINING_TIME = 'DINING_TIME', //  用餐时段
  APPLICABLE_DATE = 'APPLICABLE_DATE', //  适用日期段
  APPLICABLE_TIME = 'APPLICABLE_TIME', //  适用时间段
  FREE_PARKING = 'FREE_PARKING', //  是否免费停车
  RESTAURANT_NAME = 'RESTAURANT_NAME', //  餐厅名字 已弃用--更改为shopId
  CHILD_POLICY = 'CHILD_POLICY', //  儿童政策
  UN_AVAILABLE_DATE = 'UN_AVAILABLE_DATE', //  不可用日期
  SERVICE_CONTENT = 'SERVICE_CONTENT', // 服务内容 （出行服务特有）
  HAVE_FASTCHANNEL = 'HAVE_FASTCHANNEL', // 是否有快速通道 （出行服务特有）
  PARKING_INFO = 'PARKING_INFO', //  泊车信息
  USE_NOTICE = 'USE_NOTICE', //  使用须知
  HOT_TIP = 'HOT_TIP', //  特别提示
  MERCHANT_TIPS = 'MERCHANT_TIPS', // 商家提示
  SUITABLE_LOCATION = 'SUITABLE_LOCATION', //  适用地点  已弃用--更改为shopId
  AVAILABLE_NUMBER = 'AVAILABLE_NUMBER', //  可用次数
  PRODUCT_NAME = 'PRODUCT_NAME', // 产品名称
  MILEAGE = 'MILEAGE', // 里程数
  BUS_TYPE = 'BUS_TYPE', // 车型
  // 订单动态属性
  APPOINTMENT_DATE = 'APPOINTMENT_DATE', //  预约日期
  APPOINTMENT_NUMBER = 'APPOINTMENT_NUMBER', //  预约人数
  APPOINTMENT_REMARK = 'APPOINTMENT_REMARK', //  预约备注
  APPOINTMENT_MOBILE = 'APPOINTMENT_MOBILE', // 预约手机号
  APPOINTMENT_Adults = 'APPOINTMENT_Adults', // 预约人数 - 成人
  APPOINTMENT_children = 'APPOINTMENT_children', // 预约人数 - 儿童
  APPOINTMENT_NAME = 'APPOINTMENT_NAME', //  预约姓名
  APPOINTMENT_TIME = 'APPOINTMENT_TIME', //  预约时间
  // 服务包动态属性
  MEAL_SECTION_MAX_NUM = 'MEAL_SECTION_MAX_NUM', //  同餐段行权数
  DAY_MAX_NUM = 'DAY_MAX_NUM', //  同日期行权数
  ONLINE_ABLE = 'ONLINE_ABLE', //  可在线预约
  PHONE_ABLE = 'PHONE_ABLE', //  可电话预约
  SHOP_USE = 'SHOP_USE', //  可到店使用
  PRIOR_HOUR = 'PRIOR_HOUR', //  预约提前小时数
  APPOINTMENT_PERIOD = 'APPOINTMENT_PERIOD', //  可预约天数范围
  CANCEL_ABLE = 'CANCEL_ABLE', //  不可取消
  CANCEL_PERIOD = 'CANCEL_PERIOD', //  提前取消小时数
}
// 纸质券paperTicketCode
export const PAPER_TICKET_CODE = [
  { name: '需要', value: 1 },
  { name: '不需要', value: 0 }
];
// 订单类型
export const ORDER_TYPE = [
  { name: '服务包', value: 'PACK_EXCHANGE' },
  { name: '产品', value: 'PRODUCT' },
  { name: '权益标品', value: 'STANDARD' },
];
// 订单类型映射
export const ORDER_TYPE_OBJ = {
  'PACK_EXCHANGE': '服务包',
  'PRODUCT': '产品',
  'STANDARD': '权益标品',
};
// 门店
export const STORE_PROWER = [
  { label: '全部门店', value: true },
  { label: '部分门店', value: false }
];
// 预约补差价price difference
export const PRICE_DIFFERENCE = [
  { label: '不需要补差价', value: 0 },
  { label: '需要补差价', value: 1 }
];
// 标品图片
export const PICTRUE_LIST = ['coverPicture', 'infoPicture', 'bannerPicture', 'termsPicture'];
// 产品规则转换
export const TRANS_LABEL_RULE = {
  ONLINE_ABLE: '可在线预约',
  PHONE_ABLE: '可电话预约',
  SHOP_USE: '可到店使用',
  CANCEL_ABLE: '不可取消',
  PRIOR_HOUR: '提前$$小时预约',
  PRIOR_DAY: '提前$$天数预约',
  APPOINTMENT_PERIOD: '可预约$$天内'
};
// 表单基本配置
export interface Iforms {
  formGroup?: FormGroup; // form表单
  formOptions?: { [x: string]: any }[]; // 表单配置项
  [x: string]: any; // 其余配置
}
// 根据类目转换字段category
export const FIELD_FOR_CATEGORY = {
  YYJS_MAOT: 'AVAILABLE_NUMBER', // 餐段
  ZZC_IGSN: 'DINING_TIME', // 可以次数
  XWC_GNWS: 'NO_ONE_DATA', // 没有特殊字段
  DRLY_FCTM: 'NO_ONE_DATA', // 没有特殊字段
};

// 商户订单状态映射
export const MERCHANT_ORDER_OBJ = {
  'WAIT_PAY': '待支付',
  'WAIT_CONFIRM': '待确认',
  'WAIT_USE': '待使用',
  'USEING': '使用中',
  'USED': '已使用',
  'CANCEL': '已取消',

  'REFUNDING': '退款中',
  'REFUNDFAULIE': '退款失败',
  'REFUNDSUCCESS': '退款成功',
  'NOTREFUND': '未退款',

  'CLOSED': '已关闭',
  'CLOSED_USED': '已取消/已关闭',
}

// 支付-退款状态
export const MERCHANT_ORDER = [
  { name: '退款中', value: 'REFUNDING' },
  { name: '退款失败', value: 'REFUNDFAULIE' },
  { name: '退款成功', value: 'REFUNDSUCCESS' },
  { name: '未退款', value: 'NOTREFUND' },
  { name: '待支付', value: 'WAIT_PAY' },
  { name: '已支付', value: 'PAY' },
];
// 商户订单退款状态 全部、退款中、退款失败、退款成功、未退款
export const ORDER_BACK_STATUS = [
  { name: '全部', value: '' },
  { name: '退款中', value: 'REFUNDING' },
  { name: '退款失败', value: 'REFUNDFAULIE' },
  { name: '退款成功', value: 'REFUNDSUCCESS' },
  { name: '未退款', value: 'NOTREFUND' },
];
// 预约条件 appointmentLimitList
export const APPOINTMENT_LIMIT = [
  { label: '可在线预约', attrCode: 'ONLINE_ABLE', checked: false },
  { label: '可电话预约', attrCode: 'PHONE_ABLE', checked: false },
  { label: '可到店预约', attrCode: 'SHOP_USE', checked: false }
];
// 不合法录入
export const invalidArr = [null, '', NaN, undefined];
// shopName对应名称
export enum ESHOP_NAME_MAP {
  ZZC_IGSN = '餐厅', // 自助餐
  XWC_GNWS = '餐厅', // 下午茶
  YYJS_MAOT = '适用地点', // 游泳健身
  JCGBT_ARDH = '贵宾厅名称', // 机场贵宾厅
  GTGBT_OCKA = '贵宾厅名称', // 高铁贵宾厅
  YDXX_YDXX = '门店名称', // 运动休闲
  QZ_QZAA = '门店名称', // 亲子
  XXJY_XXJY = '门店名称', // 学习教育
  JZFW_JZFW = '门店名称', // 家政服务
  JNJSJ_JNJSJ = '门店名称', // 接送机
  JHDJ_JHDJ = '门店名称', // 酒后代驾
}
// 对象
export interface Iobject {
  [x: string]: any;
}
// 特殊值转换
export const specialValSwitch = {
  [ATTR.MILEAGE + '-1']: '同城不限公里数'
};

// 一级类目字段
export const CLASS_CODE_LIST = {
  'oneCode': [
    'ZZC_IGSN',
    'XWC_GNWS',
    'YYJS_MAOT',
    'JCGBT_ARDH',
    'GTGBT_OCKA'
  ],
  'twoCode': [
    'QZ_QZAA',
    'XXJY_XXJY',
    'YDXX_YDXX',
    'JZFW_JZFW',
  ],
  'threeCode': [
    'JNJSJ_JNJSJ',
    'JHDJ_JHDJ',
  ]
}

// 机构订单下单来源
const organiseOrderSource = {
  'OPERATOR_ADD': '电话预约',
  'USER_ADD': '在线预约',
  'SHOP_USE': '到店使用',
}

// 菜单等级
const MenueGrade = {
  '1': '一级',
  '2': '二级',
  '3': '三级',
  '4': '四级',
  '5': '五级',
  '6': '六级',
}
// 标品结算模式
const StandardSettleMode = {
  'FULL_PACK': '一口全包价',
  'SINGLE_PRODUCT': '一口单产品价',
  'CUSTOM_PRODUCT': '单产品自定义价',
};

// 统计报表特定类目名字展示
const DoubleNameList = [
  'ZZC_IGSN',
  'CXFW_XBGP'
];

export {
  organiseOrderSource,
  MenueGrade,
  StandardSettleMode,
  DoubleNameList
}

// 导出所有常量 (将code转换为name时需要使用到) 详见管道MapValuePipe
export const ALL_CONSTANT = {
  POWER_LIMITED,
  WAYS_COOPERATION,
  DERCARRIAGE,
  PROTOCOL_ENUM,
  MEALSE_CTION,
  PARKING_FREE,
  STATUS_ENUM,
  WEEK_ENUM,
  MAP_WEEK,
  ACTIVE_STATUS,
  SERVICE_ENUM,
  SPECIAL_DAY,
  SPECIAL_DAY_FORM,
  SELECT_STATUS,
  ACTIVE_STYLE,
  ACTIVE_TYPE,
  PROJECT_TYPE,
  PAPER_TICKET_CODE,
  ORDER_TYPE,
  STORE_PROWER,
  PRICE_DIFFERENCE,
  VALIDITY_TYPE,
  LABEL_TYPE,
  MERCHANT_ORDER,
  ESHOP_NAME_MAP,
  YES_OR_NO,
};
