import PropTypes from 'prop-types';
import React, { PropsWithChildren, FunctionComponent } from 'react';

type Props = PropsWithChildren<{}>;

const Controls: FunctionComponent<Props> = ({ children }) => {
  return <div>{children}</div>;
};

Controls.propTypes = {
  children: PropTypes.node,
};

export default Controls;
