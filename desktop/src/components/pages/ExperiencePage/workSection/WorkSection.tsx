import 'src/components/pages/experiencePage/workSection/WorkSection.scss';

import React, { useEffect, useRef, useState } from 'react';

import defineBlock from 'src/utils/defineBlock';
import { resumePath } from 'src/utils/constants';
import Button from 'src/components/common/button/Button';

const bem = defineBlock('WorkSection');

type PanelData = {
  companyNameShort: string;
  companyNameLong: string;
  date: string;
  link: string;
  positions: string[];
  bulletPoints: string[];
};

const WorkSection = () => {
  const panelIndexInterval = useRef<NodeJS.Timer | null>(null);
  const panelIndexRef = useRef(0);
  const [panelIndex, setPanelIndex] = useState(panelIndexRef.current);

  const panels: readonly PanelData[] = [
    {
      companyNameShort: 'Loft Orbital',
      companyNameLong: 'Loft Orbital Solutions Inc.',
      date: 'Jan 2022 - Present',
      link: '',
      positions: [],
      bulletPoints: [],
    },
    {
      companyNameShort: 'HCL Software',
      companyNameLong: 'HCL Software',
      date: 'Jan 2021 - Jan 2022',
      link: '',
      positions: [],
      bulletPoints: [],
    },
    {
      companyNameShort: 'IBM UrbanCode',
      companyNameLong: 'IBM UrbanCode',
      date: 'May 2019 - Jan 2021',
      link: '',
      positions: [],
      bulletPoints: [],
    },
    {
      companyNameShort: 'Matrix Pointe',
      companyNameLong: 'Matrix Pointe Software',
      date: 'May 2016 - Aug 2018',
      link: '',
      positions: [],
      bulletPoints: [],
    },
    {
      companyNameShort: 'Lygent',
      companyNameLong: 'Lygent Medical Solutions',
      date: 'Apr 2015 - Feb 2016',
      link: '',
      positions: [],
      bulletPoints: [],
    },
    {
      companyNameShort: 'CWRUded',
      companyNameLong: 'CWRUded',
      date: 'Aug 2018 - May 2019',
      link: '',
      positions: [],
      bulletPoints: [],
    },
    {
      companyNameShort: 'Synchrony',
      companyNameLong: 'Synchrony',
      date: 'Aug 2018 - Dec 2018',
      link: '',
      positions: [],
      bulletPoints: [],
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
      <div className={bem('panel-title')}>{visiblePanel.companyNameLong}</div>
      {visiblePanel.positions.map((positon) => (
        <div
          key={positon}
          className={bem('panel-positon')}
        >
          {visiblePanel.date}
        </div>
      ))}
      <ul className={bem('panel-bullets')}>
        {visiblePanel.bulletPoints.map((bullet) => (
          <li
            key={bullet}
            className={bem('panel-bullet')}
          ></li>
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
              <div></div>
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
