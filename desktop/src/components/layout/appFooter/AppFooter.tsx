import 'src/components/layout/appFooter/AppFooter.scss';

import React from 'react';

import defineBlock from 'src/utils/defineBlock';
import MyLogoVariant2 from 'src/components/icons/logos/MyLogoVariant2';
import FacebookVariant1 from 'src/components/icons/logos/FacebookVariant1';
import LinkedinVariant1 from 'src/components/icons/logos/LinkedinVariant1';
import GithubVariant1 from 'src/components/icons/logos/GithubVariant1';
import InstagramVariant1 from 'src/components/icons/logos/InstagramVariant1';
import TwitterVariant1 from 'src/components/icons/logos/TwitterVariant1';

const bem = defineBlock('AppFooter');

const AppHeader = () => {
  return (
    <div className={bem()}>
      <div className={bem('logo-column')}>
        <MyLogoVariant2 />
      </div>
      <div className={bem('link-column')}>
        <a className={bem('link', 'main')}>LINK</a>
        <a className={bem('link')}>LINK 1</a>
        <a className={bem('link')}>LINK 2</a>
        <a className={bem('link')}>LINK 3</a>
      </div>
      <div className={bem('link-column')}>
        <a className={bem('link', 'main')}>LINK</a>
        <a className={bem('link')}>LINK 1</a>
        <a className={bem('link')}>LINK 2</a>
        <a className={bem('link')}>LINK 3</a>
      </div>
      <div className={bem('link-column')}>
        <a className={bem('link', 'main')}>LINK</a>
        <a className={bem('link')}>LINK 1</a>
        <a className={bem('link')}>LINK 2</a>
        <a className={bem('link')}>LINK 3</a>
      </div>
      <div className={bem('contact-column')}>
        <div className={bem('contact-title')}>CONTACT</div>
        <div className={bem('contact-subtitle')}>Want to get in touch? Here's how you can reach me.</div>
        <div className={bem('contact-options')}>
          <a className={bem('contact-option')}>
            <LinkedinVariant1 />
          </a>
          <a className={bem('contact-option')}>
            <GithubVariant1 />
          </a>
          <a className={bem('contact-option')}>
            <FacebookVariant1 />
          </a>
          <a className={bem('contact-option')}>
            <InstagramVariant1 />
          </a>
          <a className={bem('contact-option')}>
            <TwitterVariant1 />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
