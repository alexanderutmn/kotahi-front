import React from 'react';

const RightsAndPermissionsDescriptionEng: React.FC = () => {
  return (
    <>
      <div className="sj-introduction sj-sectioninnerspace">
        <span style={{ marginBottom: '3rem', fontSize: '32px' }}>Rights and permissions</span>
        <div className="sj-description">
          <p>
            The journal &ldquo;Herald of GSTOU. Humanitarian, social and economical sciences&rdquo; has an international
            ISSN number -{' '}
            <a href="https://portal.issn.org/resource/issn/2686-9721" target="_blank" rel="noreferrer">
              2686-9721
            </a>
          </p>
          <p>
            Federal copies of publications are sent through the Russian Book Chamber to the Russian State Library and
            other central libraries, to scientific and information organizations in Russia in accordance with the list
            approved by the decree of the Government of the Russian Federation.
          </p>
          <p>
            The journal is registered in the mass media by the Federal Service for Supervision in the Sphere of
            Communications and Mass Media. Registration certificate received:
            <a
              href="https://rkn.gov.ru/mass-communications/reestr/media/?id=751692&amp;utm_source=elibrary.ru&amp;utm_medium=referral&amp;utm_campaign=elibrary.ru&amp;utm_referrer=elibrary.ru"
              target="_blank"
              rel="noreferrer"
            >
              ПИ №ТУ 20-00120 от 19.08.2019
            </a>
          </p>
          <p>
            An agreement has been concluded with the Russian Electronic Scientific Library for the placement of the
            full-text version of the journal in open access.
          </p>
          <p>
            Edition &ldquo;Herald of GSTOU. Humanitarian, social and economical sciences&rdquo; a permanent participant
            in the project "Russian Science Citation Index". The RSCI system regularly provides information on published
            articles in the prescribed form. A system of electronic on-line submission and review of articles is being
            introduced. The authors of the journal can determine their citation index in Russian-language scientific
            journals and, thanks to the journal, have a good opportunity to integrate their new fundamental results into
            the modern international scientific information space.
          </p>
        </div>
      </div>
    </>
  );
};

export default RightsAndPermissionsDescriptionEng;
