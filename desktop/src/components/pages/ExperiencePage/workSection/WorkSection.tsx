import 'src/components/pages/experiencePage/workSection/WorkSection.scss';

import React, { useEffect, useRef, useState } from 'react';

import { resumePath } from 'src/constants/documents';
import defineBlock from 'src/utils/defineBlock';

import Button from 'src/components/common/button/Button';

const bem = defineBlock('WorkSection');

interface PanelData {
  companyNameShort: string;
  companyNameLong: string;
  date: string;
  link: string;
  position: string;
  bulletPoints: string[];
}

const WorkSection = () => {
  const panelIndexInterval = useRef<NodeJS.Timer | null>(null);
  const panelIndexRef = useRef(0);
  const [panelIndex, setPanelIndex] = useState(panelIndexRef.current);

  const panels: readonly PanelData[] = [
    {
      companyNameShort: 'Loft Orbital',
      companyNameLong: 'Loft Orbital Solutions Inc.',
      date: 'Jan 2022 - Present',
      link: 'https://www.loftorbital.com/',
      position: 'Senior Front-End Developer',
      bulletPoints: [
        'Works with a diverse and talented team of Engineers in Europe and in the US to help build the next missions and apps to test and pilot spacecraft',
        'Demonstrates in-depth knowledge of core web/browser concepts, and other web development/testing/production tools using Vue.js (2&3), TypeScript, GraphQL, Apollo Client, Webpack, and Vite',
        'Introduced new patterns for backlog management, Jira ticket templating, Gitlab merge request templating, code linting, and code formating to increase developer productivity',
        'Piloted and controlled satellites in orbit after completing satellite pilot training and certification',
        'Routinely engages in satellite operations to ensure satellites remain performant',
      ],
    },
    {
      companyNameShort: 'HCL Software',
      companyNameLong: 'HCL Software',
      date: 'May 2019 - Jan 2022',
      link: 'https://www.hcltechsw.com/',
      position: 'Front-End Lead',
      bulletPoints: [
        'Led UI/UX design review meetings and implementation',
        'Was responsibile for merging UI/UX focused tickets into main branch after reviewing team pull requests',
        'Conducted an extensive UI/UX review to refresh all product pages over a 3 month period. Rewrote more than 30 pages from scratch to remove legacy code and ensure robustnesss of the UI',
        'Reduced known UI defects in our product backlog by over 90% in less than 10 months',
        'Identified and fixed various performance traps that resulted in web pages rendering up to 125x faster',
        'Recieved the highest form of accredidation, distinguished, during all performance reviews',
      ],
    },
    {
      companyNameShort: 'IBM UrbanCode',
      companyNameLong: 'IBM UrbanCode',
      date: 'May 2019 - Jan 2022',
      link: 'https://www.ibm.com/cloud/urbancode',
      position: 'Client Advocate & L3 support',
      bulletPoints: [
        'Collaborated as part of an international support team with IBM and HCL engineers to maintain company relations and meet SLA on issues that impact millions of dollars in financial investments',
        'Maintained personal relationships with high-profile customer accounts that need a dedicated advocate for their issues',
        'Identified a variety of issues that customers faced such as Java JRE bugs, network connectivity issues, licensing issues, product defects, and more',
        'Helped customers devise and enact plans for upgrading our product across multiple testing environments to ensure integrity of upgrade processes and customer data',
      ],
    },
    {
      companyNameShort: 'Matrix Pointe',
      companyNameLong: 'Matrix Pointe Software',
      date: 'May 2016 - Aug 2018',
      link: 'https://www.matrixpointesoftware.com/',
      position: 'Full Stack Developer',
      bulletPoints: [
        'Developed a suite of web applications that streamline the justice system and connect law enforcement agencies, prosecutors, courts, and defense attorneys in 50+ counties across Ohio',
        'Wrote a time-tracking widget for Microsoft VSTS that integrated with an in-house employee payroll system, allowing users to more accurately record time',
        "Invited back for multiple full-time internships and cooperative educational program's",
        'Worked part-time during school and later offered full-time position after graduation',
        'Awarded $2,500 scholarship for continued education in acknowledgment of product contributions',
      ],
    },
    {
      companyNameShort: 'Lygent',
      companyNameLong: 'Lygent Medical Solutions',
      date: 'Apr 2015 - Feb 2016',
      link: 'https://www.crunchbase.com/organization/lygent',
      position: 'Lead Developer',
      bulletPoints: [
        'Continued development of a novel vision screening tool (the iStrab™) that identified and measured strabismus, a treatable disorder in which the eyes are misaligned',
        'Awarded $25,000 grant from the Innovation Fund to continue development of the iStrab™ diagnostic equipment',
        'Created a series of brain-games that increase mental stimulation in the early mornings and widgets for displaying weather data, appointments, commute time, news headlines, and more',
        'Directed team members throughout project duration to ensure project milestones were met, tested, and delivered on time',
      ],
    },
    {
      companyNameShort: 'CWRUded',
      companyNameLong: 'CWRUded',
      date: 'Aug 2018 - May 2019',
      link: 'https://github.com/jaa134/CWRUded-Presentation_Materials',
      position: 'Founder & Lead Developer',
      bulletPoints: [
        'Designed and developed a data-driven web service and mobile application with senior university faculty to compute and convey real-time “busyness” metrics for various locations around campus',
        'Solution leveraged address resolution protocol (ARP) and Cisco Prime Infrastructure API that manages CWRU wireless network to expose and aggregate unique active clients connected to wireless access points throughout campus',
        'Planned and lead meetings with campus deans, network admins, and IT marketing team as part of an effort to make my product available to students',
        'Set out to create a startup for this project, but plans were put on hold due to concerns about data privacy',
      ],
    },
    {
      companyNameShort: 'Synchrony',
      companyNameLong: 'Synchrony',
      date: 'Aug 2018 - Dec 2018',
      position: 'Project Manager & Front-End Lead',
      link: 'https://github.com/jaa134/Synchrony',
      bulletPoints: [
        'Developed a synchronized streaming service that enhances the music listening experience of users through shared playlist collaboration and discovery',
        'Directed team members throughout project duration to ensure project milestones were met, tested, and delivered on time',
        'Implemented a flexible UI (with Angular and Sass) that functions on most screen sizes without hassle',
        'Awarded academic honors in spring of 2019 for most outstanding senior project of the year in the electrical engineering and computer science departments',
        'Roughly a year later, Spotify implemented the same features within its own mobile application',
      ],
    },
    {
      companyNameShort: 'CWRU Tutor',
      companyNameLong: 'CWRU Peer Tutor',
      date: 'Aug 2016 - May 2019',
      link: 'https://case.edu/studentsuccess/academic-resources/peer-tutoring',
      position: 'Teaching Assistant & Peer Tutor',
      bulletPoints: [
        "Reinforced course work during tutoring sessions and recitations to boost students' academic performance",
        'Customized instructional approaches to meet the academic needs of diverse clients across a variety of courses',
        'Collaborated with faculty members to ensure lesson plans addressed students’ strengths/weaknesses',
        'Graded student assignments, quizzes, and tests. Kept scores updated in university database.',
      ],
    },
  ];

  const stopAutoSlideshow = () => {
    if (panelIndexInterval.current) {
      clearInterval(panelIndexInterval.current);
    }
  };

  const selectPanel = (index: number) => {
    panelIndexRef.current = index;
    setPanelIndex(panelIndexRef.current);
  };

  useEffect(() => {
    panelIndexInterval.current = setInterval(() => {
      selectPanel(panelIndexRef.current === panels.length - 1 ? 0 : panelIndexRef.current + 1);
    }, 5000);
    return () => {
      stopAutoSlideshow();
    };
  }, []);

  const onClickPanelButton = (index: number) => {
    stopAutoSlideshow();
    selectPanel(index);
  };

  const visiblePanel = panels[panelIndex];
  const panelContent = visiblePanel && (
    <>
      <div className={bem('panel-date')}>{visiblePanel.date}</div>
      <a
        className={bem('panel-title')}
        href={visiblePanel.link}
        target="_blank"
        rel="noreferrer"
      >
        {visiblePanel.companyNameLong}
      </a>
      <div className={bem('panel-positon')}>{visiblePanel.position}</div>
      <ul className={bem('panel-bullets')}>
        {visiblePanel.bulletPoints.map((bullet) => (
          <li
            key={bullet}
            className={bem('panel-bullet')}
          >
            {bullet}
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <div className={bem()}>
      <div className={bem('title')}>CV &#60;&#47;</div>
      <div className={bem('subtitle')}>My Career Path Details</div>
      <div className={bem('bar')} />
      <a
        className={bem('download-button')}
        href={resumePath}
        download
      >
        <Button
          size="medium"
          type="filled"
          color="purple"
          label="Download Resume"
        />
      </a>
      <div className={bem('container')}>
        <div className={bem('controls')}>
          {panels.map((panel, i) => (
            <div
              key={panel.companyNameShort}
              className={bem('panel-button', { active: panelIndex === i })}
              onClick={() => onClickPanelButton(i)}
            >
              <div />
              <div>{panel.companyNameShort}</div>
            </div>
          ))}
        </div>
        <div className={bem('panel')}>{panelContent}</div>
      </div>
    </div>
  );
};

export default WorkSection;
