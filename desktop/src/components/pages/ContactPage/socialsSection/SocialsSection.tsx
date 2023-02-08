import 'src/components/pages/contactPage/socialsSection/SocialsSection.scss';

import React from 'react';

import defineBlock from 'src/utils/defineBlock';
import FacebookVariant1 from 'src/components/icons/logos/FacebookVariant1';
import { Handle, Link } from 'src/utils/constants';
import InstagramVariant1 from 'src/components/icons/logos/InstagramVariant1';
import GitHubVariant1 from 'src/components/icons/logos/GitHubVariant1';
import LinkedinVariant1 from 'src/components/icons/logos/LinkedinVariant1';
import TwitterVariant1 from 'src/components/icons/logos/TwitterVariant1';

const bem = defineBlock('SocialsSection');

const SocialsSection = () => {
  return (
    <div className={bem()}>
      <div className={bem('container')}>
        <div className={bem('title')}>
          Social Media<span className={bem('symbol')}>&#123;</span>
        </div>
        <div className={bem('socials')}>
          <div className={bem('item-container')}>
            <a
              className={bem('item', 'linkedin')}
              href={Link.LinkedIn}
              target="_blank"
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
            >
              <TwitterVariant1 />
              <div className={bem('handle')}>{Handle.Twitter}</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialsSection;
