import React from 'react';

import { selectorUserLanguage } from '../../../../../../../store/userSlice';
import { useAppSelector } from '../../../../../../../hooks/hooks';
import { LanguageEnum } from '../../../../../components/Header/LanguageSelector/LanguageSelector';
import DescriptionEng from './AimsAndScopeDescriptionEng/AimsAndScopeDescriptionEng';
import DescriptionRus from './AimsAndScopeDescriptionRus/AimsAndScopeDescriptionRus';

const AimsAndScopeDescription: React.FC = () => {
  const language = useAppSelector(selectorUserLanguage);

  return (
    <>
      {language === LanguageEnum.en && <DescriptionEng />}
      {language === LanguageEnum.ru && <DescriptionRus />}
    </>
  );
};

export default AimsAndScopeDescription;
