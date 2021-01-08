/*
 * @Author: TerryMin
 * @Date: 2021-01-07 10:44:14
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-01-07 10:51:37
 * @Description: file not
 */
import Vue from 'vue';
import Button from 'ant-design-vue/lib/button';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue';

Vue.component(Button.name, Button);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
