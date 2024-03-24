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
    <div id="faq">
      <div id="faq" className={`containe ${style.faqContainer}`}>
        <div className={style.faqIntro}>
          <span className={style.introSpan}>FAQs</span>
          <h2 id="">Frequently asked questions</h2>
          <p>We have put together some commonly asked questions</p>
        </div>
        <div className={style.faqUs}>
          <div
            className={style.faqContent}
            data-aos="zoom-out-right"
            data-aos-duration="3000"
          >
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
                        UruByte offers data intelligence services tailored for
                        startups and investors in Africa. These services include
                        seamless data integration, powerful analytics tools,
                        insightful reporting, and collaborative features, all
                        designed to empower users with actionable insights for
                        informed decision-making and strategic growth.
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
                        Yes, absolutely! At Urubytes, we understand that each
                        user may have unique data needs and requirements. That's
                        why we offer customized reporting options tailored to
                        your specific preferences and objectives.
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
                        Our team is committed to delivering accurate and
                        actionable reports to you as efficiently as possible,
                        without compromising on quality.
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </span>
              </li>
            </ul>
          </div>
          <div
            className={style.faqContent}
            data-aos="zoom-out-left"
            data-aos-duration="3000"
          >
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
                        Yes, your data security is of utmost importance to us at
                        Urubytes. We have implemented robust security measures
                        to ensure that your data remains safe and protected at
                        all times. Our platform utilizes advanced encryption
                        techniques to safeguard your data during storage and
                        transmission, preventing unauthorized access or
                        breaches. Additionally, we adhere to strict data privacy
                        regulations and industry best practices to maintain the
                        confidentiality and integrity of your information. Our
                        team undergoes regular security audits and assessments
                        to identify and address any potential vulnerabilities,
                        ensuring that your data remains secure.
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
                        Look for a "Get Started" button. This will lead you
                        through a signup process to create your account. You can
                        also request for demos to allow you explore the platform
                        and its features.
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
                            How can I partner with Urubytes?
                          </span>
                          <AccordionIcon className="text-left !text-navy-900 dark:!text-dark" />
                        </AccordionButton>
                      </p>
                      <AccordionPanel
                        className="text-left text-medium mt-1 !text-navy-900 dark:!text-dark"
                        pb={4}
                      >
                        Contact UruByte's partnership or business development
                        team to express your interest in partnering. This can be
                        done through our website contact form. Clearly
                        articulate how your organization can benefit UruByte and
                        its customers through collaboration.
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
