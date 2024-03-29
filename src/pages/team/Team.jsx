import React from "react";
import style from "./Team.module.css";
import moby from "../../assets/moby.png";
import oyin from "../../assets/oyin.png";
import ibukun from "../../assets/ibk.png";
import kwesi from "../../assets/kwesi.png";

const Team = () => {
  return (
    <div id="team">
      <div id="team" className={`containe ${style.teamContainer}`}>
        <div className={style.teamIntro}>
          <span className={style.introSpan}>OUR TEAM</span>
          <h2 id="">Meet our amazing team</h2>
          <p>
            URUByte is led by a passionate team of data scientists, analysts,
            and industry experts dedicated to your success.
          </p>
        </div>
        <div className={style.meContent}>
          <div className={style.teamCards}>
            <article className="">
              <img
                src={moby}
                alt="Moby is the CEO"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              />
              <span className={style.teamContent}>
                <h5>Mogbitse Okitikpi </h5>
                <small>Chief Executive Officer</small>
              </span>
            </article>
            <article className="">
              <img
                src={oyin}
                alt="Oyinlade is the CMO"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              />
              <span className={style.teamContent}>
                <h5>Oyinlade Ojesanmi</h5>
                <small>Chief Marketting Officer</small>
              </span>
            </article>
            <article className="">
              <img
                src={ibukun}
                alt="Ibukun is the CPO"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              />
              <span className={style.teamContent}>
                <h5>Ibukun Ayomide-Baafog </h5>
                <small>Chief Product Officer</small>
              </span>
            </article>
            <article className="">
              <img
                src={kwesi}
                alt="Kwesi is the CTO"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              />
              <span className={style.teamContent}>
                <h5>Andrews Ankohamene </h5>
                <small>Chief Technology Officer</small>
              </span>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
