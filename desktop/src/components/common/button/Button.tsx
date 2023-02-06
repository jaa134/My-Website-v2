import 'src/components/common/button/Button.scss';

import PropTypes from 'prop-types';
import React, { FunctionComponent } from 'react';

import defineBlock from 'src/utils/defineBlock';

const bem = defineBlock('Button');

type Props = React.PropsWithChildren<{
  size?: 'small' | 'medium' | 'large';
  type?: 'filled' | 'outlined' | 'text';
  color?: 'purple' | 'white';
  label?: string | null;
}>;

const Button: FunctionComponent<Props> = ({
  size = 'medium',
  type = 'filled',
  color = 'purple',
  label = null,
  children = null,
}) => (
  <button
    type="button"
    className={bem('', size, type, color)}
  >
    {children ?? label ?? ''}
  </button>
);

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['filled', 'outlined', 'text']),
  color: PropTypes.oneOf(['purple', 'white']),
  label: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
