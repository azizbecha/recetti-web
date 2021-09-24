import React from 'react';

const NotFound = () => {
  document.title = 'Page non trouvée - Recetti';
  return (
    <div>
      <div className="container 404-body">
        <div className="caption">
          <div className="head-text">Page Non Trouvée !</div>
        </div>
        <div className="head">
          <div className="pan-wrapper">
            <div className="center">
              <div className="sub-center">
                <div className="egg">
                  <div className="yolk"></div>
                </div>
              </div>
            </div>
            <div className="handle"></div>
            <div className="handle-sub"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
