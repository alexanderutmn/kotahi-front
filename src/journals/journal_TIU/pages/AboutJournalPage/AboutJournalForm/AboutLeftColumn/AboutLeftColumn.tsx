import React from 'react';
import AboutDescription from './AboutDescription/AboutDescription';

const AboutLeftColumn: React.FC = () => {
  return (
    <div className="col-12 col-sm-12 col-md-8 col-lg-9">
      <div id="sj-content" className="sj-content">
        <div className="sj-aboutus">
          <AboutDescription />
        </div>
      </div>
    </div>
  );
};

export default AboutLeftColumn;
