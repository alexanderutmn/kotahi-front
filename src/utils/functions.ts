import React from 'react';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

export const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export interface IQueryParams {
  sortBy?: string;
  sortDir?: string;
  page?: string;
  limit?: string;
  filters?: string;
}

export const getQueryParams = (params: IQueryParams | undefined) => {
  if (params) {
    let queryParams: string | undefined;
    const entries = Object.entries(params!);
    queryParams = entries.reduce((acc, entry) => acc + `&${entry[0]}=${entry[1]}`, '');
    queryParams = '?' + queryParams.slice(1);
    return queryParams;
  }
  return;
};

export const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleTimeString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
};

type TranslatorInterface = {
  [key: string]: string | TranslatorInterface;
};

export const addTranslator = (en: TranslatorInterface, ru: TranslatorInterface) => {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          translation: en,
        },
        ru: {
          translation: ru,
        },
      },
    });
};

export const stopPropagation = <T>(event: React.BaseSyntheticEvent<T>) => event.stopPropagation();

export const preventDefault = <T>(event: React.BaseSyntheticEvent<T>) => event.preventDefault();
