import axios from 'axios';

const url = 'http://localhost:1234/posts'; // API call to the backend

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);