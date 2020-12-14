/*
 * @Author: TerryMin
 * @Date: 2020-01-30 11:33:29
 * @LastEditors: TerryMin
 * @LastEditTime: 2020-10-20 13:53:07
 * @Description: file not
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch'
import { connect } from './react-redux'

class Content extends Component {
  static propTypes = {
    themeColor: PropTypes.string
  }

  render () {
    return (
      <div>
        <h3 style={{ color: this.props.themeColor }}>React.js 小书内容</h3>
        <ThemeSwitch />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);

  return {
    themeColor: state.themeColor
  }
}
Content = connect(mapStateToProps)(Content)

export default Content