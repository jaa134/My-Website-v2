import 'src/components/pages/homePage/contactSection/ContactSection.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import defineBlock from 'src/utils/css';

import Button from 'src/components/common/button/Button';

import { RouteName } from 'src/constants/common';

const bem = defineBlock('ContactSection');

const ContactSection = () => (
  <div className={bem()}>
    <div className={bem('title')}>
      <div className={bem('command', 'main')}>$npm</div>
      <div className={bem('command')}>&#123;LetsWorkTogether!</div>
    </div>
    <Link to={RouteName.Contact}>
      <Button
        size="medium"
        type="filled"
        color="purple"
        label="Let's Talk"
      />
    </Link>
  </div>
);

export default ContactSection;
