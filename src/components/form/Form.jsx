import React from "react";
import "./form.scss";
import { Link } from "react-router-dom";
// import Facebook from "../../images/facebook.png";
// import Whatsapp from "../../images/whatsapp-edit.jpg";
import Indeed from "../../images/indeed.png";
import LinkedIn from "../../images/linkedIn.png";
import Twitter from "../../images/twitter.png";

const Form = () => {
  return (
    <section id="section5">
      <div className="wrap4">
        <div className="address">
          <p className="location">
            <span>Address</span>_ 5 kunmi adebiyi close okota road Lagos Nigeria
          </p>
          <p>
            <a href="" id="contact">
              <span>Email</span>_kanyechukwuekere@gamil.com
            </a>
          </p>
          <br />
          <p>
            <a href="" id="contact">
              <span>Mobile</span>_+2439123043868
            </a>
          </p>
        </div>
        <div className="form">
          <form action="" className="form">
            <input
              type="text"
              name="fullName"
              placeholder="Name"
              id="nameSpace"
            />
            {/* <input type="email" name="email" placeholder="Email@" /> */}
            <textarea
              name="message"
              id="msg"
              rows="4"
              placeholder="Message"></textarea>
            <button type="submit">Contact us</button>
          </form>
        </div>
      </div>
      <article>
        <div className="mediaContent">
          <h4>Social Media</h4>
          <p>
            you can hit up with us in all these platform if you click on the
            icons below
          </p>
        </div>
        <div className="mediaSection">
          {/* <Link>
            <img src={Facebook} alt="Facebook" />
          </Link>
          <Link>
            <img src={Whatsapp} alt="Whatsapp" />
          </Link> */}
          <Link>
            <img src={LinkedIn} alt="LinkedIn" className="linkedInImg" />
          </Link>
          <Link>
            <img src={Indeed} alt="Indeed" className="indeedImg" />
          </Link>
          <Link>
            <img src={Twitter} alt="Twitter" className="twitterImg" />
          </Link>
        </div>
      </article>
    </section>
  );
};

export default Form;
