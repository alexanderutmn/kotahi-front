import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';

import { RootState } from './store';
import { ArticleCategoryType, ManuscriptType } from '../types/types';
import {
  EditorsPickSlidesType,
  GetArticleCategoriesServerType,
  GetManuscriptServerType,
  LinkToManuscriptPDFServerType,
} from '../api/serverTypes';
import { showError } from './errorHelper';
import { serverApi } from '../api/serverApi';
import { IQueryParams } from '../utils/functions';

export interface ArticlesState {
  isLoadingArticles: boolean;
  isLoadingCategories: boolean;
  manuscripts: ManuscriptType[];
  manuscriptsTotalCount: number;
  manuscriptsQueryParams: IQueryParams | undefined;
  myManuscripts: ManuscriptType[];
  myManuscriptsTotalCount: number;
  myManuscriptsQueryParams: IQueryParams | undefined;
  categories: ArticleCategoryType[];
  selectedCategoriesId: string[];
  applyFilter: number;
  isLoadingManuscript: boolean;
  manuscriptId: string | undefined;
  manuscript: ManuscriptType | undefined;
  isLoadingEditorsPick: boolean;
  editorsPick: EditorsPickSlidesType | undefined;
  linkToManuscriptPdf: string | undefined;
  loadingManuscriptPDFId: string | undefined;
}

const initialState: ArticlesState = {
  isLoadingArticles: false,
  isLoadingCategories: false,
  manuscripts: [],
  manuscriptsTotalCount: 0,
  manuscriptsQueryParams: undefined,
  myManuscripts: [],
  myManuscriptsTotalCount: 0,
  myManuscriptsQueryParams: undefined,
  categories: [],
  selectedCategoriesId: [],
  applyFilter: 0,
  isLoadingManuscript: false,
  manuscriptId: undefined,
  manuscript: undefined,
  isLoadingEditorsPick: false,
  editorsPick: undefined,
  linkToManuscriptPdf: undefined,
  loadingManuscriptPDFId: undefined,
};

type ResponseTypeGetArticlesThunk = {
  manuscripts: ManuscriptType[];
  manuscriptsTotalCount: number;
  params: IQueryParams | undefined;
};

export const getArticlesThunk = createAsyncThunk<
  ResponseTypeGetArticlesThunk,
  IQueryParams | undefined,
  { rejectValue: string }
>('articles/getArticles', async (queryParams, { rejectWithValue }) => {
  try {
    return await serverApi.fetchArticles(queryParams);
  } catch (e) {
    return rejectWithValue('Server error - fetch articles');
  }
});

export const getEditorsPickThunk = createAsyncThunk<EditorsPickSlidesType, string, { rejectValue: string }>(
  'articles/getEditorsPick',
  async (url, { rejectWithValue }) => {
    try {
      return await serverApi.fetchEditorsPickSlidesByURL(url);
    } catch (e) {
      return rejectWithValue('Server error - fetch EditorsPick');
    }
  }
);

export const getMyManuscriptsThunk = createAsyncThunk<
  ResponseTypeGetArticlesThunk,
  IQueryParams | undefined,
  { rejectValue: string }
>('articles/getMyManuscriptsThunk', async (queryParams, { rejectWithValue }) => {
  try {
    return await serverApi.fetchMyManuscripts(queryParams);
  } catch (e) {
    return rejectWithValue('Server error - fetch articles');
  }
});

export const getLinkToManuscriptPDFThunk = createAsyncThunk<
  LinkToManuscriptPDFServerType,
  string,
  { rejectValue: string }
>('articles/getLinkToManuscriptPDFThunk', async (id, { rejectWithValue }) => {
  try {
    return await serverApi.fetchLinkToManuscriptPDFById(id);
  } catch (e) {
    return rejectWithValue('Server error - fetch article PDF');
  }
});

export const getArticleCategories = createAsyncThunk<
  GetArticleCategoriesServerType,
  undefined,
  { rejectValue: string }
>('articles/getArticleCategories', async (_, { rejectWithValue }) => {
  try {
    return await serverApi.fetchArticleCategories();
  } catch (e) {
    return rejectWithValue('Server error - fetch article categories');
  }
});

export const getPublishedArticle = createAsyncThunk<GetManuscriptServerType, string, { rejectValue: string }>(
  'articles/getPublishedArticle',
  async (id, { rejectWithValue }) => {
    try {
      return await serverApi.fetchManuscriptById(id);
    } catch (e) {
      return rejectWithValue('Server error - fetch article categories');
    }
  }
);

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    resetManuscriptsQueryParams: (state) => {
      state.manuscriptsQueryParams = undefined;
    },
    resetManuscriptPdf: (state) => {
      state.linkToManuscriptPdf = undefined;
      state.loadingManuscriptPDFId = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getArticleCategories.pending, (state) => {
        state.isLoadingCategories = true;
      })
      .addCase(getEditorsPickThunk.pending, (state) => {
        state.isLoadingEditorsPick = true;
      })
      .addCase(getEditorsPickThunk.fulfilled, (state, action) => {
        state.editorsPick = action.payload;
        state.isLoadingEditorsPick = false;
      })
      .addCase(getArticleCategories.fulfilled, (state, action) => {
        state.categories = action.payload.categories;
        state.isLoadingCategories = false;
      })
      .addCase(getLinkToManuscriptPDFThunk.pending, (state, action) => {
        state.loadingManuscriptPDFId = action.meta.arg;
      })
      .addCase(getLinkToManuscriptPDFThunk.fulfilled, (state, action) => {
        state.linkToManuscriptPdf = action.payload.pdfUrl.pdfUrl;
      })
      .addMatcher(isAnyOf(getArticlesThunk.pending, getMyManuscriptsThunk.pending), (state) => {
        state.isLoadingArticles = true;
      })
      .addMatcher(isAnyOf(getArticlesThunk.fulfilled, getMyManuscriptsThunk.fulfilled), (state, action) => {
        state.manuscripts = action.payload.manuscripts;
        state.manuscriptsTotalCount = action.payload.manuscriptsTotalCount;
        state.manuscriptsQueryParams = action.payload.params;
        state.isLoadingArticles = false;
      })
      .addMatcher(
        isAnyOf(
          getArticlesThunk.rejected,
          getArticleCategories.rejected,
          getMyManuscriptsThunk.rejected,
          getPublishedArticle.rejected,
          getEditorsPickThunk.rejected,
          getLinkToManuscriptPDFThunk.rejected
        ),
        (state, action) => {
          state.isLoadingArticles = false;
          state.isLoadingCategories = false;
          state.isLoadingManuscript = false;
          state.linkToManuscriptPdf = undefined;
          state.loadingManuscriptPDFId = undefined;
          showError(action.payload);
        }
      )
      .addMatcher(isAnyOf(getPublishedArticle.pending), (state) => {
        state.isLoadingManuscript = true;
      })
      .addMatcher(isAnyOf(getPublishedArticle.fulfilled), (state, action) => {
        state.manuscript = action.payload;
        state.manuscriptId = action.payload.id;
        state.isLoadingManuscript = false;
      });
  },
});

export const { resetManuscriptsQueryParams, resetManuscriptPdf } = articlesSlice.actions;

export const selectorArticlesIsLoadingArticles = (state: RootState) => state.articles.isLoadingArticles;
export const selectorManuscripts = (state: RootState) => state.articles.manuscripts;
export const selectorManuscriptsTotalCount = (state: RootState) => state.articles.manuscriptsTotalCount;
export const selectorManuscriptsParams = (state: RootState) => state.articles.manuscriptsQueryParams;
export const selectorArticlesCategories = (state: RootState) => state.articles.categories;
export const selectorArticlesApplyFilter = (state: RootState) => state.articles.applyFilter;
export const selectorArticleSelectedCategoriesId = (state: RootState) => state.articles.selectedCategoriesId;
export const selectorManuscript = (state: RootState) => state.articles.manuscript;
export const selectorEditorsPick = (state: RootState) => state.articles.editorsPick;
export const selectorLinkToManuscriptPdf = (state: RootState) => state.articles.linkToManuscriptPdf;
export const selectorLoadingManuscriptPDFId = (state: RootState) => state.articles.loadingManuscriptPDFId;

export default articlesSlice.reducer;
