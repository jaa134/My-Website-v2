import 'src/components/pages/homePage/contactSection/ContactSection.scss';

import React from 'react';

import defineBlock from 'src/utils/defineBlock';

import Button from 'src/components/common/button/Button';
import { Link } from 'react-router-dom';
import { RouteName } from 'src/utils/constants';

const bem = defineBlock('ContactSection');

const ContactSection = () => (
  <div className={bem()}>
    <div className={bem('title')}>
      <div className={bem('command', 'main')}>$npm</div>
      <div className={bem('command')}>&#123;LetsWorkTogether!</div>
    </div>
    <Link to={RouteName.Contact}>
      <Button
        size="large"
        type="filled"
        color="purple"
        label="Let's Talk"
      />
    </Link>
  </div>
);

export default ContactSection;
