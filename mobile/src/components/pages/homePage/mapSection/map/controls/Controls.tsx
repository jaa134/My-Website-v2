import PropTypes from 'prop-types';
import React, { FunctionComponent, ReactNode } from 'react';

type Props = {
  children: ReactNode;
}

const Controls: FunctionComponent<Props> = ({ children }) => <div>{children}</div>;

Controls.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Controls;
