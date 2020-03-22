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

export const searchPost = async (search, pageId) => {
  const result = await axios.get(`${serverAddress}${endpoint}?&_embed&search=${search}&page=${pageId}`);
  return result;
}

export const searchTags = async (tag, pageId) => {
  const result = await axios.get(`${serverAddress}${endpoint}?_embed&tags=${tag}&page=${pageId}`);
  return result;
}