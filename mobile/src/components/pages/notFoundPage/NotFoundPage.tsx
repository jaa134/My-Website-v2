import 'src/components/pages/notFoundPage/NotFoundPage.scss';

import React from 'react';

import defineBlock from 'src/utils/defineBlock';

const bem = defineBlock('NotFoundPage');

const NotFoundPage = () => (
  <div className={bem()}>
    <div className={`${bem('icon')} monospace`}>!</div>
    <div className={`${bem('description')} monospace`}>Page Not Found</div>
  </div>
);

export default NotFoundPage;
