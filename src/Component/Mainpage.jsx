import React from 'react'

function Mainpage(actualData) {
  const {jawSummary} = actualData;
  return (
      <Wrapper>
          <div className="container">
              <div className="wrapper">
                  <div className="banner-image">
                      <figure>
                          <img src={jawSummary.backgroundImage.url} alt={jawSummary.title}/>
                      </figure>
                  </div>
                  <h1>{jawSummary.title}</h1>
                  <p>{jawSummary.synopsis}</p>
              </div>
          </div>

      </Wrapper>
  );
}

export default Mainpage


