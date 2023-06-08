import classNames from 'classnames';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import thumbnailsDocImg from '../../../../../../../images/thumbnails/doc-img.jpg';
import thumbnailsImg02 from '../../../../../../../images/thumbnails/img-02.jpg';
import classes from './ArticleListItem.module.css';
import { ManuscriptType } from '../../../../../../../../types/types';
import { formatDate } from '../../../../../../../../utils/functions';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../../../../../../hooks/hooks';
import {
  getLinkToManuscriptPDFThunk,
  resetManuscriptPdf,
  selectorLinkToManuscriptPdf,
  selectorLoadingManuscriptPDFId,
} from '../../../../../../../../store/articlesSlice';

type PropsType = {
  manuscript: ManuscriptType;
};

const ArticleListItem: React.FC<PropsType> = ({ manuscript }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const linkToManuscriptPdf = useAppSelector(selectorLinkToManuscriptPdf);
  const loadingManuscriptPDFId = useAppSelector(selectorLoadingManuscriptPDFId);

  const onClickDownloadPDF = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(getLinkToManuscriptPDFThunk(manuscript.id));
  };

  useEffect(() => {
    if (linkToManuscriptPdf && loadingManuscriptPDFId === manuscript.id) {
      window.open(linkToManuscriptPdf, '_blank');
      dispatch(resetManuscriptPdf());
    }
  }, [dispatch, linkToManuscriptPdf, loadingManuscriptPDFId, manuscript.id]);

  return (
    <>
      <li className={classNames('sj-articleheader')}>
        <Link to={`/article_details/${manuscript.id}`}>
          <div className={'sj-detailstime'}>
            <span className={classes.dateContainer}>
              <i className="ti-calendar" />
              {formatDate(manuscript.published)}
            </span>
            <span className={classes.categoryTitleContainer}>
              <i className="ti-layers" />
              {`${t('articlesPage.category')}: ${manuscript.submission.objectType}`}
            </span>
            <span className={classes.idContainer}>
              <i className="ti-bookmark" />
              {`ID: ${manuscript.id}`}
            </span>
            <span className={classes.idContainer} style={{ color: '#5e9cea' }} onClick={onClickDownloadPDF}>
              <i className="lnr lnr-download" />
              {loadingManuscriptPDFId === manuscript.id
                ? t('articlesPage.pdfIsPreparing')
                : t('articlesPage.downLoadPdf')}
            </span>
            <h4>{`${manuscript.meta.title}`}</h4>
          </div>
          <div className="sj-nameandmail">
            <span>{t('articlesPage.correspondingAuthor')}</span>
            <h4>{manuscript.submitter.username}</h4>
            <span className="sj-mailinfo">{manuscript.submitter.email}</span>
          </div>
        </Link>
      </li>
      <li className={classNames('sj-active', 'sj-userinfohold', classes.collapsable)}>
        <div className="sj-userinfoimgname">
          <figure className="sj-userinfimg">
            <img src={thumbnailsImg02} alt="img description" />
          </figure>
          <div className="sj-userinfoname">
            <span>04 days ago on Monday at 14:49</span>
            <h3>Aleen Monsour (You)</h3>
          </div>
          <div className="sj-userbtnarea">
            <Link to={'/article_details'}>
              <button type="button" className="sj-btn sj-btnactive" data-toggle="modal" data-target="#reviewermodal">
                {t('articlesPage.viewArticle')}
              </button>
            </Link>
          </div>
          <div className="sj-description">
            <p>
              Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore etnalo doloreae magna aliqua enim
              ad minim veniam quis natrud exercitation ullamco laboris nisi utna aliquip amet consectetur adipisicing
              elit sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <div className="sj-downloadheader">
            <div className={classNames('sj-title', classes.btnDownloadTitle)}>
              <h3>Attached Document</h3>
              <button className={classes.btnDownload}>
                <i className={classNames('lnr', 'lnr-download', classes.btnDownloadIcon)} />
                Download
              </button>
            </div>
            <div className="sj-docdetails">
              <figure className="sj-docimg">
                <img src={thumbnailsDocImg} alt="img description" />
              </figure>
              <div className="sj-docdescription">
                <h4>Document Ph...01.docx</h4>
                <span>File Size 500kb</span>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default ArticleListItem;
