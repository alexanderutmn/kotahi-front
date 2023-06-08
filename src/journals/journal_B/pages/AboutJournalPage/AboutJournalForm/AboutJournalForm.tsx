import React from 'react';

import AboutLeftColumn from './AboutLeftColumn/AboutLeftColumn';
import CommonRightColumn from '../../../components/CommonRightColumn/CommonRightColumn';

const AboutJournalForm: React.FC = () => {
  return (
    <main id="sj-main" className="sj-main sj-haslayout sj-sectionspace">
      <div id="sj-twocolumns" className="sj-twocolumns">
        <div className="container">
          <div className="row">
            <AboutLeftColumn />
            <CommonRightColumn />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutJournalForm;
