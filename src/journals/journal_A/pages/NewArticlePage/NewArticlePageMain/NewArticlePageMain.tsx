import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const HEIGHT_FOR_IFRAME = window.innerHeight - 782;

const NewArticlePageMain: React.FC = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { manuscript_id } = useParams();

  const [iframeHeight, setIframeHeight] = useState(HEIGHT_FOR_IFRAME + 'px');

  let newSubmissionRoute;
  if (pathname.includes('submit_article')) {
    newSubmissionRoute = `${process.env.REACT_APP_APP_BASE_URL}/versions/${manuscript_id}/submit_journal`;
  } else {
    newSubmissionRoute = `${process.env.REACT_APP_APP_BASE_URL}/newSubmission_journal?journal_tag=${process.env.REACT_APP_JOURNAL_TAG}&journal_name=${process.env.REACT_APP_JOURNAL_NAME}&token_i_frame=${token}`;
  }
  // console.log('newSubmissionRoute =', newSubmissionRoute);

  const messageEventFunction = (event: MessageEvent<any>) => {
    const { heightForIframe, isSubmitIframe, isNeedEmail } = event.data;
    if (heightForIframe) {
      if (heightForIframe >= HEIGHT_FOR_IFRAME) {
        setIframeHeight(heightForIframe + 'px');
      } else {
        setIframeHeight(HEIGHT_FOR_IFRAME + 'px');
      }
    }
    if (isSubmitIframe) {
      navigate('/');
    }
    if (isNeedEmail) {
      navigate('/email');
    }
  };

  useEffect(() => {
    window.addEventListener('message', messageEventFunction);
    return () => {
      window.removeEventListener('message', messageEventFunction);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <main id="sj-main" className="sj-main sj-haslayout sj-sectionspace">
      <div className="container">
        <div className="row">
          <div id="sj-twocolumns" className="sj-twocolumns">
            <iframe title="newSubmissionIframe" src={newSubmissionRoute} height={iframeHeight} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default NewArticlePageMain;
