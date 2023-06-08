import React from 'react';

import EditorsPick from './EditorsPick/EditorsPick';
import EditorialBoard from './EditorialBoard/EditorialBoard';

const JournalPageLeftColumn: React.FC = () => {
  return (
    <div className="col-12 col-sm-12 col-md-8 col-lg-9">
      <div id="sj-content" className="sj-content">
        <EditorsPick />
        <EditorialBoard />
      </div>
    </div>
  );
};

export default JournalPageLeftColumn;
