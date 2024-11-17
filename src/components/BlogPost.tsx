import React from 'react';
import { Post } from '../types/post';

interface BlogPostProps {
  post: Post;
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-bold text-gray-800 mb-4">{post.title}</h2>
      <p className="text-gray-600 leading-relaxed">{post.body}</p>
    </article>
  );
}