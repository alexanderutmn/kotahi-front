import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HEIGHT_FOR_IFRAME = window.innerHeight - 782;

const AddEmailPageMain: React.FC = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const [iframeHeight, setIframeHeight] = useState(HEIGHT_FOR_IFRAME + 'px');

  let addEmailRoute = `${process.env.REACT_APP_APP_BASE_URL}/email_journal?journal_tag=${process.env.REACT_APP_JOURNAL_TAG}&token_i_frame=${token}`;

  const messageEventFunction = (event: MessageEvent<any>) => {
    const { heightForIframe, isEmailIframe } = event.data;
    if (heightForIframe) {
      if (heightForIframe >= HEIGHT_FOR_IFRAME) {
        setIframeHeight(heightForIframe + 'px');
      } else {
        setIframeHeight(HEIGHT_FOR_IFRAME + 'px');
      }
    }
    if (isEmailIframe) {
      navigate('/');
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
            <iframe title="addEmailIframe" src={addEmailRoute} height={iframeHeight} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AddEmailPageMain;
