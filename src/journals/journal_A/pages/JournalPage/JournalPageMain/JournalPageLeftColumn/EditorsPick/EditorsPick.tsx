import React from 'react';
import EditorsPickArticlesList from './EditorsPickArticlesList/EditorsPickArticlesList';

const EditorsPick = () => {
  return (
    <div id="sj-twocolumns" className="sj-twocolumns">
      <div className="container">
        <div className="row" style={{ marginBottom: '80px' }}>
          <EditorsPickArticlesList />
        </div>
      </div>
    </div>
  );
};

export default EditorsPick;
