import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import classes from './InnerBaner.module.css';
import { useTranslation } from 'react-i18next';

interface ICustomLink {
  route: string;
  routeDescription: string;
}

type PropsType = {
  title: string;
  customLink?: ICustomLink;
};

const InnerBanner: React.FC<PropsType> = ({ title, customLink }) => {
  const { t } = useTranslation();
  return (
    <div className="sj-innerbanner">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <div className={classNames('sj-innerbannercontent', classes.titleCorrections)}>
              <h1>{title}</h1>
              <ol className="sj-breadcrumb">
                <li>
                  <Link to={'/'}>{t('home')}</Link>
                </li>
                {customLink && (
                  <li>
                    <Link to={customLink.route}>{customLink.routeDescription}</Link>
                  </li>
                )}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerBanner;
