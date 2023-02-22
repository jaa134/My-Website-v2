import 'src/components/pages/contactPage/socialsSection/SocialsSection.scss';

import React from 'react';

import { Handle, Link } from 'src/constants/common';
import defineBlock from 'src/utils/defineBlock';

import FacebookVariant1 from 'src/components/icons/logos/socials/FacebookVariant1';
import GitHubVariant1 from 'src/components/icons/logos/socials/GitHubVariant1';
import InstagramVariant1 from 'src/components/icons/logos/socials/InstagramVariant1';
import LinkedinVariant1 from 'src/components/icons/logos/socials/LinkedinVariant1';
import TwitterVariant1 from 'src/components/icons/logos/socials/TwitterVariant1';

const bem = defineBlock('SocialsSection');

const SocialsSection = () => (
  <div className={bem()}>
    <div className={bem('title')}>
      Social Media<span className={bem('symbol')}>&#123;</span>
    </div>
    <div className={bem('socials')}>
      <div className={bem('item-container')}>
        <a
          className={bem('item', 'linkedin')}
          href={Link.LinkedIn}
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinVariant1 />
          <div className={bem('handle')}>{Handle.LinkedIn}</div>
        </a>
      </div>
      <div className={bem('item-container')}>
        <a
          className={bem('item', 'github')}
          href={Link.GitHub}
          target="_blank"
          rel="noreferrer"
        >
          <GitHubVariant1 />
          <div className={bem('handle')}>{Handle.GitHub}</div>
        </a>
      </div>
      <div className={bem('item-container')}>
        <a
          className={bem('item', 'facebook')}
          href={Link.Facebook}
          target="_blank"
          rel="noreferrer"
        >
          <FacebookVariant1 />
          <div className={bem('handle')}>{Handle.Facebook}</div>
        </a>
      </div>
      <div className={bem('item-container')}>
        <a
          className={bem('item', 'instagram')}
          href={Link.Instagram}
          target="_blank"
          rel="noreferrer"
        >
          <InstagramVariant1 />
          <div className={bem('handle')}>{Handle.Instagram}</div>
        </a>
      </div>
      <div className={bem('item-container')}>
        <a
          className={bem('item', 'twitter')}
          href={Link.Twitter}
          target="_blank"
          rel="noreferrer"
        >
          <TwitterVariant1 />
          <div className={bem('handle')}>{Handle.Twitter}</div>
        </a>
      </div>
    </div>
  </div>
);

export default SocialsSection;
