<!--
 * @Author: TerryMin
 * @Date: 2021-01-07 10:44:14
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-03-15 11:09:00
 * @Description: file not
-->
<template>
  <div id="app">
    <!-- <img
      alt="Vue logo"
      src="./assets/logo.png"
    >
    <a-button type="primary">Button></a-button>

    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <HelloDemo
      v-bind:message="message"
      v-on:increment="increamentTotal"
    />
    <div>{{result}}</div>
    <div>total:{{total}}</div>
    <div v-if="seen">现在你看到我了</div>
    <!-- <button v-on:click="reverseMessage">反转消息</button> -->
  </div>
</template>

<script>
import HelloDemo from './components/HelloDemo.vue'

export default {
  name: 'App',
  components: {
    HelloDemo
  },
  data: function () {
    return {
      result: '',
      message: '页面加载于 ' + new Date().toLocaleString(),
      seen: true,
      total:0
    }
  },
  methods: {
    reverseMessage: function () {
      this.result = '结果'
    },
    increamentTotal: function () {
      this.total += 5;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
