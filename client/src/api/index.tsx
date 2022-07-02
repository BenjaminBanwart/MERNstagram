import axios from 'axios';

const url:string = 'https://mernstagram-api.herokuapp.com/posts'; // API call to the backend

export const fetchPosts:Function = () => axios.get(url);
export const createPost:Function = (newPost:FormData) => axios.post(url, newPost);