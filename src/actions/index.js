import axios from 'axios'

import { ROOT_URL, API_KEY } from '../config'

export const FETCH_POSTS = 'fetch_posts'

export function fetchPosts () {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)

  return {
    type: FETCH_POSTS,
    payload: request
  }
}
