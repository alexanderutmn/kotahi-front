import classes from './AuthorManuscriptsListItem.module.css';
import React from 'react';
import classNames from 'classnames';
import { ManuscriptType } from '../../../../../../../../types/types';
import { formatDate } from '../../../../../../../../utils/functions';
import { useTranslation } from 'react-i18next';

type PropsType = {
  manuscript: ManuscriptType;
};

const AuthorManuscriptsListItem: React.FC<PropsType> = ({ manuscript }) => {
  const { t } = useTranslation();

  const onClickGoToKotahi = () => {
    const token = localStorage.getItem('token');
    const baseUrl = process.env.REACT_APP_APP_BASE_URL;
    const href = `${baseUrl}/versions/${manuscript.id}/submit?from_journal=1&token_i_frame=${token}`;
    window.open(href);
  };

  return (
    <>
      <li className={classNames('sj-articleheader')} onClick={onClickGoToKotahi}>
        <div className={'sj-detailstime'}>
          <span className={classes.dateContainer}>
            <i className="ti-calendar" />
            {formatDate(manuscript.published ? manuscript.published : manuscript.created)}
          </span>
          <span className={classes.idContainer}>
            <i className="ti-bookmark" />
            {`ID: ${manuscript.id}`}
          </span>
          <span className={classes.categoryTitleContainer}>
            <i className="ti-layers" />
            {`Status: ${manuscript.status}`}
          </span>
          <h4>{`${manuscript.meta.title}`}</h4>
        </div>
        <div className="sj-nameandmail">
          <span>{t('articlesPage.correspondingAuthor')}</span>
          <h4>{manuscript.submitter.username}</h4>
          <span className="sj-mailinfo">{manuscript.submitter.email}</span>
        </div>
      </li>
    </>
  );
};

export default AuthorManuscriptsListItem;
