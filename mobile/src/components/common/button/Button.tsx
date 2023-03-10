import 'src/components/common/button/Button.scss';

import PropTypes from 'prop-types';
import React, { FunctionComponent, MouseEventHandler, PropsWithChildren, ReactElement } from 'react';

import defineBlock from 'src/utils/css';

const bem = defineBlock('Button');

type Props = PropsWithChildren<{
  size?: 'small' | 'medium' | 'large';
  type?: 'filled' | 'outlined' | 'text';
  color?: 'purple' | 'white';
  disabled?: boolean;
  icon?: ReactElement;
  label?: string;
  onClick?: MouseEventHandler<HTMLElement>;
}>;

const Button: FunctionComponent<Props> = ({
  size = 'medium',
  type = 'filled',
  color = 'purple',
  disabled = false,
  icon = null,
  label = null,
  children = null,
  onClick = null,
}) => (
  <button
    type="button"
    className={bem('', size, type, color, { disabled })}
    disabled={disabled}
    {...(onClick && !disabled && { onClick })}
  >
    {icon && <div className={bem('icon')}>{icon}</div>}
    <div className={bem('text')}>{children ?? label ?? ''}</div>
  </button>
);

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['filled', 'outlined', 'text']),
  color: PropTypes.oneOf(['purple', 'white']),
  disabled: PropTypes.bool,
  icon: PropTypes.element,
  label: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
