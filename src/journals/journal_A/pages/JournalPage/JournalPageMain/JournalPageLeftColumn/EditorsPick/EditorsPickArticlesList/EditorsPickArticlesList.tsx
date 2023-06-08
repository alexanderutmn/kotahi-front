import React, { useEffect, useState } from 'react';
import { TFunction, useTranslation } from 'react-i18next';
import classes from './EditorsPickArticlesList.module.css';
import SwiperNavigation from '../../../../../../components/SwiperComponent/SwiperNavigation/SwiperNavigation';
import SwiperContainer from '../../../../../../components/SwiperComponent/SwiperContainer/SwiperContainer';

import { NavigateFunction, useNavigate } from 'react-router-dom';
import { scrollTop } from '../../../../../../../../utils/functions';

import { useAppSelector } from '../../../../../../../../hooks/hooks';
import { selectorUserLanguage } from '../../../../../../../../store/userSlice';
import { selectorEditorsPick } from '../../../../../../../../store/articlesSlice';
import { EditorsPickArticleSlideType } from '../../../../../../../../api/serverTypes';

const getSlides = (slidesLocal: EditorsPickArticleSlideType[], navigate: NavigateFunction, t: TFunction) => {
  const slidersArray: JSX.Element[] = [];
  slidesLocal.forEach((slide) => {
    let oneSlide: JSX.Element[] = [];
    slide.slide_articles.forEach((article, ind) => {
      oneSlide.push(
        <article className="sj-post sj-editorchoice" key={ind}>
          <div className="sj-postcontent">
            <div className="sj-head">
              <span className="sj-username">{article.authors}</span>
              <h3>
                <button
                  className={'btnBlueOnHover'}
                  onClick={() => {
                    scrollTop();
                    navigate(`/article_details/${article.article_id}`);
                  }}
                >
                  {article.title}
                </button>
              </h3>
            </div>
            <div className="sj-description">
              <p>{article.description}</p>
            </div>
            <button
              className="sj-btn"
              onClick={() => {
                scrollTop();
                navigate(`/article_details/${article.article_id}`);
              }}
            >
              {t('editorsPick.readArticle')}
            </button>
          </div>
          <figure className="sj-postimg">
            <img src={article.thumbnail_url} alt="description" />
          </figure>
        </article>
      );
    });
    if (!!oneSlide.length) {
      slidersArray.push(
        <div className="item">
          <div className="sj-borderheading">
            <h4 className="sectionTitle">{slide.slide_title}</h4>
          </div>
          {oneSlide}
        </div>
      );
    }
  });
  return slidersArray;
};

const EditorsPickArticlesList = () => {
  const { t } = useTranslation();

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  const navigate = useNavigate();

  const onClickViewAll = () => {
    navigate('/articles');
  };

  const userLanguage = useAppSelector(selectorUserLanguage);
  const editorsPick = useAppSelector(selectorEditorsPick);

  const [slides, setSlides] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const slidesLocal = editorsPick?.slides ?? [];
    setSlides(getSlides(slidesLocal, navigate, t));
    // eslint-disable-next-line
  }, [userLanguage, editorsPick]);

  return (
    <section className="sj-haslayout sj-sectioninnerspace">
      <div className="sj-borderheading">
        <h3>{t('editorsPick.title')}</h3>
        <div className={classes.containerSwiperNavigation}>
          <SwiperNavigation
            navigationPrevRef={navigationPrevRef}
            navigationNextRef={navigationNextRef}
            onClickViewAll={onClickViewAll}
          />
        </div>
      </div>
      <SwiperContainer
        navigationPrevRef={navigationPrevRef}
        navigationNextRef={navigationNextRef}
        slides={slides}
        loop={true}
      />
    </section>
  );
};

export default EditorsPickArticlesList;
