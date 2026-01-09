import React from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import { achievementSection } from "../../portfolio";

export default function Achievement() {
  // HARD SAFETY GUARD
  if (
    !achievementSection ||
    !achievementSection.display ||
    !Array.isArray(achievementSection.achievementsCards)
  ) {
    return null;
  }

  return (
    <div className="main" id="achievements">
      <div className="achievement-header">
        <h1 className="achievement-heading">
          {achievementSection.title}
        </h1>
        <p className="subTitle achievement-subtitle">
          {achievementSection.subtitle}
        </p>
      </div>

      <div className="achievement-cards-div">
        {achievementSection.achievementsCards.map((achievement, i) => (
          <AchievementCard key={i} achievement={achievement} />
        ))}
      </div>
    </div>
  );
}
