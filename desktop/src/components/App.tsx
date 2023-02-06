import 'src/scss/common.scss';
import 'src/components/App.scss';

import AppHeader from 'src/components/layout/appHeader/AppHeader';

import defineBlock from 'src/utils/defineBlock';

const bem = defineBlock('App');

export default function () {
  return (
    <div className={bem()}>
      <div className={bem('content')}>
        <div className={bem('header')}>
          <AppHeader></AppHeader>
        </div>
        <div className={bem('body')}></div>
      </div>
    </div>
  );
}
