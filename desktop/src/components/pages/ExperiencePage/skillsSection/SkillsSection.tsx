import 'src/components/pages/experiencePage/skillsSection/SkillsSection.scss';

import React, { useState } from 'react';

import {
  Achievement as AchievementType,
  achievements,
  devPractices,
  languages,
  services,
  SkillLink,
  technologies,
} from 'src/utils/constants';
import defineBlock from 'src/utils/defineBlock';

import Dialog from 'src/components/common/dialog/Dialog';
import Achievement from 'src/components/pages/experiencePage/skillsSection/achievement/Achievement';
import TechSkill from 'src/components/pages/experiencePage/skillsSection/techSkill/TechSkill';

const bem = defineBlock('SkillsSection');

const SkillsSection = () => {
  const [activeSkill, setActiveSkill] = useState<SkillLink | null>(null);

  const renderSkills = (skillsData: SkillLink[]) =>
    skillsData.map((skill) => (
      <TechSkill
        key={skill.displayText}
        techName={skill.displayText}
        imagePath={skill.imagePath}
        active={skill.displayText === activeSkill?.displayText}
        onClick={() => setActiveSkill(skill)}
      />
    ));

  const renderAchievements = (achievementsData: AchievementType[]) =>
    achievementsData.map(({ id, message }) => (
      <Achievement
        key={id}
        message={message}
      />
    ));

  const renderSlider = (label: string, value: number) => (
    <div className={bem('dialog-slider', `${value}`)}>
      <style>{`.${bem('dialog-slider')}--${value} { --bar-width: ${value}% }`}</style>
      <div className={bem('dialog-slider-label')}>{label}</div>
      <div className={bem('dialog-slider-value')}>
        <div className={bem('dialog-slider-value-inner')} />
      </div>
    </div>
  );

  return (
    <>
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

      {activeSkill && (
        <Dialog
          open
          title={`You Selected "${activeSkill.displayText}"`}
          {...(activeSkill.href && {
            primaryAction: {
              label: 'More Details',
              href: activeSkill.href,
            },
          })}
          onClose={() => setActiveSkill(null)}
        >
          <div className={bem('dialog-content')}>
            <div className={bem('dialog-image')}>
              <img
                src={activeSkill.imagePath}
                alt=""
              />
            </div>
            <div className={bem('dialog-sliders')}>
              {renderSlider('Knowledge', activeSkill.values.knowledge)}
              {renderSlider('Experience', activeSkill.values.experience)}
              {renderSlider('Fondness', activeSkill.values.fondness)}
            </div>
          </div>
        </Dialog>
      )}
    </>
  );
};

export default SkillsSection;
