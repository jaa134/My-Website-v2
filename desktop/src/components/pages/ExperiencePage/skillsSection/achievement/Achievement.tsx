import 'src/components/pages/experiencePage/skillsSection/achievement/Achievement.scss';

import PropTypes from 'prop-types';
import React, { FunctionComponent } from 'react';

import { skillsImagesPath } from 'src/constants/images';
import defineBlock from 'src/utils/defineBlock';

const bem = defineBlock('Achievement');

interface Props {
  message: string;
}

const Achievement: FunctionComponent<Props> = ({ message }) => (
  <div className={bem()}>
    <div className={bem('image')}>
      <img
        src={`${skillsImagesPath}/OtherSkill.svg`}
        alt=""
      />
    </div>
    <div className={bem('message')}>{message}</div>
  </div>
);

Achievement.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Achievement;
