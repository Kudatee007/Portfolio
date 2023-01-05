import React from "react";
import "./Port2.css";
import Trad from "./Image/stacksantos.dev by html.to.design ❤️ FREE version - 18/12/gdc-thumbnail.webp.svg";
import TradHome from "./Image/site/stacksantos.dev by html.to.design ❤️ FREE version - 18/12/gdc-thumbnail.webp.svg";
import Loop from "./Image/site/stacksantos.dev by html.to.design ❤️ FREE version - 18/12/level-ground-react.webp.svg";
import Meta from "./Image/site1/stacksantos.dev by html.to.design ❤️ FREE version - 18/12/gdc-thumbnail.webp.svg";
import Rest from "./Image/site2/stacksantos.dev by html.to.design ❤️ FREE version - 18/12/gdc-thumbnail.webp.svg";
import Rock from "./Image/site2/stacksantos.dev by html.to.design ❤️ FREE version - 18/12/rps-screenshot.webp.svg";
import Prome from "./Image/site1/stacksantos.dev by html.to.design ❤️ FREE version - 18/12/rps-screenshot.webp.svg";
import Phone from "./Image/site1/stacksantos.dev by html.to.design ❤️ FREE version - 18/12/.svg";
import Phone1 from "./Image/site1/stacksantos.dev by html.to.design ❤️ FREE version - 18/12/.svg";
import Download from "./Image/site/stacksantos.dev by html.to.design ❤️ FREE version - 18/12/Vector.svg";
import Resume from "./Image/site/stacksantos.dev by html.to.design ❤️ FREE version - 18/KUDAISI TIMILEHIN (2).pdf";

const Port2 = () => {
  return (
    <div id="Portfolio">
      <div className="Web">
        <h2>Websites</h2>
      </div>
      <div className="MainBox">
        <a
          href="https://amazing-sable-a0e49d.netlify.app"
          className="no-underline"
          target="blank"
        >
          <div className="Box">
            <h1>TradExpress</h1>
            <img src={Trad} alt="" />
            <h5 className="TradH">
              A fully responsive cryptocurrency website{" "}
            </h5>
            <h6>Front End</h6>
            <h6>React - JS</h6>
          </div>
        </a>
        <a
          href="https://calm-bombolone-0e9891.netlify.app/"
          className="no-underline"
          target="blank"
        >
          <div className="Box">
            <h1>TradExpress Home</h1>
            <img src={TradHome} alt="" />
            <h5 className="TradHH">
              A fully responsive website featuring TradExpress homepage
            </h5>
            <h6>Front End</h6>
            <h6>React - JS</h6>
          </div>
        </a>
        <a
          href="https://resonant-fenglisu-442396.netlify.app/"
          className="no-underline"
          target="blank"
        >
          <div className="Box">
            <h1>Loopstudios</h1>
            <img src={Loop} alt="" />
            <h5 className="LoopH">A fully responsive designed website </h5>
            <h6>Front End</h6>
            <h6>HTML - CSS</h6>
          </div>
        </a>
        <a
          href="https://dancing-pothos-a57103.netlify.app/"
          className="no-underline"
          target="blank"
        >
          <div className="Box" id="Box">
            <h1>Metabnb</h1>
            <img src={Meta} alt="" />
            <h5 className="MetaH">
              A fully responsive website featuring an insight into MetaVerse
            </h5>
            <h6>Front End</h6>
            <h6>React - JS</h6>
          </div>
        </a>
        <a
          href="https://splendorous-centaur-5a7db1.netlify.app"
          className="no-underline"
          target="blank"
        >
          <div className="Box" id="Box1">
            <h1>Resturant</h1>
            <img src={Rest} alt="" />
            <h5 className="RestH">A fully responsive onepage website </h5>
            <h6>Front End</h6>
            <h6>HTML - CSS</h6>
          </div>
        </a>
      </div>
      <div className="Web">
        <h2>Web Apps</h2>
      </div>
      <div>
        <a
          href="https://nimble-wisp-fc8e38.netlify.app/"
          className="no-underline"
          target="blaank"
        >
          <div className="BigB">
            <h1>Rock Paper Scissor</h1>
            <img src={Rock} alt="" />
            <h5>A fun version of the classic game Rock,Paper,Scissors. </h5>
            <h6>Front End</h6>
            <h6>React - JS</h6>
          </div>
        </a>
      </div>
      <div className="Web">
        <h2>Currently Working on</h2>
      </div>
      <div className="BB">
        <div className="BigB">
          <h1>Prome</h1>
          <img src={Prome} alt="" />
          <h5>A new website to hire local professionals </h5>
          <h6>Front End</h6>
          <h6>React - JS</h6>
        </div>
      </div>

      <div className="Sect">
        <h3 className="Bene">The benefits of my work</h3>
        <hr className="hhr" />
        <div className="Sect2">
          <div>
            <img src={Phone1} alt="" />
            <h4>Always Responsive</h4>
            <p className="pp1">
              Whether it's a phone, tablet, or PC, your website will adapt to
              any screen size.
            </p>
          </div>
          <div className="Modern">
            <h4>Modern Design</h4>
            <p className="pp1">
              The web has changed a lot since the dark ages. Don't miss out on
              all the new technologies available.
            </p>
          </div>
          <div id="Modern2">
            <img src={Phone} alt="" />
            <h4>More Traffic</h4>
            <p className="pp1">
              A properly built project will generate more views, which
              translates to more business for you!
            </p>
          </div>
        </div>
      </div>

      <div className="Process">
        <h2>THE PROCESS</h2>
      </div>

      <div className="About" id="About">
        <h1>A Little About Me</h1>
        <p className="AboutP1">
          As a student studying finance, I have developed a strong foundation in
          financial analysis and decision-making. However, I have always had a
          passion for front-end web development and have dedicated much of my
          time to learning and improving my skills in this area. I am skilled in
          HTML, CSS, and JavaScript and have a strong eye for design. I am
          determined to become a well-rounded developer and am always seeking
          out new challenges and opportunities to improve my skills.
        </p>
        <p className="AboutP2">
          In my spare time, I enjoy working on personal projects and
          collaborating with others to create beautiful and functional websites.
        </p>
        <a href={Resume} download={Resume}>
          <button className="BtnDownload">
            <img src={Download} alt="" />
            <p>Download Resume</p>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Port2;
