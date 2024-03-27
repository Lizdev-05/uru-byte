import React from "react";
import { useState } from "react";
import style from "./Contact.module.css";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import {
  Spinner,
  Heading,
  Center,
  Text,
  Flex,
  Box,
  Link,
} from "@chakra-ui/react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function addToContacts(event) {
    event.preventDefault();
    setIsSubmitting(true);

    const email = event.target.email.value;
    const phoneNumber = event.target.number.value;
    const message = event.target.message.value;

    // Email validation (basic check for format)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setIsSubmitting(false);
      alert("Please enter a valid email address.");
      return;
    }

    // Remove non-digit characters
    const digitsOnly = phoneNumber.replace(/\D/g, "");

    // Check for valid lengths (10 or 12 digits)
    if (
      !digitsOnly.length === 10 ||
      !(digitsOnly.length === 13 && phoneNumber.startsWith("+"))
    ) {
      setIsSubmitting(false);
      alert(
        "A valid phone number is required. Should be 10 digits or 14 digits with country code."
      );
      return;
    }

    // Check for message
    if (!message.length >= 2) {
      setIsSubmitting(false);
      alert("Your message should be 2 or more characters long.");
      return;
    }

    // Prepare data to send
    const data = {
      email: email,
      phoneNumber: phoneNumber,
      message: message,
    };

    fetch("https://urubytes-psotp.ondigitalocean.app/auxi/contacts/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        } else {
          setIsSubmitted(true);
        }
      })
      .catch((error) => {
        setIsSubmitting(false);
      })
      .finally(() => setIsSubmitting(false));
  }

  return (
    <div id="contact">
      <div id="contact" className={`containe ${style.contactContainer}`}>
        <div
          className={style.contactUs}
          data-aos="zoom-in-up"
          data-aos-duration="3000"
        >
          <div className={style.contactForm}>
            {isSubmitting ? (
              <Center h="100%">
                <Spinner
                  thickness="5px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="#e58a13"
                  size="xl"
                />
              </Center>
            ) : isSubmitted ? (
              <Box>
                <Heading as="h3" mb="8" className={style.contactInfoHeader}>
                  Message Received!
                </Heading>
                <Text className={style.contactInfoText} mb="5">
                  Thank you for reaching out to us. We have received your
                  message and will get back to you shortly.
                </Text>

                <Text className={style.contactInfoText} mb="5">
                  In the meantime, you can engage with us on social media:
                </Text>

                <Link
                  href="https://www.linkedin.com/company/urubyte/"
                  isExternal
                  flex={1}
                >
                  <Flex>
                    <FaLinkedin className={style.linkedIn} />
                    <Text ml={2}>@urubytes</Text>
                  </Flex>
                </Link>
              </Box>
            ) : (
              <>
                <h2>Contact Us</h2>
                <form action="" method="post" onSubmit={addToContacts}>
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

                  <div>
                    <label>Message</label>
                    <textarea
                      type="text"
                      minLength="2"
                      cols="30"
                      rows="7"
                      name="message"
                      placeholder="Enter your message here..."
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className={style.btn}>
                    Send Message
                  </button>
                </form>
              </>
            )}
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
