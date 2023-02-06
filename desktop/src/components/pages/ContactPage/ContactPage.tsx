import React from 'react';

import defineBlock from 'src/utils/defineBlock';

import UnderConstruction from 'src/components/common/underConstruction/UnderConstruction';

const bem = defineBlock('ContactPage');

const ContactPage = () => (
  <div className={bem()}>
    <UnderConstruction />
  </div>
);

export default ContactPage;
