import React from 'react';
import RightsAndPermissionsDescription from './RightsAndPermissionsDescription/RightsAndPermissionsDescription';

const RightsAndPermissionsLeftColumn: React.FC = () => {
  return (
    <div className="col-12 col-sm-12 col-md-8 col-lg-9">
      <div id="sj-content" className="sj-content">
        <div className="sj-aboutus">
          <RightsAndPermissionsDescription />
        </div>
      </div>
    </div>
  );
};

export default RightsAndPermissionsLeftColumn;
