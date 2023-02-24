import PropTypes from 'prop-types';
import React, { FunctionComponent, ReactNode } from 'react';

type Props = {
  children: ReactNode;
}

const Layers: FunctionComponent<Props> = ({ children }) => <div>{children}</div>;

Layers.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layers;
