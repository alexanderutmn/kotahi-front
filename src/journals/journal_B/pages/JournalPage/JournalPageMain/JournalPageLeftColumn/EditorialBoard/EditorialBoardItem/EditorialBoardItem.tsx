import React from 'react';

import classes from './EditorialBoardItem.module.css';
import classNames from 'classnames';

type PropsType = {
  position: string;
  author: string;
  title: string;
  image: string;
  organization: string;
};

const EditorialBoardItem: React.FC<PropsType> = ({ author, title, image, position, organization }) => {
  return (
    <div className={classes.container}>
      <div className="item">
        <div className="sj-newsarticle">
          <div className={classes.imgContainer}>
            <img src={image} className={classes.img} alt="author's foto" />
          </div>
          <div className="sj-newscontent">
            <div className={classNames('sj-newshead', classes.head)}>
              <h3>
                <div className={classes.position}>{position}</div>
              </h3>
              <h3>
                <div className={classes.author}>{author}</div>
              </h3>
              <div className={classes.title}>{title}</div>
            </div>
            <div
              className={classNames('sj-description', classes.organization, 'fontForRus')}
              style={{ fontStyle: 'italic' }}
            >
              <p>
                <span>{organization}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorialBoardItem;
