/*
 * @Author: TerryMin
 * @Date: 2020-08-25 17:27:01
 * @LastEditors: TerryMin
 * @LastEditTime: 2020-11-30 10:56:11
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
import Home from './component/Home'

const App = () => (
  <Router>
    <CacheSwitch>
      <CacheRoute exact path="/home" component={Home} />
      <CacheRoute exact path="/list" component={List} />
      <Route exact path="/item/:id" component={Item} />
      {/* <Route render={() => <div>404 Not Found</div>} /> */}
      <Redirect to="/home" /> 
    </CacheSwitch>
  </Router>
)

export default App
