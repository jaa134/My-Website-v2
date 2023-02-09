import 'src/components/layout/appFooter/AppFooter.scss';

import React from 'react';

import { Link } from 'src/utils/constants';
import defineBlock from 'src/utils/defineBlock';

import FacebookVariant1 from 'src/components/icons/logos/socials/FacebookVariant1';
import GitHubVariant1 from 'src/components/icons/logos/socials/GitHubVariant1';
import InstagramVariant1 from 'src/components/icons/logos/socials/InstagramVariant1';
import LinkedinVariant1 from 'src/components/icons/logos/socials/LinkedinVariant1';
import MyLogoVariant2 from 'src/components/icons/logos/personal/MyLogoVariant2';
import TwitterVariant1 from 'src/components/icons/logos/socials/TwitterVariant1';

const bem = defineBlock('AppFooter');

const AppHeader = () => (
  <div className={bem()}>
    <div className={bem('logo-column')}>
      <MyLogoVariant2 />
    </div>
    <div className={bem('link-column')}>
      <a
        className={bem('link', 'main')}
        href="/"
      >
        LINK
      </a>
      <a
        className={bem('link')}
        href="/"
      >
        LINK 1
      </a>
      <a
        className={bem('link')}
        href="/"
      >
        LINK 2
      </a>
      <a
        className={bem('link')}
        href="/"
      >
        LINK 3
      </a>
    </div>
    <div className={bem('link-column')}>
      <a
        className={bem('link', 'main')}
        href="/"
      >
        LINK
      </a>
      <a
        className={bem('link')}
        href="/"
      >
        LINK 1
      </a>
      <a
        className={bem('link')}
        href="/"
      >
        LINK 2
      </a>
      <a
        className={bem('link')}
        href="/"
      >
        LINK 3
      </a>
    </div>
    <div className={bem('link-column')}>
      <a
        className={bem('link', 'main')}
        href="/"
      >
        LINK
      </a>
      <a
        className={bem('link')}
        href="/"
      >
        LINK 1
      </a>
      <a
        className={bem('link')}
        href="/"
      >
        LINK 2
      </a>
      <a
        className={bem('link')}
        href="/"
      >
        LINK 3
      </a>
    </div>
    <div className={bem('contact-column')}>
      <div className={bem('contact-title')}>CONTACT</div>
      <div className={bem('contact-subtitle')}>Want to get in touch? Here&#39;s how you can reach me.</div>
      <div className={bem('contact-options')}>
        <a
          className={bem('contact-option')}
          href={Link.LinkedIn}
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinVariant1 />
        </a>
        <a
          className={bem('contact-option')}
          href={Link.GitHub}
          target="_blank"
          rel="noreferrer"
        >
          <GitHubVariant1 />
        </a>
        <a
          className={bem('contact-option')}
          href={Link.Facebook}
          target="_blank"
          rel="noreferrer"
        >
          <FacebookVariant1 />
        </a>
        <a
          className={bem('contact-option')}
          href={Link.Instagram}
          target="_blank"
          rel="noreferrer"
        >
          <InstagramVariant1 />
        </a>
        <a
          className={bem('contact-option')}
          href={Link.Twitter}
          target="_blank"
          rel="noreferrer"
        >
          <TwitterVariant1 />
        </a>
      </div>
    </div>
  </div>
);

export default AppHeader;
