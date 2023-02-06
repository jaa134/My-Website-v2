import 'src/components/layout/appHeader/AppHeader.scss';

import defineBlock from 'src/utils/defineBlock';
import { useScrollPosition } from 'src/utils/hooks';

import Button from 'src/components/common/button/Button';
import LogoVariant1 from 'src/components/icons/logos/LogoVariant1';

const bem = defineBlock('AppHeader');

export default function () {
  const scrollPosition = useScrollPosition();
  return (
    <div className={bem('', { detached: scrollPosition >= 32 })}>
      <div className={bem('background')}></div>
      <div className={bem('logo')}>
        <LogoVariant1></LogoVariant1>
        <div className="monospace">J.Alspaw</div>
      </div>
      <div className={bem('navigation')}>
        <div className={bem('nav-link')}>Home</div>
        <div className={bem('nav-link')}>About Me</div>
        <div className={bem('nav-link')}>Experience</div>
        <div className={bem('nav-link')}>Contact</div>
      </div>
      <div className={bem('contact')}>
        <Button
          size="large"
          type="outlined"
          color="white"
        >
          Let's Work Together
        </Button>
      </div>
    </div>
  );
}
