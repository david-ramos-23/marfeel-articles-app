import request from '../request';

export const getArticles = async (section: string) => request.get(`${section}`);
