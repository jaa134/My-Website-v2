import 'src/components/pages/experiencePage/ExperiencePage.scss';

import React from 'react';

import defineBlock from 'src/utils/css';

import PageHeader from 'src/components/common/pageHeader/PageHeader';
import LineSplit from 'src/components/layout/lineSplit/LineSplit';
import WorkSection from 'src/components/pages/experiencePage/workSection/WorkSection';
import EducationSection from 'src/components/pages/experiencePage/educationSection/EducationSection';
import SkillsSection from 'src/components/pages/experiencePage/skillsSection/SkillsSection';
import ProjectsSection from 'src/components/pages/experiencePage/projectsSection/ProjectsSection';

const bem = defineBlock('ExperiencePage');

const ExperiencePage = () => {
  const startYear = 2016;
  const yearsOfExp = new Date().getFullYear() - startYear;
  return (
    <div className={bem()}>
      <div className={bem('header')}>
        <PageHeader
          title="Work Experience"
          subtitle="What I've Been Up To"
          description={`A total of ${yearsOfExp} years in industry designing, developing, and launching highly responsive websites and mobile applications.`}
        />
      </div>
      <div className={bem('line-split')}>
        <LineSplit />
      </div>
      <div className={bem('work')}>
        <WorkSection />
      </div>
      <div className={bem('education')}>
        <EducationSection />
      </div>
      <div className={bem('skills')}>
        <SkillsSection />
      </div>
      <div className={bem('projects')}>
        <ProjectsSection />
      </div>
    </div>
  );
};

export default ExperiencePage;
