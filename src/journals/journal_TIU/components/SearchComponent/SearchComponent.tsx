import React, { useEffect, useRef, useState } from 'react';
import { SortDirectionEnum, SortDirectionType } from '../../../../types/types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAmountDesc, faSortAmountAsc } from '@fortawesome/free-solid-svg-icons';
import { useAppSelector } from '../../../../hooks/hooks';
import { selectorManuscriptsParams } from '../../../../store/articlesSlice';
import { IQueryParams } from '../../../../utils/functions';
import { useTranslation } from 'react-i18next';

type PropsType = {
  onSearchClick?: (searchData: string) => void;
  onSortClick?: (sortDirection: SortDirectionType) => void;
};

const SearchComponent: React.FC<PropsType> = ({ onSearchClick, onSortClick }) => {
  const params = useAppSelector(selectorManuscriptsParams);

  const getSortDir = (params: IQueryParams | undefined) => {
    if (params?.sortDir) {
      return params.sortDir as SortDirectionType;
    }
    return undefined;
  };

  const getFilterValue = (params: IQueryParams | undefined) => {
    if (params?.filters) {
      console.log('params?.filters =', params.filters.split('_eq_')[1]);
      return params.filters.split('_eq_')[1];
    }
    return '';
  };

  const formRef = useRef<HTMLFormElement | null>(null);

  const [value, setValue] = useState(getFilterValue(params));

  const [sortDirection, setSortDirection] = useState<SortDirectionType>(getSortDir(params));

  useEffect(() => {
    setValue(getFilterValue(params));
  }, [params]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSearchClick && formRef.current) {
      const data = new FormData(formRef.current).get('search') as string;
      setValue('');
      onSearchClick(data);
    }
  };

  const onSortIconClick = () => {
    switch (sortDirection) {
      case undefined: {
        setSortDirection(SortDirectionEnum.desc);
        onSortClick && onSortClick(SortDirectionEnum.desc);
        break;
      }
      case SortDirectionEnum.desc: {
        setSortDirection(SortDirectionEnum.asc);
        onSortClick && onSortClick(SortDirectionEnum.asc);
        break;
      }
      case SortDirectionEnum.asc: {
        setSortDirection(undefined);
        onSortClick && onSortClick(undefined);
        break;
      }
    }
  };

  const { t } = useTranslation();

  return (
    <div className="sj-widget sj-widgetsearch">
      <div className="sj-widgetcontent">
        <form className="sj-formtheme sj-formsearchvtwo" onSubmit={onSubmit} ref={formRef}>
          {onSortClick && (
            <div className="sj-sortupdown" onClick={onSortIconClick} style={{ cursor: 'pointer' }}>
              {
                <FontAwesomeIcon
                  size="lg"
                  icon={sortDirection === SortDirectionEnum.asc ? faSortAmountAsc : faSortAmountDesc}
                  color={sortDirection === undefined ? '#999' : '#5e9cea'}
                />
              }
            </div>
          )}
          <fieldset>
            <input
              type="search"
              name="search"
              className="form-control"
              value={value}
              onChange={onChange}
              placeholder={t('searchHere')}
            />
            <button type="submit" className="sj-btnsearch">
              <i className="lnr lnr-magnifier" />
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default SearchComponent;
