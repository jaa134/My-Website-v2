import 'src/components/common/underConstruction/UnderConstruction.scss';

import React, { FunctionComponent } from 'react';

import defineBlock from 'src/utils/css';

const bem = defineBlock('UnderConstruction');

const UnderConstruction: FunctionComponent = () => (
  <div className={bem()}>
    <div className={`${bem('icon')} monospace`}>!</div>
    <div className={`${bem('description')} monospace`}>Under Construction</div>
  </div>
);

export default UnderConstruction;
