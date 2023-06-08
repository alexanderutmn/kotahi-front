import React from 'react';

import { selectorUserLanguage } from '../../../../../../../store/userSlice';
import { useAppSelector } from '../../../../../../../hooks/hooks';
import { LanguageEnum } from '../../../../../components/Header/LanguageSelector/LanguageSelector';
import DescriptionEng from './RightsAndPermissionsDescriptionEng/RightsAndPermissionsDescriptionEng';
import DescriptionRus from './RightsAndPermissionsDescriptionRus/RightsAndPermissionsDescriptionRus';

const RightsAndPermissionsDescription: React.FC = () => {
  const language = useAppSelector(selectorUserLanguage);

  return (
    <>
      {language === LanguageEnum.en && <DescriptionEng />}
      {language === LanguageEnum.ru && <DescriptionRus />}
    </>
  );
};

export default RightsAndPermissionsDescription;
