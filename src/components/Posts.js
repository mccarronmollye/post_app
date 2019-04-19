import React from 'react';
import { posts } from '../data';

const Posts = () => {
  return (
    <div>
      {posts.map((post) => (
        <div>
        <h3>Title: {post.title}</h3>
        <p>Content: {post.content}</p>
        </div>
      ))}
    </div>
  )
}

export default Posts;
