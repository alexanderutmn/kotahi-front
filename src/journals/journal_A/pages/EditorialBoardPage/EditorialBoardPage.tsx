import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header/Header';
import InnerBanner from '../../components/InnerBanner/InnerBanner';
import AnimatedPage from '../../components/AnimatedPage/AnimatedPage';
import Footer from '../../components/Footer/Footer';
import EditorialBoardMain from './EditorialBoardMain/EditorialBoardMain';
import CommonRightColumn from '../../components/CommonRightColumn/CommonRightColumn';

const EditorialBoardPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <InnerBanner
        title={t('editorialBoardPage.title')}
        customLink={{ route: '/editorial_board', routeDescription: t('editorialBoardPage.title') }}
      />
      <AnimatedPage>
        <div id="sj-twocolumns" className="sj-twocolumns" style={{ paddingTop: '80px' }}>
          <div className="container">
            <div className="row">
              <EditorialBoardMain />
              <CommonRightColumn />
            </div>
          </div>
        </div>
      </AnimatedPage>
      <Footer />
    </>
  );
};

export default EditorialBoardPage;
