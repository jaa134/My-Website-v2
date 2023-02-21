import 'src/components/pages/contactPage/ContactPage.scss';

import React from 'react';

import defineBlock from 'src/utils/defineBlock';

import PageHeader from 'src/components/common/pageHeader/PageHeader';
import LineSplit from 'src/components/layout/lineSplit/LineSplit';
import UnderConstruction from 'src/components/common/underConstruction/UnderConstruction';

const bem = defineBlock('ContactPage');

const ContactPage = () => (
  <div className={bem()}>
    <div className={bem('header')}>
      <PageHeader
        title="Contact Me"
        subtitle="Let’s Work Together"
        description="Want to get in touch? Here's how you can reach me."
      />
    </div>
    <div className={bem('line-split')}>
      <LineSplit />
    </div>
    <UnderConstruction />
  </div>
);

export default ContactPage;
