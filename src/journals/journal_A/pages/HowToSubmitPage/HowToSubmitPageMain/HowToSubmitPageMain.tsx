import React from 'react';

import CommonRightColumn from '../../../components/CommonRightColumn/CommonRightColumn';
import HowToSubmitPageMainLeftColumn from './HowToSubmitPageMainLeftColumn/HowToSubmitPageMainLeftColumn';

const HowToSubmitPageMain: React.FC = () => {
  return (
    <main id="sj-main" className="sj-main sj-haslayout sj-sectionspace">
      <div id="sj-twocolumns" className="sj-twocolumns">
        <div className="container">
          <div className="row">
            <HowToSubmitPageMainLeftColumn />
            <CommonRightColumn />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HowToSubmitPageMain;
