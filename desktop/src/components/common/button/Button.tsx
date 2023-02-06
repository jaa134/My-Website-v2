import 'src/components/common/button/Button.scss';

import React from 'react';

import defineBlock from 'src/utils/defineBlock';

const bem = defineBlock('Button');

type Props = {} & Partial<DefaultProps>;

type DefaultProps = {
  size: 'small' | 'medium' | 'large';
  type: 'filled' | 'outlined' | 'text';
  color: 'purple' | 'white';
};

const defaultProps: DefaultProps = {
  size: 'medium',
  type: 'filled',
  color: 'purple',
};

const Button = (propsIn: React.PropsWithChildren<Props>) => {
  const props = { ...defaultProps, ...propsIn };
  return <button className={bem('', props.size, props.type, props.color)}>{props.children ?? ''}</button>;
};

export default Button;
