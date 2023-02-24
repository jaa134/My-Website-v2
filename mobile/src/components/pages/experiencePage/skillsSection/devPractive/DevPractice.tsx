import 'src/components/pages/experiencePage/skillsSection/devPractive/DevPractice.scss';

import PropTypes from 'prop-types';
import React, { FunctionComponent, MouseEventHandler } from 'react';

import defineBlock from 'src/utils/css';

const bem = defineBlock('DevPractice');

interface Props {
  techName: string;
  imagePath: string;
  active: boolean;
  onClick: MouseEventHandler<HTMLElement>;
}

const DevPractice: FunctionComponent<Props> = ({ techName, imagePath, active, onClick }) => (
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

DevPractice.propTypes = {
  techName: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DevPractice;
