import { Post } from '../types/post';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export async function fetchPosts(): Promise<Post[]> {
  const response = await fetch(API_URL);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch posts: ${response.statusText}`);
  }
  
  return response.json();
}