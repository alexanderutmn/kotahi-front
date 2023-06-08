import React from 'react';

import CommonRightColumn from '../../../components/CommonRightColumn/CommonRightColumn';
import JournalPageLeftColumn from './JournalPageLeftColumn/JournalPageLeftColumn';

const JournalPageMain: React.FC = () => {
  return (
    <main id="sj-main" className="sj-main sj-haslayout sj-sectionspace">
      <div id="sj-twocolumns" className="sj-twocolumns">
        <div className="container">
          <div className="row">
            <JournalPageLeftColumn />
            <CommonRightColumn />
          </div>
        </div>
      </div>
    </main>
  );
};

export default JournalPageMain;
