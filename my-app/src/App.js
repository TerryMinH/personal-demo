/*
 * @Author: TerryMin
 * @Date: 2020-08-25 17:27:01
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-03-05 14:56:41
 * @Description: file not
 */
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import BasicExample from './component/example';

// function App() {
//   return (
//     <div className="App">
//       <BasicExample></BasicExample>
//     </div>
//   );
// }

// export default App;

import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import { Redirect } from 'react-router'
import CacheRoute, { CacheSwitch } from 'react-router-cache-route'

import List from './component/List'
import Item from './component/Item'
import CustomerHooks from './component/CustomerHooks'

const App = () => (
  <>
    <CustomerHooks></CustomerHooks>
    <Item></Item>
  </>
)

export default App
