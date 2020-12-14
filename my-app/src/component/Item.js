/*
 * @Author: TerryMin
 * @Date: 2020-11-12 19:21:58
 * @LastEditors: TerryMin
 * @LastEditTime: 2020-11-12 19:33:21
 * @Description: file not
 */
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default class Item extends React.Component {

  render() {
    return (
      <div>
       <Link to="/list">返回</Link>
      </div>
    )
  }

}