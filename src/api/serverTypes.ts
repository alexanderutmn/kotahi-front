import { ArticleCategoryType, ManuscriptType } from '../types/types';

export type GetArticlesServerType = {
  totalCount: number;
  manuscripts: ManuscriptType[];
};

export type WhoAmITypeServerType = {
  currentUser: {
    id: string;
    username: string;
  };
};

export type GetArticleCategoriesServerType = {
  categories: ArticleCategoryType[];
};

export type GetManuscriptServerType = ManuscriptType;

type EditorsPickArticleType = {
  article_id: string;
  authors: string;
  title: string;
  description: string;
  thumbnail_url: string;
};

export type EditorsPickArticleSlideType = {
  slide_title: string;
  slide_articles: EditorsPickArticleType[];
};

export type EditorsPickSlidesType = {
  slides: EditorsPickArticleSlideType[];
};

export type LinkToManuscriptPDFServerType = {
  id: string;
  pdfUrl: {
    pdfUrl: string;
  };
};
