import React from "react";
import style from "./About.module.css";
import aboutImg from "../../assets/Rectangle.png";
import imgOne from "../../assets/Icon.png";
import imgTwo from "../../assets/Iconn.png";
import imgThree from "../../assets/Group16.png";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const About = () => {
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="3000"
      id="about"
      className={style.aboutContainer}
    >
      <div id="about" className={`containe ${style.aboutContainer}`}>
        <div className={style.aboutIntro}>
          <span className={style.introSpan}>About</span>
          <h2 id="">Empowering African Businesses with Data-Driven Insights</h2>
          {/* <p>
            UruByte is a market intelligence platform designed to bridge the gap
            between data and actionable strategies.
          </p> */}
          <p>
            Streamline your data processes, make faster decisions, and stay
            ahead of the curve in the dynamic African business landscape
          </p>
        </div>
        <div className={style.aboutUs}>
          <div className={style.aboutContent}>
            <ul>
              <li className={style.aboutList}>
                <span className={style.text}>
                  <img src={imgOne} alt="" className={style.iconn} />
                  <Accordion className="w-full" allowMultiple>
                    <AccordionItem className="border-b border-gray-200 py-[17px] dark:!border-white/10">
                      <h2>
                        <AccordionButton className="flex justify-between">
                          <span
                            className="text-left font-bold text-navy-900 dark:text-dark"
                            flex="1"
                            textAlign="left"
                          >
                            Data Integration Made Simple:
                          </span>
                          <AccordionIcon className="text-left !text-navy-900 dark:!text-dark" />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel
                        className="text-left text-medium mt-1 !text-navy-900 dark:!text-dark"
                        pb={4}
                      >
                        UruBytes streamlines data integration, transforming
                        scattered information into a unified, actionable
                        resource.
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </span>
              </li>
              <li className={style.aboutList}>
                <span className={style.text}>
                  <img src={imgTwo} alt="" className={style.iconn} />
                  <Accordion className="w-full" allowMultiple>
                    <AccordionItem className="border-b border-gray-200 py-[17px] dark:!border-white/10">
                      <h2>
                        <AccordionButton className="flex justify-between">
                          <span
                            className="text-left font-bold text-navy-900 dark:text-dark"
                            flex="1"
                            textAlign="left"
                          >
                            Empower Your Decisions:
                          </span>
                          <AccordionIcon className="text-left !text-navy-900 dark:!text-dark" />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel
                        className="text-left text-medium mt-1 !text-navy-900 dark:!text-dark"
                        pb={4}
                      >
                        Make informed choices faster with comprehensive insights
                        and trend analysis at your fingertips.
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </span>
              </li>
              <li className={style.aboutList}>
                <span className={style.text}>
                  <img src={imgThree} alt="" className={style.iconn} />
                  <Accordion className="w-full" allowMultiple>
                    <AccordionItem className="border-b border-gray-200 py-[17px] dark:!border-white/10">
                      <h2>
                        <AccordionButton className="flex justify-between">
                          <span
                            className="text-left font-bold text-navy-900 dark:text-dark"
                            flex="1"
                            textAlign="left"
                          >
                            Drive Innovation:
                          </span>
                          <AccordionIcon className="text-left !text-navy-900 dark:!text-dark" />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel
                        className="text-left text-medium mt-1 !text-navy-900 dark:!text-dark"
                        pb={4}
                      >
                        Break free from data silos and unleash the full
                        potential of your business with UruBytes' cutting-edge
                        solutions.
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </span>
              </li>
            </ul>
          </div>
          <div className={style.aboutForm}>
            <h2>Join Waitlist</h2>
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

              <button type="submit" className={style.btn}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
