import React from 'react';

import SearchComponent from '../../../../../components/SearchComponent/SearchComponent';
import { SortDirectionType } from '../../../../../../../types/types';
import PaginationComponent from '../../../../../components/PaginationComponent/PaginationComponent';
import { useTranslation } from 'react-i18next';

type PropsType = {
  onSearchClick: (data: string) => void;
  onSortClick: (sortDirection: SortDirectionType) => void;
  totalItems: number;
  onChangePage: (pageNum: number) => void;
  selectedPage: number;
};

const ArticlesListHeader: React.FC<PropsType> = ({
  onSearchClick,
  onSortClick,
  totalItems,
  onChangePage,
  selectedPage,
}) => {
  const { t } = useTranslation();

  return (
    <div className="sj-dashboardboxtitle sj-titlewithform">
      <h2>{t('articlesPage.title')}</h2>
      <PaginationComponent
        totalItems={totalItems}
        onChangePage={onChangePage}
        itemPerPage={10}
        selectedPage={selectedPage + 1}
        buttonsLimit={25}
        topPagination={true}
      />
      <SearchComponent onSearchClick={onSearchClick} onSortClick={onSortClick} />
    </div>
  );
};

export default ArticlesListHeader;
