import 'src/components/layout/appHeader/AppHeader.scss';

import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { RouteName } from 'src/constants/common';
import defineBlock from 'src/utils/defineBlock';

import MyLogoVariant1 from 'src/components/icons/logos/personal/MyLogoVariant1';
import Close from 'src/components/icons/general/Close';

const bem = defineBlock('AppHeader');

const AppHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { pathname } = useLocation();
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <div className={bem()}>
      <div className={bem('menu', { open: isMenuOpen })}>
        <button
          className={bem('menu-button')}
          onClick={toggleMenuOpen}
        >
          <div></div>
          <div></div>
          <div></div>
        </button>
        <div
          className={bem('menu-backdrop')}
          onClick={toggleMenuOpen}
        ></div>
        <div className={bem('menu-navigation')}>
          <button
            className={bem('menu-close')}
            onClick={toggleMenuOpen}
          >
            <Close />
          </button>
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
      </div>
      <div className={bem('logo')}>
        <MyLogoVariant1 />
        <div className="monospace">J.Alspaw</div>
      </div>
    </div>
  );
};

export default AppHeader;
