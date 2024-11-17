import { useState, useEffect } from 'react';
import { Post } from '../types/post';
import { fetchPosts } from '../services/api';

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  return { posts, error, loading };
}