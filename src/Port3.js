import React from "react";
import "./Port3.css";
import Locate from "./Image/site1/stacksantos.dev by html.to.design ❤️ FREE version - 18/12/Group.svg";
import Message from "./Image/site2/stacksantos.dev by html.to.design ❤️ FREE version - 18/12/Group.svg";
import Phone from "./Image/site2/stacksantos.dev by html.to.design ❤️ FREE version - 18/12/Vector.svg";
import Arrow from "./Image/site1/stacksantos.dev by html.to.design ❤️ FREE version - 18/12/Vector.svg";

const Port3 = () => {
  return (
    <div className="Footer">
      <div className="foot">
        <h1>Contact Disclosure</h1>
        <p>
          I look forward to hearing about how i can help with your next project
        </p>
        <p>I'll answer all inquiries as soon as humanly possible!</p>
      </div>
      <div className="foot2">
        <h1 className="Cont">Contact me</h1>
        <hr className="Line" />
        <div className="footBox">
          <img src={Locate} alt="" />
          <h5>Lagos State, Nigeria</h5>
        </div>
        <div className="footBox">
          <img src={Message} alt="" />
          <h5>Timilehinkudaisi01@gmail.com</h5>
        </div>
        <div className="footBox">
          <img src={Phone} alt="" />
          <h5>+234 9047445458</h5>
        </div>
        <div className="Input">
          <h2 className="inTouch">Lets get in touch. Send me a message</h2>
          <input type="text" placeholder="Name" className="inputName"/>
          <input type="text" placeholder="Email" className="inputEmail"/>
          <textarea name="Message" id="" cols="30" rows="4" className="inputText" placeholder="Message"></textarea>
          <button className="Btnsend">
            <img src={Arrow} alt="" />
            <p>SEND MESSAGE</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Port3;
