import 'src/components/common/loadingSpinner/LoadingSpinner.scss';

import PropTypes from 'prop-types';
import React, { FunctionComponent } from 'react';

import defineBlock from 'src/utils/defineBlock';

const bem = defineBlock('LoadingSpinner');

type Props = {
  size?: 'small' | 'medium' | 'large';
  color?: 'purple' | 'white';
}

const LoadingSpinner: FunctionComponent<Props> = ({ size = 'medium', color = 'purple' }) => (
  <div className={bem('', size, color)}>
    <div className={bem('dot')} />
    <div className={bem('dot')} />
    <div className={bem('dot')} />
    <div className={bem('dot')} />
  </div>
);

LoadingSpinner.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(['purple', 'white']),
};

export default LoadingSpinner;
