import axios from 'axios'

import { ROOT_URL, API_KEY } from '../config'

export const FETCH_POSTS = 'fetch_posts'
export const CREATE_POST = 'create_post'

export function fetchPosts () {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function createPost (values, callback) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback())

  return {
    type: CREATE_POST,
    payload: request
  }
}
