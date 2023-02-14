import 'src/components/pages/LazyPage.scss';

import PropTypes from 'prop-types';
import React, { FunctionComponent, Suspense, ReactNode } from 'react';

import defineBlock from 'src/utils/defineBlock';

import LoadingSpinner from 'src/components/common/loadingSpinner/LoadingSpinner';

const bem = defineBlock('LazyPage');

interface Props {
  children: ReactNode;
}

const LazyPage: FunctionComponent<Props> = ({ children }) => (
  <Suspense
    fallback={
      <div className={bem()}>
        <LoadingSpinner size="medium" />
      </div>
    }
  >
    {children}
  </Suspense>
);

LazyPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LazyPage;
