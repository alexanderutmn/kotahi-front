import React from 'react';
import classes from './JournalPrincipleItem.module.css';

type PropsType = {
  title: string;
  description: string;
  image: string;
  description1?: string;
  description2?: string;
  link?: string;
  link1?: string;
  pathLinkTo?: string;
  pathLinkTo1?: string;
};

const JournalPrincipleItem: React.FC<PropsType> = ({
  title,
  description,
  image,
  description1,
  description2,
  link,
  link1,
  pathLinkTo,
  pathLinkTo1,
}) => {
  const onclickLink = () => {
    if (pathLinkTo) {
      window.open(pathLinkTo);
    }
  };

  const onclickLink1 = () => {
    if (pathLinkTo) {
      window.open(pathLinkTo1);
    }
  };

  return (
    <article className="sj-post sj-editorchoice">
      <div className="sj-postcontent">
        <div className="sj-head">
          <h3>
            <span>{title}</span>
          </h3>
        </div>
        <div className="sj-description">
          <p>
            {description}
            {link && (
              <button className={'buttonLinkUnderline'} onClick={onclickLink}>
                {link}
              </button>
            )}
            {description1 && description1}
            {link1 && (
              <button className={'buttonLinkUnderline'} onClick={onclickLink1}>
                {link1}
              </button>
            )}
            {description2 && description2}
          </p>
        </div>
      </div>
      <div className={classes.imgContainer}>
        <img src={image} alt="description" />
      </div>
    </article>
  );
};

export default JournalPrincipleItem;
