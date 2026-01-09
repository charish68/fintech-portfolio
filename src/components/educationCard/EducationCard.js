import React, { useContext } from "react";
import { Fade, Slide } from "react-reveal";
import "./EducationCard.scss";
import StyleContext from "../../contexts/StyleContext";

export default function EducationCard({ school }) {
  const { isDark } = useContext(StyleContext);

  // SAFE bullets renderer
  const GetDescBullets = ({ descBullets }) => {
    if (!Array.isArray(descBullets)) return null;

    return descBullets.map((item, i) => (
      <li key={i} className="subTitle">
        {item}
      </li>
    ));
  };

  if (!school) return null;

  return (
    <div>
      <Fade left duration={1000}>
        <div className="education-card">
          {/* LOGO REMOVED – prevents missing image build errors */}

          <div className="education-card-right">
            <h5 className="education-text-school">{school.schoolName}</h5>

            <div className="education-text-details">
              {school.subHeader && (
                <h5
                  className={
                    isDark
                      ? "dark-mode education-text-subHeader"
                      : "education-text-subHeader"
                  }
                >
                  {school.subHeader}
                </h5>
              )}

              {school.duration && (
                <p
                  className={`${
                    isDark ? "dark-mode" : ""
                  } education-text-duration`}
                >
                  {school.duration}
                </p>
              )}

              {school.desc && (
                <p className="education-text-desc">{school.desc}</p>
              )}

              {Array.isArray(school.descBullets) && (
                <div className="education-text-bullets">
                  <ul>
                    <GetDescBullets descBullets={school.descBullets} />
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </Fade>

      <Slide left duration={2000}>
        <div className="education-card-border"></div>
      </Slide>
    </div>
  );
}
