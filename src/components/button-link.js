import React from 'react'
import { Link } from 'react-router-dom'

export default ({ url }) => (
  <div className="text-xs-right">
    <Link className="btn btn-primary" to={ url }>
      Create new post
    </Link>
  </div>
)
