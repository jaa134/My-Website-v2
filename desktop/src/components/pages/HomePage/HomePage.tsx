import React from 'react';

import defineBlock from 'src/utils/defineBlock';

import UnderConstruction from 'src/components/common/underConstruction/UnderConstruction';

const bem = defineBlock('HomePage');

const HomePage = () => (
  <div className={bem()}>
    <UnderConstruction />
  </div>
);

export default HomePage;
