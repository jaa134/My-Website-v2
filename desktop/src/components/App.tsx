import 'src/scss/common.scss';
import 'src/components/App.scss';

import React from 'react';

import defineBlock from 'src/utils/defineBlock';

import AppHeader from 'src/components/layout/appHeader/AppHeader';
import AppFooter from 'src/components/layout/appFooter/AppFooter';

const bem = defineBlock('App');

const App = () => (
  <div className={bem()}>
    <div className={bem('content')}>
      <div className={bem('header')}>
        <AppHeader />
      </div>
      <div className={bem('body')} />
      <div className={bem('footer')}>
        <AppFooter />
      </div>
    </div>
  </div>
);

export default App;
