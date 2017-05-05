import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchPosts } from '../actions'
import PostList from '../components/post-list'
import ButtonLink from '../components/button-link'

class PostsIndex extends Component {
  componentDidMount () {
    this.props.fetchPosts()
  }

  render () {
    return (
      <div>
        <ButtonLink url="/posts/new" />
        <PostList posts={ this.props.posts } />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex)
