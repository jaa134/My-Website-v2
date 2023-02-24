import 'src/scss/common.scss';
import 'src/components/App.scss';

import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import defineBlock from 'src/utils/css';

import AppFooter from 'src/components/layout/appFooter/AppFooter';
import AppHeader from 'src/components/layout/appHeader/AppHeader';
import LazyPage from 'src/components/pages/LazyPage';

import { RouteName } from 'src/constants/common';

const NotFoundPage = lazy(() => import('src/components/pages/notFoundPage/NotFoundPage'));
const HomePage = lazy(() => import('src/components/pages/homePage/HomePage'));
const AboutPage = lazy(() => import('src/components/pages/aboutPage/AboutPage'));
const ContactPage = lazy(() => import('src/components/pages/contactPage/ContactPage'));
const ExperiencePage = lazy(() => import('src/components/pages/experiencePage/ExperiencePage'));

const bem = defineBlock('App');

const App = () => (
  <div className={bem()}>
    <div className={bem('content')}>
      <div className={bem('header')}>
        <AppHeader />
      </div>
      <div className={bem('body')}>
        <Routes>
          <Route
            path={RouteName.NotFound}
            element={
              <LazyPage>
                <NotFoundPage />
              </LazyPage>
            }
          />
          <Route
            path={RouteName.Home}
            element={
              <LazyPage>
                <HomePage />
              </LazyPage>
            }
          />
          <Route
            path={RouteName.About}
            element={
              <LazyPage>
                <AboutPage />
              </LazyPage>
            }
          />
          <Route
            path={RouteName.Experience}
            element={
              <LazyPage>
                <ExperiencePage />
              </LazyPage>
            }
          />
          <Route
            path={RouteName.Contact}
            element={
              <LazyPage>
                <ContactPage />
              </LazyPage>
            }
          />
        </Routes>
      </div>
      <div className={bem('footer')}>
        <AppFooter />
      </div>
    </div>
  </div>
);

export default App;
