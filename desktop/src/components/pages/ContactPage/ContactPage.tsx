import 'src/components/pages/contactPage/ContactPage.scss';

import React from 'react';

import defineBlock from 'src/utils/defineBlock';

import PageHeader from 'src/components/common/pageHeader/PageHeader';
import OptionsSection from 'src/components/pages/contactPage/optionsSection/OptionsSection';
import FormSection from 'src/components/pages/contactPage/formSection/FormSection';
import GlobeSection from 'src/components/pages/contactPage/globeSection/GlobeSection';
import SocialsSection from 'src/components/pages/contactPage/socialsSection/SocialsSection';

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
    <div className={bem('options')}>
      <OptionsSection />
    </div>
    <div className={bem('form')}>
      <FormSection />
    </div>
    <div className={bem('socials')}>
      <SocialsSection />
    </div>
    <div className={bem('globe')}>
      <GlobeSection />
    </div>
  </div>
);

export default ContactPage;
