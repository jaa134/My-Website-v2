import 'src/components/pages/experiencePage/skillsSection/techSkill/TechSkill.scss';

import PropTypes from 'prop-types';
import React, { FunctionComponent, MouseEventHandler } from 'react';

import defineBlock from 'src/utils/defineBlock';

const bem = defineBlock('TechSkill');

interface Props {
  techName: string;
  imagePath: string;
  active: boolean;
  onClick: MouseEventHandler<HTMLElement>;
}

const TechSkill: FunctionComponent<Props> = ({ techName, imagePath, active, onClick }) => (
  <button
    className={bem('', { active })}
    onClick={onClick}
  >
    <div className={bem('image')}>
      <img
        src={imagePath}
        alt=""
      />
    </div>
    <div className={bem('tech-name')}>{techName}</div>
  </button>
);

TechSkill.propTypes = {
  techName: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TechSkill;
