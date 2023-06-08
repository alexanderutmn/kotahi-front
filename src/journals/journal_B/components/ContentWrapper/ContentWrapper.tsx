import React from 'react';

type PropsType = {
  children: JSX.Element;
};

const ContentWrapper: React.FC<PropsType> = ({ children }) => {
  return (
    <div id="sj-wrapper" className="sj-wrapper">
      <div className="sj-contentwrapper">{children}</div>
    </div>
  );
};

export default ContentWrapper;
