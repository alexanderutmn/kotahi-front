import { instanceAxios, setAuthAndJournalHeaders, setJournalHeader } from '../instanceAxios';
import {
  EditorsPickSlidesType,
  GetArticleCategoriesServerType,
  GetArticlesServerType,
  GetManuscriptServerType,
  LinkToManuscriptPDFServerType,
} from '../serverTypes';
import { getQueryParams, IQueryParams } from '../../utils/functions';
import { TOKEN_NAME } from '../../index';

export const articlesApi = {
  async fetchArticles(params: IQueryParams | undefined) {
    const queryParams = getQueryParams(params);
    const response = await instanceAxios.get<GetArticlesServerType>(`/manuscripts${queryParams}`, setJournalHeader());
    return { manuscripts: response.data.manuscripts, manuscriptsTotalCount: response.data.totalCount, params: params };
  },

  async fetchArticleCategories() {
    const response = await instanceAxios.get<GetArticleCategoriesServerType>(
      '/manuscripts/categories',
      setJournalHeader()
    );
    return response.data;
  },

  async fetchMyManuscripts(params: IQueryParams | undefined) {
    const token = localStorage.getItem(TOKEN_NAME);
    if (token) {
      const queryParams = getQueryParams(params);
      const response = await instanceAxios.get<GetArticlesServerType>(
        `/manuscripts/my${queryParams}`,
        setAuthAndJournalHeaders(token)
      );
      return {
        manuscripts: response.data.manuscripts,
        manuscriptsTotalCount: response.data.totalCount,
        params: params,
      };
    } else {
      alert('You are not authorized. \nLogin Please');
      return { manuscripts: [], manuscriptsTotalCount: 0, params: params };
    }
  },

  async fetchManuscriptById(id: string) {
    const response = await instanceAxios.get<GetManuscriptServerType>(`/manuscripts/${id}`);
    return response.data;
  },

  async fetchEditorsPickSlidesByURL(url: string): Promise<EditorsPickSlidesType> {
    const data = await fetch(url);
    return await data.json();
  },

  async fetchLinkToManuscriptPDFById(id: string) {
    const response = await instanceAxios.get<LinkToManuscriptPDFServerType>(`/manuscripts/pdf/${id}`);
    return response.data;
  },
};
