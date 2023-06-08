import React from 'react';
import EditorialBoard from '../../JournalPage/JournalPageMain/JournalPageLeftColumn/EditorialBoard/EditorialBoard';

const EditorialBoardMain = () => {
  return (
    <main className="col-12 col-sm-12 col-md-8 col-lg-9">
      <div id="sj-content" className="sj-content">
        <EditorialBoard isFullPage={true} />
      </div>
    </main>
  );
};

export default EditorialBoardMain;
