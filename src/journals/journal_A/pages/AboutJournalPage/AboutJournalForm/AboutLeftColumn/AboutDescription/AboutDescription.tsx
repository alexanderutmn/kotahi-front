import React from 'react';

import aboutUsImg from '../../../../../../images/aboutus-img.jpg';

import { selectorUserLanguage } from '../../../../../../../store/userSlice';
import { useAppSelector } from '../../../../../../../hooks/hooks';
import { LanguageEnum } from '../../../../../components/Header/LanguageSelector/LanguageSelector';
import DescriptionEng from './DescriptionEng/DescriptionEng';
import DescriptionRus from './DescriptionRus/DescriptionRus';

const AboutDescription: React.FC = () => {
  const language = useAppSelector(selectorUserLanguage);

  return (
    <>
      <figure className="sj-aboutusimg">
        <img src={aboutUsImg} alt="description" />
      </figure>
      {language === LanguageEnum.en && <DescriptionEng />}
      {language === LanguageEnum.ru && <DescriptionRus />}
    </>
  );
};

export default AboutDescription;
