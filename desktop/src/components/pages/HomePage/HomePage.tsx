import React from 'react';

import defineBlock from 'src/utils/defineBlock';

const bem = defineBlock('HomePage');

const HomePage = () => <div className={bem()}>Home page</div>;

export default HomePage;
