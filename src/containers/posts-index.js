import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchPosts } from '../actions'
import PostList from '../components/post-list'

class PostsIndex extends Component {
  componentDidMount () {
    this.props.fetchPosts()
  }

  render () {
    return (
      <PostList posts={ this.props.posts } />
    )
  }
}

function mapStateToProps (state) {
  return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex)
