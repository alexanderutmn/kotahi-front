import React from 'react';
import imageOALogo from '../../../../../images/Open-Access-logo.jpg';
import imagePLogo from '../../../../../images/antiplagiatLogo.jpg';
import rincLogo from '../../../../../images/rincLogo.png';
import vakLogo from '../../../../../images/vakLogo.png';
import JournalPrincipleItem from './JournalPrincipleItem/JournalPrincipleItem';
import { useTranslation } from 'react-i18next';

const JournalPrinciples: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <JournalPrincipleItem
        title={t('journalPage.journalPrinciples.openAccessTitle')}
        description={t('journalPage.journalPrinciples.openAccessDescription')}
        image={imageOALogo}
      />
      <JournalPrincipleItem
        title={t('journalPage.journalPrinciples.plagiarismTitle')}
        description={t('journalPage.journalPrinciples.plagiarismDescription')}
        link={t('journalPage.journalPrinciples.plagiarismLink')}
        description1={t('journalPage.journalPrinciples.plagiarismDescription1')}
        link1={t('journalPage.journalPrinciples.plagiarismLink1')}
        description2={t('journalPage.journalPrinciples.plagiarismDescription2')}
        pathLinkTo={'https://www.antiplagiat.ru/'}
        pathLinkTo1={'https://publicationethics.org/files/u7140/plagiarism%20A.pdf'}
        image={imagePLogo}
      />
      <JournalPrincipleItem
        title={t('journalPage.journalPrinciples.openIndexTitle')}
        description={t('journalPage.journalPrinciples.openIndexDescription')}
        image={rincLogo}
      />
      <JournalPrincipleItem
        title={t('journalPage.journalPrinciples.higherAttestationCommissionTitle')}
        description={t('journalPage.journalPrinciples.higherAttestationCommissionDescription')}
        image={vakLogo}
      />
    </>
  );
};

export default JournalPrinciples;
