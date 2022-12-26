import React, {useState} from "react";
import Kuda from "./Image/stacksantos.dev by html.to.design ❤️ FREE version - 18/12/container.svg";
import KudaIcon from "./Image/stacksantos.dev by html.to.design ❤️ FREE version - 18/12/.svg";
import Profile from "./Image/stacksantos.dev by html.to.design ❤️ FREE version - 18/12/Group 26.svg";
import Arrow from "./Image/stacksantos.dev by html.to.design ❤️ FREE version - 18/12/i.svg";
import "./Port.css";
import Mail from './Image/site1/stacksantos.dev by html.to.design ❤️ FREE version - 18/12/container.svg'

const Port = () => {
  const [expand, setExpand] = useState(true);

  function Handler() {
    setExpand(!expand);
  }
  return (
    <div className="KudaPort" id="Home">
        <img src={Kuda} alt="" className="Kud" />
      <div className="icon" onClick={Handler}>
          <img src={KudaIcon} alt="" />
        </div>
      <div className={!expand ? "Sidebar" : "Sidebar Sidebar-NX"}>
        <div className="Side">
        <a href="#Home"><h2 className="Sideh2">Home</h2></a>
        <a href="#Portfolio"><h2 className="Sideh2">Portfolio</h2></a>
        <a href="#About"> <h2 className="Sideh2">About</h2></a>
        <a href="#Contact"><h2 className="Sideh2">Contact</h2></a>
        </div>
      </div>
      <div className="Section">
        <img src={Profile} alt="" className="Profile"/>
        <h1 className="Hello">Hello There</h1>
        <h6 className="Name">
          My name is Timilehin and I'm a Lagos State based Front-End Web
          Developer
        </h6>
        <p className="Scroll">scroll to continue</p>
        <img src={Arrow} alt="" />
      </div>
      <a href="mailto:timilehinkudaisi01@gmail.com">
      <img src={Mail} alt="" className="Mail"/>
      </a>
    </div>
  );
};

export default Port;
