import React from 'react';
import SearchComponent from '../../../../../components/SearchComponent/SearchComponent';
import { useTranslation } from 'react-i18next';

const AuthorManuscriptsListHeader: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="sj-dashboardboxtitle sj-titlewithform">
        <h2>{t('yourManuscripts')}</h2>
        <SearchComponent onSearchClick={() => {}} onSortClick={() => {}} />
        {/*<form className="sj-formtheme sj-formsearchvtwo">*/}
        {/*  <div className="sj-sortupdown">*/}
        {/*    <a href="javascript:void(0);">*/}
        {/*      <i className="fa fa-sort-amount-up" />*/}
        {/*    </a>*/}
        {/*  </div>*/}
        {/*  <fieldset>*/}
        {/*    <input type="search" name="search" className="form-control" placeholder="Search here" />*/}
        {/*    <button type="submit" className="sj-btnsearch">*/}
        {/*      <i className="lnr lnr-magnifier" />*/}
        {/*    </button>*/}
        {/*  </fieldset>*/}
        {/*</form>*/}
      </div>
    </>
  );
};

export default AuthorManuscriptsListHeader;
