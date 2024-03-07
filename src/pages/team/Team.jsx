import React from "react";
import style from "./Team.module.css";
import moby from "../../assets/moby.png";
import oyin from "../../assets/oyin.png";
import miranda from "../../assets/miranda.png";
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
              <img src={moby} alt="Moby is the CEO" />
              <span className={style.teamContent}>
                <h5>Mobigshe </h5>
                <small>Chief Executive Officer</small>
              </span>
            </article>
            <article className="">
              <img src={oyin} alt="Oyinlade is the CMO" />
              <span className={style.teamContent}>
                <h5>Oyinlade Ojesanmi</h5>
                <small>Chief Marketting Officer</small>
              </span>
            </article>
            <article className="">
              <img src={miranda} alt="Miranda is the CPO" />
              <span className={style.teamContent}>
                <h5>Miranda Anya </h5>
                <small>Chief Product Officer</small>
              </span>
            </article>
            <article className="">
              <img src={kwesi} alt="Kwesi is the CTO" />
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
