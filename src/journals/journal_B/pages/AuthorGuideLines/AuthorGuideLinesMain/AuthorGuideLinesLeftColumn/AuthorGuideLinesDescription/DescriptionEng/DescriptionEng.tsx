import React from 'react';

const DescriptionEng: React.FC = () => {
  return (
    <>
      <div className="sj-introduction sj-sectioninnerspace">
        <span style={{ marginBottom: '3rem', fontSize: '32px' }}>Author guidelines</span>
        <div className="sj-description">
          <p>
            Articles should be devoted to actual problems of science, contain a clear statement of goals and objectives
            of the study, a rigorous scientific reasoning, generalizations and conclusions of value for its novelty and
            practical importance.
          </p>
          <p>
            Editorial board asks authors to follow the rules laid out bellow when writing an article. Articles received
            by the editorial board are reviewed. Articles that do not satisfy the requirements and are not designed in
            accordance with the rules are returned without consideration
          </p>

          <h3>Before the text should be indicated:</h3>
          <p>
            - UDC;
            <br />
            - full title of the article (in Russian and in English);
            <br />
            - surname and initials of the author (s) (in Russian and in English);
            <br />
            - positions, academic degrees and titles of the author (authors) (in Russian and in English);
            <br />
            - contact phone number, full postal address and e-mail;
            <br />
            - the name of the organization where the work was done (in Russian and in English);
            <br />
            - annotation in Russian and in English. language, not less than (according to GOST 7.9-95 - 850 characters
            (from 100 to 250 words), not less than 10 lines;
            <br />
            - keywords in Russian and in English. language (no more than 4-6 words).
            <br />
            - a cover letter with the obligatory indication of the author with whom the Editorial Board will correspond.
            <br />
          </p>

          <h3>The scientific article should reflect:</h3>
          <p>
            - introduction
            <br />
            - technique
            <br />
            - main part
            <br />
            - conclusion
            <br />
            - conclusions, expected effect
            <br />
            - references
            <br />
          </p>

          <p>
            In this case, the designation of the introduction, the main part and the conclusion with separate
            subheadings in the text of the article is not required.
          </p>

          <h3>Technical requirements:</h3>
          <p>
            The text must be typed in A4 page format, with single line spacing. Text margins - 2 cm each. When typing,
            you must use the "Times New Roman" font. Font size - 12, indentation - 1.5 cm. A set of tables: font type
            Times, font size 12 pt. Use “Normal” style or “Normal” template.
          </p>
          <p>
            The volume of the main text of the article (without annotation and bibliographic list) should be
            15,000–25,000 printed characters without spaces (5–12 pages of text).
          </p>
          <p>
            The list of used literature is given numbered at the end of the article. References to literary sources are
            given in alphabetical order in square brackets and indicated by numbers.
          </p>
          <p>
            The list of sources used must be drawn up in accordance with the standard established by the Russian Science
            Citation Index system and include: title, place and year of publication, publisher, volume (issue) number,
            pages (in Russian and English). The number of sources must be at least 5. The author is responsible for the
            accuracy of information, accuracy of citation and links to official documents and other sources. It is
            forbidden to use automatic links, hyperlinks and automatic Word footnotes in the text.
          </p>
          <p>
            The bibliographic description of publications is drawn up in accordance with the state standard, for
            example: Article:
            <br />
            Yakubov I.S. Methods for avoiding risk / Herald of GSTOU. Humanitarian, social and economical sciences.
            2015. Issue 14,15, p. 270;
          </p>
          <p>
            Pictures (graphs, diagrams) in Word, Excel - only black and white. Do not insert scanned figures (graphs,
            diagrams) into the article. Figures must be performed on a separate canvas and must be grouped (ie, they
            must not "fall apart" when moving and formatting). It is unacceptable to use figures and tables, the size of
            which requires landscape orientation of the page. Rotation of figures and tables in vertical orientation is
            prohibited. Inscriptions and other symbols on graphs and figures must be clear and legible.
          </p>
          <p>When using abbreviated names in the text, it is necessary to give their decoding.</p>
          <p>
            When choosing units of measurement, one should be guided by the international system of units SI; place
            names must correspond to the atlas of the latest publication year.
          </p>
          <p>An electronic version is attached to the hard copy of the article.</p>
          <p>Only one article of the author (first author) can be printed in one issue of the journal.</p>

          <p>
            <b>Manuscripts of articles that are not designed according to the rules are not considered.</b> Sent
            manuscripts will not be returned back. It is not allowed to send to the editorial office works that have
            been sent to other publications or printed in them.
          </p>
          <p>
            Submitting the text of the work for publication in the journal, the author guarantees the correctness of all
            information about himself, the absence of plagiarism and other forms of improper borrowing in the manuscript
            of the work, the proper design of all borrowings of text, tables, diagrams, illustrations. The authors of
            published materials are responsible for the selection and accuracy of the facts, quotes, statistics and
            other information provided.
          </p>
          <p>
            Returning the manuscript for revision does not mean that the article has been accepted for publication.
            After receiving the revised text, the manuscript will again be considered by the editorial board. The author
            must return the revised text with the original version of the article, as well as the answer to all
            comments. Articles rejected by the editorial board are not re-published.
          </p>

          <h3>For attention of authors!</h3>
          <p>
            All articles are subject to mandatory testing under the Antiplagiat program. The originality of the text
            must be at least 75%.
            <br />
            No publication fee is charged. Send the article to the e-mail address:{' '}
            <a href="mailto:trudy-ggntu@mail.ru">trudy-ggntu@mail.ru</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default DescriptionEng;
