/*
 * @Author: TerryMin
 * @Date: 2020-01-30 11:33:35
 * @LastEditors: TerryMin
 * @LastEditTime: 2020-10-20 13:16:58
 * @Description: file not
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from './react-redux'

class Header extends Component {
  static propTypes = {
    themeColor: PropTypes.string
  }

  render () {
    return (
      <h1 style={{ color: this.props.themeColor }}>React.js 小书</h1>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}
Header = connect(mapStateToProps)(Header)
export default Header