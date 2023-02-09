import 'src/components/pages/experiencePage/skillsSection/techSkill/TechSkill.scss';

import PropTypes from 'prop-types';
import React, { FunctionComponent } from 'react';

import defineBlock from 'src/utils/defineBlock';

const bem = defineBlock('TechSkill');

type Props = {
  techName: string;
  imagePath: string;
  href?: string | null;
};

const TechSkill: FunctionComponent<Props> = ({ techName, imagePath, href = null }) => {
  const content = (
    <>
      <div className={bem('image')}>
        <img
          src={imagePath}
          alt=""
        />
      </div>
      <div className={bem('tech-name')}>{techName}</div>
    </>
  );

  return href ? (
    <a
      className={bem()}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {content}
    </a>
  ) : (
    <div className={bem()}>{content}</div>
  );
};

TechSkill.propTypes = {
  techName: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
};

export default TechSkill;
