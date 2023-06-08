import React, { useEffect, useState } from 'react';
import classes from './PaginationComponent.module.css';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

type PropsType = {
  totalItems: number;
  onChangePage: (pageNum: number) => void;
  itemPerPage?: number | undefined;
  selectedPage?: number | undefined;
  buttonsLimit?: number | undefined;
  topPagination?: boolean;
};

const getMaxPage = (totalItems: number, itemPerPage: number) => {
  return Math.ceil(totalItems / itemPerPage);
};

const getShowingPagesNumbers = ({
  totalItems,
  itemPerPage,
  startPage,
  buttonsLimit,
}: {
  totalItems: number;
  itemPerPage: number;
  startPage: number;
  buttonsLimit: number;
}) => {
  const pageNumbers = [];
  const maxPage = getMaxPage(totalItems, itemPerPage);

  if (maxPage > buttonsLimit) {
    if (startPage <= maxPage - buttonsLimit) {
      for (let i = startPage; i <= startPage + buttonsLimit - 1 && i <= maxPage; i++) {
        pageNumbers.push(i);
      }
    } else {
      for (let i = maxPage - buttonsLimit + 1; i <= maxPage; i++) {
        pageNumbers.push(i);
      }
    }
  } else {
    for (let i = 1; i <= maxPage; i++) {
      pageNumbers.push(i);
    }
  }
  return pageNumbers;
};

const PaginationComponent: React.FC<PropsType> = ({
  totalItems,
  onChangePage,
  itemPerPage = 5,
  selectedPage = 1,
  buttonsLimit = 5,
  topPagination = false,
}) => {
  const [startPage, setStartPage] = useState(selectedPage);
  const [activePage, setActivePage] = useState(selectedPage);
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);

  useEffect(() => {
    setPageNumbers(getShowingPagesNumbers({ totalItems, itemPerPage, startPage, buttonsLimit }));
  }, [totalItems, itemPerPage, startPage, buttonsLimit]);

  const onClickBtnPage = (pageNum: number) => {
    setActivePage(pageNum);
    onChangePage(pageNum);
  };

  const onClickNextBtn = () => {
    if (activePage < getMaxPage(totalItems, itemPerPage)) {
      setActivePage(activePage + 1);
      onChangePage(activePage + 1);
      if (activePage - startPage >= Math.floor(buttonsLimit / 2)) {
        setStartPage(startPage + 1);
      }
    }
  };

  const onClickPrevBtn = () => {
    if (activePage > 1) {
      setActivePage(activePage - 1);
      onChangePage(activePage - 1);
      if (startPage > 1) {
        setStartPage(startPage - 1);
      }
    }
  };

  const { t } = useTranslation();

  return (
    <div className={classNames(classes.container, { [classes.topPagination]: topPagination })}>
      <button className={classNames(classes.btnPrevious, classes.btnPreviousNext)} onClick={onClickPrevBtn}>
        <i className={classNames('fa', 'fa-angle-left', classes.icoPrevious)} />
        {t('pagination.prev')}
      </button>
      {pageNumbers.map((page) => {
        return (
          <button
            key={page}
            className={classNames(classes.buttonPage, { [classes.activeButton]: page === activePage })}
            onClick={() => {
              onClickBtnPage(page);
            }}
          >
            {page < 10 ? '0' + page : page}
          </button>
        );
      })}
      <button className={classNames(classes.btnNext, classes.btnPreviousNext)} onClick={onClickNextBtn}>
        {t('pagination.next')}
        <i className={classNames('fa', 'fa-angle-right', classes.icoNext)} />
      </button>
    </div>
  );
};

export default PaginationComponent;
