import axios from 'axios';

const API_URL = 'http://localhost:3000/api/articles';

export const getArticles = () => axios.get(API_URL);
export const getArticle = (id: string) => axios.get(`${API_URL}/${id}`);
export const createArticle = (article: any) => axios.post(API_URL, article);// Замінити ані на нашу модель статті
export const updateArticle = (id: string, article: any) => axios.put(`${API_URL}/${id}`, article);
export const deleteArticle = (id: string) => axios.delete(`${API_URL}/${id}`);
