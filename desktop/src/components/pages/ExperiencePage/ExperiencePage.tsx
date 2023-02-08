import 'src/components/pages/experiencePage/ExperiencePage.scss';

import React from 'react';

import defineBlock from 'src/utils/defineBlock';
import PageHeader from 'src/components/common/pageHeader/PageHeader';

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
      <div className={bem('work')}></div>
      <div className={bem('tools')}></div>
      <div className={bem('projects')}></div>
    </div>
  );
};

export default ExperiencePage;
