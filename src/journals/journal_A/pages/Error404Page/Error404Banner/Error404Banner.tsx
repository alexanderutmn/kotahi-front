import React from 'react';

const Error404Banner: React.FC = () => {
  return (
    <main id="sj-main" className="sj-main sj-haslayout sj-sectionspace">
      <div className="sj-404error">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 offset-sm-0 col-md-8 offset-md-2 col-lg-8 offset-lg-2">
              <div className="sj-404content">
                <div className="sj-404head">
                  <h2>404</h2>
                  <h3>Page Not Found :(</h3>
                </div>
                <div className="sj-description">
                  <p>
                    Consectetur adipisicing elied dotaem eiusmod incididunt ulabore etoimisi dolore magna aliqua
                    aenimalie admie veniam aistrud exrcittion ullamco laboris.
                  </p>
                </div>
                <span className="sj-gobackhome">
                  Go back to <button className={'buttonLink'}>Hompage</button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Error404Banner;
