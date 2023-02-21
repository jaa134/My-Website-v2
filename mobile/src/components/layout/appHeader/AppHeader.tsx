import 'src/components/layout/appHeader/AppHeader.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import { RouteName } from 'src/constants/common';
import defineBlock from 'src/utils/defineBlock';
import { useScrollPosition } from 'src/utils/hooks';

import Button from 'src/components/common/button/Button';
import MyLogoVariant1 from 'src/components/icons/logos/personal/MyLogoVariant1';

const bem = defineBlock('AppHeader');

const AppHeader = () => {
  const scrollPosition = useScrollPosition();
  return (
    <div className={bem('', { detached: scrollPosition >= 32 })}>
      <div className={bem('background')} />
      <div className={bem('logo')}>
        <MyLogoVariant1 />
        <div className="monospace">J.Alspaw</div>
      </div>
      <div className={bem('navigation')}>
        <Link
          className={bem('nav-link')}
          to={RouteName.Home}
        >
          Home
        </Link>
        <Link
          className={bem('nav-link')}
          to={RouteName.About}
        >
          About Me
        </Link>
        <Link
          className={bem('nav-link')}
          to={RouteName.Experience}
        >
          Experience
        </Link>
        <Link
          className={bem('nav-link')}
          to={RouteName.Contact}
        >
          Contact
        </Link>
      </div>
      <div className={bem('contact')}>
        <Link to={RouteName.Contact}>
          <Button
            size="large"
            type="outlined"
            color="white"
            label="Let's Work Together"
          />
        </Link>
      </div>
    </div>
  );
};

export default AppHeader;
