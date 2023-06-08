import React, { useEffect, useState } from 'react';

import classes from './EditorialBoard.module.css';
import SwiperContainer from '../../../../../components/SwiperComponent/SwiperContainer/SwiperContainer';
import SwiperNavigation from '../../../../../components/SwiperComponent/SwiperNavigation/SwiperNavigation';
import EditorsBoardItem from './EditorialBoardItem/EditorialBoardItem';
import { useTranslation } from 'react-i18next';

import editorials from './editorials_b.json';

import { useAppSelector } from '../../../../../../../hooks/hooks';
import { selectorUserLanguage } from '../../../../../../../store/userSlice';
import { LanguageEnum } from '../../../../../components/Header/LanguageSelector/LanguageSelector';
import { EditorType } from '../../../../../../../types/types';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { scrollTop } from '../../../../../../../utils/functions';

type PropsType = {
  isFullPage?: boolean;
};

const EditorialBoard: React.FC<PropsType> = ({ isFullPage }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const userLanguage = useAppSelector(selectorUserLanguage);
  const [slides, setSlides] = useState<JSX.Element[]>([]);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  const onClickViewAll = () => {
    scrollTop();
    navigate('/editorial_board');
  };

  const makeSlide = (editor: EditorType) => {
    if (userLanguage === LanguageEnum.en) {
      return (
        <EditorsBoardItem
          position={editor.position.en ?? ''}
          author={editor.name.en ?? ''}
          title={editor.degree.en ?? ''}
          organization={editor.organization.en ?? ''}
          image={editor.image ?? ''}
        />
      );
    }
    if (userLanguage === LanguageEnum.ru) {
      return (
        <EditorsBoardItem
          position={editor.position.ru ?? ''}
          author={editor.name.ru ?? ''}
          title={editor.degree.ru ?? ''}
          organization={editor.organization.ru ?? ''}
          image={editor.image ?? ''}
        />
      );
    }
  };

  useEffect(() => {
    const slidersArray: JSX.Element[] = [];
    editorials.editorial_board.forEach((editor) => {
      const slide = makeSlide(editor);
      slide && slidersArray.push(slide);
    });
    setSlides(slidersArray);
    // eslint-disable-next-line
  }, [userLanguage]);

  return isFullPage ? (
    <section className="sj-haslayout sj-sectioninnerspace">
      <div className="sj-borderheading">
        <h3>{t('journalPage.editorialBoard.title')}</h3>
      </div>
      <div className={classNames('sj-newsposts', classes.editorList)}>
        {slides.map((slide, ind) => {
          return (
            <div className={classes.containerItem} key={ind}>
              {slide}
            </div>
          );
        })}
      </div>
    </section>
  ) : (
    <section className="sj-haslayout sj-sectioninnerspace">
      <div className={classNames('sj-borderheading', { [classes.swiperNavigationMobile]: window.innerWidth <= 576 })}>
        <h3>{t('journalPage.editorialBoard.title')}</h3>
        <div
          className={classNames({
            [classes.containerSwiperNavigation]: window.innerWidth > 576,
            [classes.containerSwiperNavigationMobile]: window.innerWidth <= 576,
          })}
        >
          <SwiperNavigation
            navigationPrevRef={navigationPrevRef}
            navigationNextRef={navigationNextRef}
            onClickViewAll={onClickViewAll}
          />
        </div>
      </div>
      <div className="sj-newsposts">
        <SwiperContainer
          navigationPrevRef={navigationPrevRef}
          navigationNextRef={navigationNextRef}
          slides={slides}
          slidesPerView={window.innerWidth > 576 ? 3 : 1}
        />
      </div>
    </section>
  );

  // return (
  //   <section className="sj-haslayout sj-sectioninnerspace">
  //     <div className="sj-borderheading">
  //       <h3>{t('journalPage.editorialBoard.title')}</h3>
  //       <div className={classes.containerSwiperNavigation}>
  //         <SwiperNavigation
  //           navigationPrevRef={navigationPrevRef}
  //           navigationNextRef={navigationNextRef}
  //           onClickViewAll={onClickViewAll}
  //         />
  //       </div>
  //     </div>
  //     <div className="sj-newsposts">
  //       <SwiperContainer
  //         navigationPrevRef={navigationPrevRef}
  //         navigationNextRef={navigationNextRef}
  //         slides={slides}
  //         slidesPerView={3}
  //       />
  //     </div>
  //   </section>
  // );
};

export default EditorialBoard;
