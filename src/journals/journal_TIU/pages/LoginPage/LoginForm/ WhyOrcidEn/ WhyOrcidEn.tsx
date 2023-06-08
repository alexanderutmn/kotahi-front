import React from 'react';
import classes from './WhyOrcidEn.module.css';

const WhyOrcidEn = () => {
  return (
    <>
      <h3 className={classes.title}>What is ORCID?</h3>
      <p>
        ORCID is an international system for identifying authors of scientific papers.
        <br />
        ORCID ID is a 16-digit code that uniquely identifies individual researchers.
      </p>

      <h3 className={classes.title}>What is the ORCID for?</h3>
      <p>
        The ORCID ID is used to identify scientific authors who are registered in databases such as Scopus, Web of
        Science and others. It allows to avoid the possibility of opening multiple profiles of one researcher, as it
        leads to incorrect calculation and display of key indicators, for example the H-index (Hirsch index).
      </p>

      <h3 className={classes.title}>Advantages of ORCID</h3>
      <ul className="sj-liststyle">
        <li>
          <span>
            ORCID can be linked to an internal Scopus database identification number, which each author receives after
            publication in the publications included in Scopus.
          </span>
        </li>
        <li>
          <span>ORCID ID can be linked to ResearcherID, which is used within Web of Science.</span>
        </li>
        <li>
          <span>
            In the profile created, you can add information about your educational background, preferred areas of
            research, place of work, and works that have been previously published on other sites.
          </span>
        </li>
        <li>
          <span>
            The ORCID ID indicates that the researcher is represented in the global information scientific community,
            which contributes to an increase in his/her citation rate.
          </span>
        </li>
      </ul>
    </>
  );
};

export default WhyOrcidEn;
