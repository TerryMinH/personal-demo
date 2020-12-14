/*
 * @Author: TerryMin
 * @Date: 2020-11-05 10:38:03
 * @LastEditors: TerryMin
 * @LastEditTime: 2020-11-05 10:40:01
 * @Description: file not
 */
import React from 'react'
import PropTypes from 'prop-types'

const Posts = ({ posts }) => (
  <ul>
    {posts.map((post, i) =>
      <li key={i}>{post.title}</li>
    )}
  </ul>
)

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}

export default Posts
