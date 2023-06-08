import React from 'react';

import { selectorUserLanguage } from '../../../../../../../store/userSlice';
import { useAppSelector } from '../../../../../../../hooks/hooks';
import { LanguageEnum } from '../../../../../components/Header/LanguageSelector/LanguageSelector';
import DescriptionEng from './ContactUsDescriptionEng/ContactUsDescriptionEng';
import DescriptionRus from './ContactUsDescriptionRus/ContactUsDescriptionRus';

const ContactUsDescription: React.FC = () => {
  const language = useAppSelector(selectorUserLanguage);

  return (
    <>
      {language === LanguageEnum.en && <DescriptionEng />}
      {language === LanguageEnum.ru && <DescriptionRus />}
    </>
  );
};

export default ContactUsDescription;
