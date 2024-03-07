import React from "react";
import style from "./Feature.module.css";
import imgOne from "../../assets/Icon.png";
import imgTwo from "../../assets/Icon2.png";
import imgThree from "../../assets/Icon3.png";
import imgFour from "../../assets/Iconn.png";
import imgFive from "../../assets/IconFive.png";
import imgSix from "../../assets/Icon4.png";

// import { img } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa6";

const Feature = () => {
  return (
    <div id="features">
      <div id="features" className={`container ${style.featureContainer}`}>
        <div className={style.featureIntro}>
          <span className={style.introSpan}>FEATURES</span>
          <h2 id="">Explore our amazing features</h2>
          <p>
            URUByte empowers businesses with data-driven insights to make
            informed decisions and achieve strategic growth.
          </p>
        </div>
        <div className={style.meContent}>
          <div className={style.featureCards}>
            <article className={style.featureCard}>
              <img src={imgOne} alt="" className={style.featureIcon} />

              <h5>Interactive Dashboards</h5>
              <small>
                Visualize complex data and trends effortlessly with dynamic,
                customizable dashboards. Gain actionable insights at a glance
                and make informed decisions faster than ever before.
              </small>
              <div className={style.cta}>
                <span>Learn More</span>
                <FaArrowRight />
              </div>
            </article>
            <article className={style.featureCard}>
              <img src={imgTwo} alt="" className={style.featureIcon} />
              <h5>Advanced Analytics</h5>
              <small>
                Harness the power of cutting-edge analytics tools to dissect
                market dynamics, uncover hidden opportunities, and stay ahead of
                the competition.
              </small>
              <div className={style.cta}>
                <span>Learn More</span>
                <FaArrowRight />
              </div>
            </article>
            <article className={style.featureCard}>
              <img src={imgThree} alt="" className={style.featureIcon} />
              <h5>AI-Powered Insights</h5>
              <small>
                Leverage the latest in artificial intelligence and machine
                learning technologies to uncover actionable insights from vast
                amounts of data
              </small>
              <div className={style.cta}>
                <span>Learn More</span>
                <FaArrowRight />
              </div>
            </article>
            <article className={style.featureCard}>
              <img src={imgFour} alt="" className={style.featureIcon} />
              <h5>Competitive Intelligence</h5>
              <small>
                Gain valuable insights into your competitors' strategies,
                performance, and positioning. Track competitor activities and
                identify areas for differentiation to gain a competitive edge
              </small>
              <div className={style.cta}>
                <span>Learn More</span>
                <FaArrowRight />
              </div>
            </article>
            <article className={style.featureCard}>
              <img src={imgFive} alt="" className={style.featureIcon} />
              <h5>Real-Time Alerts</h5>
              <small>
                Stay informed of critical developments and emerging trends with
                our real-time alert system. Receive instant notifications
                enabling you to act swiftly and decisively.
              </small>
              <div className={style.cta}>
                <span>Learn More</span>
                <FaArrowRight />
              </div>
            </article>
            <article className={style.featureCard}>
              <img src={imgSix} alt="" className={style.featureIcon} />
              <h5>Customizable Reports</h5>
              <small>
                Tailor your market reports to meet your specific needs and
                preferences. With our easy-to-use report builder, you can choose
                the data points, metrics, and visualizations
              </small>
              <div className={style.cta}>
                <span>Learn More</span>
                <FaArrowRight />
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
