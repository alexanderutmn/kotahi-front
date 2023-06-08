import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/hooks';
import { selectorUserLanguage, setLanguage } from '../../../../../store/userSlice';
import i18n from 'i18next';
import MenuPopUpBtn from '../../../../commonComponents/MenuPopUpBtn/MenuPopUpBtn';
import classes from './LanguageSelector.module.css';

export enum LanguageEnum {
  en = 'English',
  ru = 'Русский',
}

const LanguageSelector: React.FC = () => {
  const dispatch = useAppDispatch();
  const userLanguage = useAppSelector(selectorUserLanguage);

  useEffect(() => {
    const languageKey = Object.keys(LanguageEnum)[Object.values(LanguageEnum).indexOf(userLanguage as LanguageEnum)];
    i18n.changeLanguage(languageKey);
  }, [userLanguage]);

  const getItems = () => {
    return Object.keys(LanguageEnum).map(
      (languageKey) => Object.values(LanguageEnum)[Object.keys(LanguageEnum).indexOf(languageKey)]
    );
  };

  const onClickMenuItem = (key: string) => {
    dispatch(setLanguage(key as LanguageEnum));
  };

  return (
    <div className={classes.container}>
      <MenuPopUpBtn
        tileMenuBtn={
          <>
            {userLanguage} <i className="fa fa-angle-down" />
          </>
        }
        menuItems={getItems()}
        onClickMenuItem={onClickMenuItem}
      />
    </div>
  );
};

export default LanguageSelector;
