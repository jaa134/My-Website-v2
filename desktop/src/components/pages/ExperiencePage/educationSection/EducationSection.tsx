import 'src/components/pages/experiencePage/educationSection/EducationSection.scss';

import React from 'react';

import { transcriptPath } from 'src/constants/documents';
import { educationImagesPath } from 'src/constants/images';
import defineBlock from 'src/utils/defineBlock';

import Button from 'src/components/common/button/Button';
import Download from 'src/components/icons/general/Download';

const bem = defineBlock('EducationSection');

interface EducationData {
  name: string;
  link: string;
  pic: string;
  description: string;
}

const EducationSection = () => {
  const universities: readonly EducationData[] = [
    {
      name: 'Case Western Reserve University',
      link: 'https://case.edu/',
      pic: `${educationImagesPath}/CWRU_logo.svg`,
      description: 'Undergraduate Alma Mater',
    },
    {
      name: 'University of Cape Town',
      link: 'https://www.uct.ac.za/',
      pic: `${educationImagesPath}/UCT_logo.svg`,
      description: 'IES Study Abroad Program - South Africa',
    },
  ];

  return (
    <div className={bem()}>
      <div className={bem('title')}>Education &#60;&#47;</div>
      <div className={bem('subtitle')}>How I Got My Start</div>
      <div className={bem('bar')} />
      <a
        className={bem('download-button')}
        href={transcriptPath}
        download
      >
        <Button
          size="medium"
          type="filled"
          color="purple"
          icon={<Download />}
          label="Download Transcript"
        />
      </a>
      <div className={bem('container')}>
        {universities.map((university) => (
          <a
            key={university.name}
            className={bem('card')}
            href={university.link}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={university.pic}
              alt=""
            />
            <div className={bem('card-description')}>{university.description}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
