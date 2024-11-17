import React from 'react';
import { BlogPost } from './components/BlogPost';
import { ErrorMessage } from './components/ErrorMessage';
import { LoadingSpinner } from './components/LoadingSpinner';
import { usePosts } from './hooks/usePosts';

function App() {
  const { posts, error, loading } = usePosts();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto py-12 px-4">
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto py-12 px-4">
          <ErrorMessage message={error} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Posts</h1>
        <div className="space-y-6">
          {posts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;