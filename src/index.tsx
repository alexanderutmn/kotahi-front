import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './journals/css/normalize.css';
import './journals/css/fontawesome/fontawesome-all.css';
import './journals/css/font-awesome.min.css';
import './journals/css/linearicons.css';
import './journals/css/themify-icons.css';
import './journals/css/chartist.css';
import './journals/css/main.css';
import './journals/css/color.css';
import './journals/css/dashboard.css';
import './journals/css/transitions.css';
import './journals/css/responsive.css';
import './journals/css/custom.css';
import './reactCustomColors.css';
import './reactCustomCommonClasses.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from './store/store';
import ContentWrapper from './journals/commonComponents/ContentWrapper/ContentWrapper';
import Journal_TIU from './journals/journal_TIU/journal_TIU';

import { TRANSLATIONS_EN_JOURNAL_TIU } from './journals/journal_TIU/i18n/en/translationEn';
import { TRANSLATIONS_RU_JOURNAL_TIU } from './journals/journal_TIU/i18n/ru/translationTIU';
import { addTranslator } from './utils/functions';
import i18n from 'i18next';
import { Helmet } from 'react-helmet';

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const container = document.getElementById('root')!;
const root = createRoot(container);

export const TOKEN_NAME = 'token';
export const USER_LANGUAGE_KEY = 'userLanguageKey';

const appTitle = process.env.REACT_APP_JOURNAL_TITLE;
const journalUrl = process.env.REACT_APP_JOURNAL_URL;

console.log(`JournalApp version ${process.env.REACT_APP_VERSION} successfully started`);

const client = new ApolloClient({
  uri: "http://158.160.63.188:4000/graphql",
  cache: new InMemoryCache()
});

const getJournalJSX = () => {
  const journalTag = process.env.REACT_APP_JOURNAL_TAG;
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    console.log('journalTag = ', journalTag);
    console.log('baseUrl    = ', process.env.REACT_APP_APP_BASE_URL);
  }

  addTranslator(TRANSLATIONS_EN_JOURNAL_TIU, TRANSLATIONS_RU_JOURNAL_TIU);
  i18n.changeLanguage('en');
  // eslint-disable-next-line react/jsx-pascal-case
  return <Journal_TIU />;
};

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{appTitle}</title>
        <link rel="canonical" href={journalUrl} />
      </Helmet>
      <ApolloProvider client={client}>
        <ContentWrapper>{getJournalJSX()}</ContentWrapper>
      </ApolloProvider>
    </Provider>
  </BrowserRouter>
);
