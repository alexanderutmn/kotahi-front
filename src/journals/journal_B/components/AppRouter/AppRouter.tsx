import React from 'react';
import { Route, Routes } from 'react-router-dom';
import JournalPage from '../../pages/JournalPage/JournalPage';
import AboutJournalPage from '../../pages/AboutJournalPage/AboutJournalPage';
import AuthorHomePage from '../../pages/AuthorHomePage/AuthorHomePage';
import ArticlesPage from '../../pages/ArticlesPage/ArticlesPage';
import AimsAndScopePage from '../../pages/AimsAndScopePage/AimsAndScopePage';
import AuthorGuideLines from '../../pages/AuthorGuideLines/AuthorGuideLines';
import HowToSubmitPage from '../../pages/HowToSubmitPage/HowToSubmitPage';
import ArticleDetailPage from '../../pages/ArticleDetailPage/ArticleDetailPage';
import Error404Page from '../../pages/Error404Page/404ErrorPage';
import NewArticlePage from '../../pages/NewArticlePage/NewArticlePage';
import ContactUsPage from '../../pages/ContactUsPage/ContactUsPage';
import RightsAndPermissionsPage from '../../pages/RightsAndPermissionsPage/RightsAndPermissionsPage';
import { useAppSelector } from '../../../../hooks/hooks';
import { selectorUserSliceIsAuth } from '../../../../store/userSlice';
import LoginPage from '../../pages/LoginPage/LoginPage';
import AddEmailPage from '../../pages/AddEmailPage/AddEmailPage';
import EditorialBoardPage from '../../pages/EditorialBoardPage/EditorialBoardPage';

const publicRoutes = [
  { path: '/', element: <JournalPage /> },
  { path: '/about', element: <AboutJournalPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/articles', element: <ArticlesPage /> },
  { path: '/aims_and_scope', element: <AimsAndScopePage /> },
  { path: '/author_guide_lines', element: <AuthorGuideLines /> },
  { path: '/how_to_submit', element: <HowToSubmitPage /> },
  { path: '/contact_us', element: <ContactUsPage /> },
  { path: '/editorial_board', element: <EditorialBoardPage /> },
  { path: '/rights_and_permissions', element: <RightsAndPermissionsPage /> },
  { path: '/article_details/:manuscript_id', element: <ArticleDetailPage /> },
];

const protectedRoutes = [
  { path: '/author', element: <AuthorHomePage /> },
  { path: '/new_article', element: <NewArticlePage /> },
  { path: '/submit_article/:manuscript_id', element: <NewArticlePage /> },
  { path: '/email', element: <AddEmailPage /> },
];

const AppRouter: React.FC = () => {
  const isAuth = useAppSelector(selectorUserSliceIsAuth);

  return (
    <>
      <Routes>
        {publicRoutes.map((route, ind) => (
          <Route key={ind} path={route.path} element={route.element} />
        ))}
        {isAuth && protectedRoutes.map((route, ind) => <Route key={ind} path={route.path} element={route.element} />)}
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </>
  );
};

export default AppRouter;
