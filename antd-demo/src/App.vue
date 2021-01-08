<!--
 * @Author: TerryMin
 * @Date: 2021-01-07 10:44:14
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-01-07 10:52:31
 * @Description: file not
-->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <a-button type="primary">Button></a-button>

    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
