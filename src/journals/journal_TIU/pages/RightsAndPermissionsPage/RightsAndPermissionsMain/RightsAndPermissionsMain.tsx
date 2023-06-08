import React from 'react';

import CommonRightColumn from '../../../components/CommonRightColumn/CommonRightColumn';
import RightsAndPermissionsLeftColumn from './RightsAndPermissionsLeftColumn/RightsAndPermissionsLeftColumn';

const RightsAndPermissionsMain: React.FC = () => {
  return (
    <main id="sj-main" className="sj-main sj-haslayout sj-sectionspace">
      <div id="sj-twocolumns" className="sj-twocolumns">
        <div className="container">
          <div className="row">
            <RightsAndPermissionsLeftColumn />
            <CommonRightColumn />
          </div>
        </div>
      </div>
    </main>
  );
};

export default RightsAndPermissionsMain;
