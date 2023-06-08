import React, { useEffect, useState } from 'react';

import AuthorManuscriptsListItem from './AuthorManuscriptsListItem/AuthorManuscriptsListItem';
import {
  selectorArticlesApplyFilter,
  selectorArticlesCategories,
  selectorArticleSelectedCategoriesId,
  selectorManuscripts,
} from '../../../../../../../store/articlesSlice';
import { useAppSelector } from '../../../../../../../hooks/hooks';
import { ArticleCategoryType, ManuscriptType } from '../../../../../../../types/types';
import { useNavigate } from 'react-router-dom';
import { selectorUserSliceIsAuth } from '../../../../../../../store/userSlice';
import { useTranslation } from 'react-i18next';

const getFilteredManuscripts = ({
  categories,
  selectedCategoriesId,
  manuscripts,
}: {
  categories: ArticleCategoryType[];
  selectedCategoriesId: string[];
  manuscripts: ManuscriptType[];
}) => {
  const selectedCategoriesValue = categories
    .filter((category) => selectedCategoriesId.includes(category.id))
    .map((category) => category.value);

  return manuscripts.filter((manuscript) => selectedCategoriesValue.includes(manuscript.submission.objectType!));
};

const AuthorManuscriptsListContainer: React.FC = () => {
  const manuscripts = useAppSelector(selectorManuscripts);
  const applyFilter = useAppSelector(selectorArticlesApplyFilter);
  const categories = useAppSelector(selectorArticlesCategories);
  const selectedCategoriesId = useAppSelector(selectorArticleSelectedCategoriesId);

  const navigate = useNavigate();
  const isAuth = useAppSelector(selectorUserSliceIsAuth);
  const { t } = useTranslation();

  const [filteredManuscripts, setFilteredManuscripts] = useState<ManuscriptType[]>([]);

  useEffect(() => {
    setFilteredManuscripts(manuscripts);
  }, [manuscripts]);

  useEffect(() => {
    if (applyFilter) {
      const filtered = getFilteredManuscripts({ categories, selectedCategoriesId, manuscripts });
      setFilteredManuscripts(filtered);
    }
  }, [applyFilter, categories, manuscripts, selectedCategoriesId]);

  const showPopup = () => {
    if (isAuth) {
      navigate('/new_article');
    } else {
      navigate('/login?from=/new_article');
    }
  };

  return (
    <>
      <div className="sj-dashboardboxtitle sj-titlewithform">
        <div className="sj-formtheme sj-managesessionform">
          <fieldset>
            <div className="form-group">
              <button type="button" className="sj-btn sj-btnactive" onClick={showPopup}>
                {t('submitNew')}
              </button>
            </div>
          </fieldset>
        </div>
      </div>

      <ul id="accordion" className="sj-articledetails sj-articledetailsvtwo">
        {filteredManuscripts.map((manuscript) => {
          return <AuthorManuscriptsListItem key={manuscript.id} manuscript={manuscript} />;
        })}
      </ul>
    </>
  );
};

export default AuthorManuscriptsListContainer;
