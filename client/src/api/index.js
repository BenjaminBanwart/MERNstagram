import axios from 'axios';

const url = 'https://mernstagram-api.herokuapp.com/posts'; // API call to the backend

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);