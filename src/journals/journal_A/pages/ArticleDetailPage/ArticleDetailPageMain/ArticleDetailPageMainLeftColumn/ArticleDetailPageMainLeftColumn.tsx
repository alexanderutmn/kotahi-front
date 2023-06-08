import React, { useEffect } from 'react';
import classes from './ArticleDetailPageMainLeftColumn.module.css';
import classNames from 'classnames';

import { ManuscriptType } from '../../../../../../types/types';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../../../../hooks/hooks';
import {
  getLinkToManuscriptPDFThunk,
  resetManuscriptPdf,
  selectorLinkToManuscriptPdf,
  selectorLoadingManuscriptPDFId,
} from '../../../../../../store/articlesSlice';

import { mathjax } from 'mathjax-full/js/mathjax';
import { TeX } from 'mathjax-full/js/input/tex.js';
import { SVG } from 'mathjax-full/js/output/svg';
import { liteAdaptor } from 'mathjax-full/js/adaptors/liteAdaptor.js';
import { RegisterHTMLHandler } from 'mathjax-full/js/handlers/html';
import { AllPackages } from 'mathjax-full/js/input/tex/AllPackages.js';

type PropsType = {
  manuscript: ManuscriptType | undefined;
};

const ArticleDetailPageMainLeftColumn: React.FC<PropsType> = ({ manuscript }) => {

  const packages = AllPackages.sort().join(', ');
  const adaptor = liteAdaptor();
  const handler = RegisterHTMLHandler(adaptor);

  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const linkToManuscriptPdf = useAppSelector(selectorLinkToManuscriptPdf);
  const loadingManuscriptPDFId = useAppSelector(selectorLoadingManuscriptPDFId);

  const onClickDownloadPDF = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (manuscript) {
      e.preventDefault();
      e.stopPropagation();
      dispatch(getLinkToManuscriptPDFThunk(manuscript.id));
    }
  };

  useEffect(() => {
    if (linkToManuscriptPdf && manuscript) {
      window.open(linkToManuscriptPdf, '_blank');
      dispatch(resetManuscriptPdf());
    }
  }, [dispatch, linkToManuscriptPdf, loadingManuscriptPDFId, manuscript]);

  if (manuscript?.meta?.source) {
    let htmlBeforeConver = manuscript?.meta?.source;
    var regex =
      /(<math-display[^>]+>|<math-display>|<\/math-display>|<math-inline[^>]+>|<math-inline>|<\/math-inline>)/g;
    htmlBeforeConver = htmlBeforeConver.replace(regex, '$$$');
    const html = mathjax.document(htmlBeforeConver, {
      InputJax: new TeX({ packages: packages.split(/\s*,\s*/) }),
      OutputJax: new SVG({ fontCache: 'none' }),
    });
    html.render();
    const htmlConvertedSvgMath = adaptor.outerHTML(adaptor.root(html.document));
    return (
      <div className="col-12 col-sm-12 col-md-8 col-lg-9">
        <div className={classes.idContainer} onClick={onClickDownloadPDF}>
          <i
            className="lnr lnr-download"
            style={{ display: 'flex', alignItems: 'center', marginBottom: 3, marginRight: 8 }}
          />
          {loadingManuscriptPDFId === manuscript.id ? t('articlesPage.pdfIsPreparing') : t('articlesPage.downLoadPdf')}
        </div>
        <div id="sj-content" className="sj-content" dangerouslySetInnerHTML={{ __html: htmlConvertedSvgMath }} />
      </div>
    );
  } else if (manuscript) {
    return (
      <div className="col-12 col-sm-12 col-md-8 col-lg-9">
        <div id="sj-content" className="sj-content">
          <button className={classes.btnDownload}>
            <i className={classNames('lnr', 'lnr-download', classes.btnDownloadIcon)} />
            Download
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="col-12 col-sm-12 col-md-8 col-lg-9">
        <div id="sj-content" className="sj-content">
          <h2>Article not found</h2>
        </div>
      </div>
    );
  }
};

export default ArticleDetailPageMainLeftColumn;
