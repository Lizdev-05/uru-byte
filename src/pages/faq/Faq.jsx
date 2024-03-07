import React from "react";
import style from "./Faq.module.css";
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

const Faq = () => {
  return (
    <div id="about">
      <div id="about" className={`container ${style.faqContainer}`}>
        <div className={style.faqIntro}>
          <span className={style.introSpan}>FAQs</span>
          <h2 id="">Frequently asked questions</h2>
          <p>We have put together some commonly asked questions</p>
        </div>
        <div className={style.faqUs}>
          <div className={style.faqContent}>
            <ul>
              <li className={style.faqList}>
                <span className={style.text}>
                  <Accordion className="w-full" allowMultiple>
                    <AccordionItem className="border-b border-gray-200 py-[17px] dark:!border-white/10">
                      <p>
                        <AccordionButton className="flex justify-between">
                          <span
                            className="text-left font-bold text-navy-900 dark:text-dark"
                            flex="1"
                            textAlign="left"
                          >
                            What types of services does UruByte offer?
                          </span>
                          <AccordionIcon className="text-left !text-navy-900 dark:!text-dark" />
                        </AccordionButton>
                      </p>
                      <AccordionPanel
                        className="text-left text-medium mt-1 !text-navy-900 dark:!text-dark"
                        pb={4}
                      >
                        Easily create tailored market reports by on industries
                        and regions in minuteses it a friendly expression.
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </span>
              </li>
              <li className={style.faqList}>
                <span className={style.text}>
                  <Accordion className="w-full" allowMultiple>
                    <AccordionItem className="border-b border-gray-200 py-[17px] dark:!border-white/10">
                      <p>
                        <AccordionButton className="flex justify-between">
                          <span
                            className="text-left font-bold text-navy-900 dark:text-dark"
                            flex="1"
                            textAlign="left"
                          >
                            Can I get a customized report for my specific needs?
                          </span>
                          <AccordionIcon className="text-left !text-navy-900 dark:!text-dark" />
                        </AccordionButton>
                      </p>
                      <AccordionPanel
                        className="text-left text-medium mt-1 !text-navy-900 dark:!text-dark"
                        pb={4}
                      >
                        Easily create tailored market reports by on industries
                        and regions in minuteses it a friendly expression.
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </span>
              </li>
              <li className={style.faqList}>
                <span className={style.text}>
                  <Accordion className="w-full" allowMultiple>
                    <AccordionItem className="border-b border-gray-200 py-[17px] dark:!border-white/10">
                      <p>
                        <AccordionButton className="flex justify-between">
                          <span
                            className="text-left font-bold text-navy-900 dark:text-dark"
                            flex="1"
                            textAlign="left"
                          >
                            How long does it take to get a report?{" "}
                          </span>
                          <AccordionIcon className="text-left !text-navy-900 dark:!text-dark" />
                        </AccordionButton>
                      </p>
                      <AccordionPanel
                        className="text-left text-medium mt-1 !text-navy-900 dark:!text-dark"
                        pb={4}
                      >
                        Easily create tailored market reports by on industries
                        and regions in minuteses it a friendly expression.
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </span>
              </li>
              <li className={style.faqList}>
                <span className={style.text}>
                  <Accordion className="w-full" allowMultiple>
                    <AccordionItem className="border-b border-gray-200 py-[17px] dark:!border-white/10">
                      <p>
                        <AccordionButton className="flex justify-between">
                          <span
                            className="text-left font-bold text-navy-900 dark:text-dark"
                            flex="1"
                            textAlign="left"
                          >
                            Where does UruByte source its data?{" "}
                          </span>
                          <AccordionIcon className="text-left !text-navy-900 dark:!text-dark" />
                        </AccordionButton>
                      </p>
                      <AccordionPanel
                        className="text-left text-medium mt-1 !text-navy-900 dark:!text-dark"
                        pb={4}
                      >
                        Easily create tailored market reports by on industries
                        and regions in minuteses it a friendly expression.
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </span>
              </li>
            </ul>
          </div>
          <div className={style.faqContent}>
            <ul>
              <li className={style.faqList}>
                <span className={style.text}>
                  <Accordion className="w-full" allowMultiple>
                    <AccordionItem className="border-b border-gray-200 py-[17px] dark:!border-white/10">
                      <p>
                        <AccordionButton className="flex justify-between">
                          <span
                            className="text-left font-bold text-navy-900 dark:text-dark"
                            flex="1"
                            textAlign="left"
                          >
                            Is my data secure with UruByte?
                          </span>
                          <AccordionIcon className="text-left !text-navy-900 dark:!text-dark" />
                        </AccordionButton>
                      </p>
                      <AccordionPanel
                        className="text-left text-medium mt-1 !text-navy-900 dark:!text-dark"
                        pb={4}
                      >
                        Easily create tailored market reports by on industries
                        and regions in minuteses it a friendly expression.
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </span>
              </li>
              <li className={style.faqList}>
                <span className={style.text}>
                  <Accordion className="w-full" allowMultiple>
                    <AccordionItem className="border-b border-gray-200 py-[17px] dark:!border-white/10">
                      <p>
                        <AccordionButton className="flex justify-between">
                          <span
                            className="text-left font-bold text-navy-900 dark:text-dark"
                            flex="1"
                            textAlign="left"
                          >
                            How much does UruByte cost?{" "}
                          </span>
                          <AccordionIcon className="text-left !text-navy-900 dark:!text-dark" />
                        </AccordionButton>
                      </p>
                      <AccordionPanel
                        className="text-left text-medium mt-1 !text-navy-900 dark:!text-dark"
                        pb={4}
                      >
                        Easily create tailored market reports by on industries
                        and regions in minuteses it a friendly expression.
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </span>
              </li>
              <li className={style.faqList}>
                <span className={style.text}>
                  <Accordion className="w-full" allowMultiple>
                    <AccordionItem className="border-b border-gray-200 py-[17px] dark:!border-white/10">
                      <p>
                        <AccordionButton className="flex justify-between">
                          <span
                            className="text-left font-bold text-navy-900 dark:text-dark"
                            flex="1"
                            textAlign="left"
                          >
                            How do I get started with UruByte?{" "}
                          </span>
                          <AccordionIcon className="text-left !text-navy-900 dark:!text-dark" />
                        </AccordionButton>
                      </p>
                      <AccordionPanel
                        className="text-left text-medium mt-1 !text-navy-900 dark:!text-dark"
                        pb={4}
                      >
                        Easily create tailored market reports by on industries
                        and regions in minuteses it a friendly expression.
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </span>
              </li>
              <li className={style.faqList}>
                <span className={style.text}>
                  <Accordion className="w-full" allowMultiple>
                    <AccordionItem className="border-b border-gray-200 py-[17px] dark:!border-white/10">
                      <p>
                        <AccordionButton className="flex justify-between">
                          <span
                            className="text-left font-bold text-navy-900 dark:text-dark"
                            flex="1"
                            textAlign="left"
                          >
                            Do you have any case studies or success stories?{" "}
                          </span>
                          <AccordionIcon className="text-left !text-navy-900 dark:!text-dark" />
                        </AccordionButton>
                      </p>
                      <AccordionPanel
                        className="text-left text-medium mt-1 !text-navy-900 dark:!text-dark"
                        pb={4}
                      >
                        Easily create tailored market reports by on industries
                        and regions in minuteses it a friendly expression.
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
