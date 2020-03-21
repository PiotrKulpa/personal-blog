import axios from 'axios';
import { serverAddress, } from '../const';

const endpoint = 'posts';

export const getPosts = async (page) => {
  const result = await axios.get(`${serverAddress}${endpoint}?&_embed&page=${page}`);
  return result;
}

export const getPost = async (slug) => {
  const result = await axios.get(`${serverAddress}${endpoint}?&_embed&slug=${slug}`);
  return result;
}