import React from "react";
import { useState } from "react";
import style from "./About.module.css";
import imgOne from "../../assets/Icon.png";
import imgTwo from "../../assets/Iconn.png";
import imgThree from "../../assets/Group16.png";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Spinner,
  Heading,
  Center,
  Text,
  Flex,
  Box,
  Link
} from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";

const About = () => {
  // states to check if form is being submitted and is submitted
  const [isSubmitting, setIsSubmitting] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Function to add the user to the waitlist
  function addToWaitlist(event) {
    event.preventDefault();
    setIsSubmitting(true);

    const email = event.target.email.value;
    const phoneNumber = event.target.number.value;

    // Email validation (basic check for format)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setIsSubmitting(false)
      alert("Please enter a valid email address.");
      return;
    }

    // Remove non-digit characters
    const digitsOnly = phoneNumber.replace(/\D/g, "");

    // Check for valid lengths (10 or 12 digits)
    if (!digitsOnly.length === 10 || !(digitsOnly.length === 12 && phoneNumber.startsWith("+"))) {
      setIsSubmitting(false)
      alert("A valid phone number is required. Should be 10 digits or 14 digits with country code.");
      return;
    }

    // Prepare data to send
    const data = {
      "email": email,
      "phoneNumber": phoneNumber, // Remove non-digit characters from phone number
    };
    console.log(data);

    fetch("http://127.0.0.1:8000/auxi/waitlists/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        } else {
          console.log(data);
          setIsSubmitted(true);
        }
      })
      .catch(error => {
        console.error(error);
        // alert(error.message);
        setIsSubmitting(false);
      })
      .finally(() => setIsSubmitting(false));
  }

  return (
    <div
      data-aos="zoom-in-up"
      data-aos-easing="ease-out-cubic"
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
            {isSubmitting ? (
              <Center>
                <Spinner
                  thickness='5px'
                  speed='0.65s'
                  emptyColor='gray.200'
                  color='#e58a13'
                  size='xl'
                />
              </Center>
            ) : isSubmitted ? (
              <Box>
                <Heading as='h3' mb='8' className={style.waitlistInfoHeader}>Welcome Aboard!</Heading>
                <Text className={style.waitlistInfoText} mb='12'>
                  Thank you for joining our waitlist. We'll notify you as soon as we launch and you can be among the first to experience <span className={style.logoText}>UruBytes</span>.
                </Text>

                <Text className={style.waitlistInfoText} mb='10'>In the meantime, you can engage with us on social media:</Text>

                <Link href="https://www.linkedin.com/company/urubyte/" isExternal flex={1}>
                  <Flex>
                    <FaLinkedin className={style.icon} />
                    <Text ml={5}>@urubytes</Text>
                  </Flex>
                </Link>
              </Box>
            ) : (
              <>
                <h2>Join Waitlist</h2>

                <form action="" method="post" onSubmit={addToWaitlist}>
                  <div>
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Eg: mishek.lukhama@gomonji.com"
                      minLength={3}
                      required
                    />
                  </div>

                  <div>
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      minLength="10"
                      maxLength="14"
                      name="number"
                      placeholder="Eg: +233555555555"
                      required
                    />
                  </div>

                  <button type="submit" className={style.btn}>
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
