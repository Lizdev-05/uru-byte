import React from "react";
import style from "./Contact.module.css";
import { FaEnvelope } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const Contact = () => {
  return (
    <div id="contact">
      <div id="contact" className={`containe ${style.contactContainer}`}>
        <div className={style.contactUs}>
          <div className={style.contactForm}>
            <h2>Contact Us</h2>
            <form action="">
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                minLength={3}
                required
              />

              <input
                type="number"
                name="number"
                placeholder="Enter Your Phone Number"
                required
              />
              <textarea
                type="text"
                minLength={5}
                cols="30"
                rows="7"
                placeholder="Your Message(Optional)"
              ></textarea>

              <button type="submit" className={style.btn}>
                Send Message
              </button>
            </form>
          </div>
          <div className={style.contactContent}>
            <span className={style.introSpan}>CONTACT</span>
            <h1>Let's Discuss How UruByte Can Help Your Business</h1>
            <p>
              Start your journey towards data-driven decision-making. Contact us
              today for a personalized consultation.
            </p>
            <div className={style.contactDetails}>
              <div className={style.contactDetail}>
                <FaEnvelope className={style.icon} />
                <h4>ojesanmioyin@gmail.com</h4>
              </div>

              <div className={style.contactDetail}>
                <IoLocationSharp className={style.icon} /> <h4>Accra, Ghana</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
