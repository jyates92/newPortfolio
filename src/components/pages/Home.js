import React from "react";

function Home() {
  return (
    <div>
      <div className="container">
        <img
          src="https://media-exp1.licdn.com/dms/image/C5603AQGDm-dds-ARyw/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=8a0UtwyJZBit1ptV377pMs-ALy8GtTaXXHyjxtIHBFM"
          alt="Jeremiah Yates"
          className="circle responsive-img z-depth-2"
        />
      </div>
      <p className="">
        You miss 100% of the shots you don't take - Wayne Gretzky
      </p>
      <nav>
        <div className="nav-wrapper">
          <p id="brand-logo">Projects</p>
        </div>
      </nav>
      <div className="carousel">
        <div className="container" id="carousel-container">
          <a
            className="carousel-item"
            href="https://jyates92.github.io/Quiz-Game/"
          >
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator"
                  src="https://i.imgur.com/kpmlmqP.jpg"
                  alt=""
                />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Quiz Game
                </span>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  Card Title<i className="material-icons right">close</i>
                </span>
              </div>
            </div>
          </a>
          <a
            className="carousel-item"
            href="https://jyates92.github.io/Weather-App/"
          >
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator"
                  src="
                  https://i.imgur.com/SRh2pSA.jpg"
                  alt=""
                />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Weather App
                </span>
              </div>
              <div className="card-reveal"></div>
            </div>
          </a>
          <a
            className="carousel-item"
            href="https://jyates92.github.io/RandomNumberGen/"
          >
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator"
                  src="https://i.imgur.com/6M1Cnrv.jpg"
                  alt=""
                />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Password Generator
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
      <p>HELLO I AM JEREMIAH</p>
      <footer className="page-footer custom footer">
        <div className="footer-copyright">
          <p>© 2020 Jeremiah Yates</p>
          <ul
            className="social-network social-circle justify-content-center"
            id="horizontal-list"
          >
            <li>
              <a
                href="https://github.com/jyates92"
                className="icoGit"
                title="Git"
                target="_blank"
                rel="noopener noreferrer"
                id="ico"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="./Resume.pdf"
                className="icoPdf"
                title="PDF"
                target="_blank"
                rel="noopener noreferrer"
                id="ico"
              >
                <i className="fas fa-file-pdf"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jeremiah-yates/"
                className="icoLinkedin"
                title="Linkedin"
                target="_blank"
                rel="noopener noreferrer"
                id="ico"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Home;
