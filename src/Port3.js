import React, { useRef } from "react";
import "./Port3.css";
// import { useForm, ValidationError } from "@formspree/react";
import Locate from "./Image/site1/stacksantos.dev by html.to.design ❤️ FREE version - 18/12/Group.svg";
import Message from "./Image/site2/stacksantos.dev by html.to.design ❤️ FREE version - 18/12/Group.svg";
import Phone from "./Image/site2/stacksantos.dev by html.to.design ❤️ FREE version - 18/12/Vector.svg";
import Arrow from "./Image/site1/stacksantos.dev by html.to.design ❤️ FREE version - 18/12/Vector.svg";
import emailjs from "@emailjs/browser";

const Port3 = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_56v0gd9",
        "template_bhz5txr",
        form.current,
        "0UKUum03i5SkKtrwq"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div id="Contact">
      <div className="Footer">
        <div className="foot">
          <h1>Contact Disclosure</h1>
          <p>
            I look forward to hearing about how i can help with your next
            project
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
          <form ref={form} onSubmit={sendEmail}>
            <div className="Input">
              <h2 className="inTouch">Lets get in touch. Send me a message</h2>
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                className="inputName"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                className="inputEmail"
              />
              <textarea
                name="message"
                cols="30"
                rows="4"
                placeholder="Message"
                className="inputText"
              />
              <button className="Btnsend" type="submit" value="Send">
                <img src={Arrow} alt="" />
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Port3;
