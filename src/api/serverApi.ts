import { authApi } from './requests/authApi';
import { articlesApi } from './requests/articlesApi';

export const serverApi = {
  ...authApi,
  ...articlesApi,
};
