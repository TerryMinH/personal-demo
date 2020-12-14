/*
 * @Author: TerryMin
 * @Date: 2020-01-30 11:20:58
 * @LastEditors: TerryMin
 * @LastEditTime: 2020-10-20 17:59:40
 * @Description: 项目来自react.js小书  http://huziketang.mangojuice.top/books/react/
 */
import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import Header from './Header'
import Content from './Content'
import { Provider } from './react-redux'
import './index.css'

// store职责
function createStore(reducer) {
  let state = null
  const listeners = []
  // subscribe传递订阅方法
  const subscribe = (listener) => listeners.push(listener)
  const getState = () => state

  //发布 dispatch参数传递一个改变类型的对象并执行
  const dispatch = (action) => {
    // reducer获取最新状态的方法
    state = reducer(state, action)

    listeners.forEach((listener) => listener())
  }
  dispatch({}) // 初始化 state
  return { getState, dispatch, subscribe }
}

// 状态改变函数
const themeReducer = (state, action) => {
  if (!state) return {
    themeColor: 'red'
  }
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, themeColor: action.themeColor }
    default:
      return state
  }
}
const store = createStore(themeReducer)

class Index extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    )
  }
}

// 把 Provider 作为组件树的根节点
ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('root')
)
