/*
 * @Author: TerryMin
 * @Date: 2020-11-12 19:21:58
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-03-05 15:40:21
 * @Description: file not
 */
import React, { useState, useReducer } from "react";

const myReducer = (state, action) => {
  switch (action.type) {
    case 'countUp':
      return {
        ...state,
        count: state.count + 1
      }
    default:
      return state
  }
}

export default function Item () {
  const [state, dispatch] = useReducer(myReducer, { count: 0 });

  return (
    <div className="App">
      <button onClick={() => { dispatch({ type: 'countUp' }) }}>+1</button>
      <p>Count:{state.count}</p>
    </div>
  )
}