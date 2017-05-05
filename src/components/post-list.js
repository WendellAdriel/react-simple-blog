import React from 'react'
import { map } from 'lodash'

const renderPosts = posts => map(posts, post => (
  <li key={ post.id } className="list-group-item">
    { post.title }
  </li>
))

export default ({ posts }) => (
  <div>
    <h3>Posts</h3>
    <ul className="list-group">
      { renderPosts(posts) }
    </ul>
  </div>
)
