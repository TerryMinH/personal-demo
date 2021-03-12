/*
 * @Author: TerryMin
 * @Date: 2020-08-25 17:27:01
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-03-11 13:44:40
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

import React, { useState, memo, useMemo } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import { Redirect } from 'react-router'
import CacheRoute, { CacheSwitch } from 'react-router-cache-route'

const Child = memo(({ data }) => {
  console.log('child render...', data.name);
  return (
    <div>
      <div>child</div>
      <div>{data.name}</div>
    </div>
  )
}
)
const App = () => {
  console.log('Hook render...');
  const [count, setCount] = useState(0);
  const [name, setName] = useState('rose');
  const data = useMemo(() => {
    return { name }
  }, [name])
  console.log(this);
  const changeName = () => {
    setCount(count + 1);
    setName('Terry')
  }
  
  return (
    <div>
      <div>{count}</div>
      <button onClick={changeName}>update count</button>
      <Child data={data} />
    </div>
  )
}
export default App
