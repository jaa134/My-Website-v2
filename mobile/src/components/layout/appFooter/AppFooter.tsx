import 'src/components/layout/appFooter/AppFooter.scss';

import React from 'react';

import { Link } from 'src/constants/common';
import defineBlock from 'src/utils/defineBlock';

import MyLogoVariant2 from 'src/components/icons/logos/personal/MyLogoVariant2';
import FacebookVariant1 from 'src/components/icons/logos/socials/FacebookVariant1';
import GitHubVariant1 from 'src/components/icons/logos/socials/GitHubVariant1';
import InstagramVariant1 from 'src/components/icons/logos/socials/InstagramVariant1';
import LinkedinVariant1 from 'src/components/icons/logos/socials/LinkedinVariant1';
import TwitterVariant1 from 'src/components/icons/logos/socials/TwitterVariant1';

const bem = defineBlock('AppFooter');

const AppHeader = () => (
  <div className={bem()}>
    <div className={bem('container')}>
      <div className={bem('links')}>
        <div className={bem('link-column')}>
          <a
            className={bem('link', 'main')}
            href="https://github.com/jaa134?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            REPOS
          </a>
          <a
            className={bem('link')}
            href="https://legacy.jacob-alspaw.com"
            target="_blank"
            rel="noreferrer"
          >
            Legacy Website
          </a>
          <a
            className={bem('link')}
            href="https://wordgames.jacob-alspaw.com/"
            target="_blank"
            rel="noreferrer"
          >
            Word Games
          </a>
          <a
            className={bem('link')}
            href="https://planetplanner.jacob-alspaw.com/"
            target="_blank"
            rel="noreferrer"
          >
            Planet Planner
          </a>
        </div>
        <div className={bem('link-column')}>
          <a
            className={bem('link', 'main')}
            href="https://blog.feedspot.com/programming_blogs/"
            target="_blank"
            rel="noreferrer"
          >
            BLOGS
          </a>
          <a
            className={bem('link')}
            href="https://frontendweekly.co/"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Weekly
          </a>
          <a
            className={bem('link')}
            href="https://stackoverflow.com/questions/tagged/frontend"
            target="_blank"
            rel="noreferrer"
          >
            Stack Overflow
          </a>
          <a
            className={bem('link')}
            href="https://www.reddit.com/r/programming/"
            target="https://www.reddit.com/r/programming/"
          >
            Reddit
          </a>
        </div>
        <div className={bem('link-column')}>
          <a
            className={bem('link', 'main')}
            href="https://www.google.com/search?q=Jacob+Alspaw&tbm=nws"
            target="_blank"
            rel="noreferrer"
          >
            NEWS
          </a>
          <a
            className={bem('link')}
            href="https://mdc.mo.gov/newsroom/mdc-opens-first-public-outdoor-rock-climbing-bluff-st-louis-area-rockwoods-reservation"
            target="_blank"
            rel="noreferrer"
          >
            MDC Climb
          </a>
          <a
            className={bem('link')}
            href="https://athletics.case.edu/sports/mswimdive/2014-15/bios/alspaw_jacob_y49p"
            target="_blank"
            rel="noreferrer"
          >
            College Swim
          </a>
          <a
            className={bem('link')}
            href="https://www.newsmagazinenetwork.com/nn/2013052235407/rockwood-swim-club-places-11th-at-open-water-festival/"
            target="_blank"
            rel="noreferrer"
          >
            Open Water
          </a>
        </div>
      </div>
      <div className={bem('contacts')}>
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
      <div className={bem('rights')}>
        <div className={bem('rights-bar')}></div>
        <div className={bem('rights-message')}>All rights reserved to Jacob Alspaw 2023</div>
      </div>
      <div className={bem('logo')}>
        <MyLogoVariant2 />
      </div>
    </div>
  </div>
);

export default AppHeader;
