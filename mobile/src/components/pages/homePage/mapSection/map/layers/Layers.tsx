import PropTypes from 'prop-types';
import React, { FunctionComponent, PropsWithChildren } from 'react';

type Props = PropsWithChildren<{}>;

const Layers: FunctionComponent<Props> = ({ children }) => {
  return <div>{children}</div>;
};

Layers.propTypes = {
  children: PropTypes.node,
};

export default Layers;
