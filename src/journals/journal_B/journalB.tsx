import React, { useEffect } from 'react';
import AppRouter from './components/AppRouter/AppRouter';
import { TOKEN_NAME, USER_LANGUAGE_KEY } from '../../index';
import { authUserThunk, setLanguage } from '../../store/userSlice';
import { useAppDispatch } from '../../hooks/hooks';
import { useSearchParams } from 'react-router-dom';
import Preloader from './components/Preloader/Preloader';
import { LanguageEnum } from './components/Header/LanguageSelector/LanguageSelector';
import { getArticlesThunk, getEditorsPickThunk, resetManuscriptsQueryParams } from '../../store/articlesSlice';

const JournalB: React.FC = () => {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams({});

  useEffect(() => {
    let token = searchParams.get(TOKEN_NAME);
    if (!token) {
      token = localStorage.getItem(TOKEN_NAME);
    }
    if (token) {
      dispatch(authUserThunk(token));
      setSearchParams({});
    }
    dispatch(setLanguage(LanguageEnum.en));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch(getArticlesThunk({ page: '0', limit: '10' }));
    if (process.env.REACT_APP_EDITORS_PICK_JSON) {
      dispatch(getEditorsPickThunk(process.env.REACT_APP_EDITORS_PICK_JSON));
    }
    return () => {
      dispatch(resetManuscriptsQueryParams());
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const userLanguageLocal = localStorage.getItem(USER_LANGUAGE_KEY);
    if (userLanguageLocal) {
      const savedLanguage: LanguageEnum =
        Object.values(LanguageEnum)[Object.keys(LanguageEnum).indexOf(userLanguageLocal)];
      dispatch(setLanguage(savedLanguage));
    } else {
      dispatch(setLanguage(LanguageEnum.en));
      localStorage.setItem(
        USER_LANGUAGE_KEY,
        Object.keys(LanguageEnum)[Object.values(LanguageEnum).indexOf(LanguageEnum.en)]
      );
    }
    // eslint-disable-next-line
  }, []);

  return (
    <React.Suspense fallback={<Preloader />}>
      <AppRouter />;
    </React.Suspense>
  );
};

export default JournalB;
