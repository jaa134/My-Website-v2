import 'src/components/pages/experiencePage/skillsSection/SkillsSection.scss';

import React from 'react';

import defineBlock from 'src/utils/defineBlock';
import {
  SkillLink,
  Achievement as AchievementType,
  devPractices,
  languages,
  services,
  technologies,
  achievements,
} from 'src/utils/constants';

import TechSkill from 'src/components/pages/experiencePage/skillsSection/techSkill/TechSkill';
import Achievement from 'src/components/pages/experiencePage/skillsSection/achievement/Achievement';

const bem = defineBlock('SkillsSection');

const renderSkills = (skills: SkillLink[]) =>
  skills.map(({ displayText, imagePath, href }) => {
    return (
      <TechSkill
        key={displayText}
        techName={displayText}
        imagePath={imagePath}
        href={href}
      />
    );
  });

const renderAchievements = (achievements: AchievementType[]) =>
  achievements.map(({ id, date, message }) => {
    return (
      <Achievement
        key={id}
        date={date}
        message={message}
      />
    );
  });

const SkillsSection = () => (
  <div className={bem()}>
    <div className={bem('title')}>Skills &#60;&#47;</div>
    <div className={bem('subtitle')}>Full List Of My Technical Skills</div>
    <div className={bem('bar')} />

    <div className={bem('section-title')}>Languages</div>
    <div className={bem('section')}>{renderSkills(languages)}</div>

    <div className={bem('section-title')}>Technologies</div>
    <div className={bem('section')}>{renderSkills(technologies)}</div>

    <div className={bem('section-title')}>Services</div>
    <div className={bem('section')}>{renderSkills(services)}</div>

    <div className={bem('section-title')}>Development Practices</div>
    <div className={bem('section')}>{renderSkills(devPractices)}</div>

    <div className={bem('section-title')}>Achievements</div>
    <div className={bem('section')}>{renderAchievements(achievements)}</div>
  </div>
);

export default SkillsSection;
