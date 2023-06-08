import React from 'react';

import { selectorUserLanguage } from '../../../../../../../store/userSlice';
import { useAppSelector } from '../../../../../../../hooks/hooks';
import { LanguageEnum } from '../../../../../components/Header/LanguageSelector/LanguageSelector';
import DescriptionEng from './DescriptionEng/DescriptionEng';
import DescriptionRus from './DescriptionRus/DescriptionRus';

const HowToSubmitDescription: React.FC = () => {
  const language = useAppSelector(selectorUserLanguage);

  return (
    <>
      {language === LanguageEnum.en && <DescriptionEng />}
      {language === LanguageEnum.ru && <DescriptionRus />}
    </>
  );
};

export default HowToSubmitDescription;
