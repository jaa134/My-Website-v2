import 'src/components/pages/homePage/bubblesSection/BubblesSection.scss';

import React from 'react';

import defineBlock from 'src/utils/defineBlock';
import LogoBubble from 'src/components/common/logoBubble/LogoBubble';

const bem = defineBlock('BubblesSection');

const BubblesSection = () => (
  <div className={bem()}>
    <LogoBubble
      size={'s3'}
      active={false}
    />
    <LogoBubble
      size={'s1'}
      active={false}
    />
    <LogoBubble
      size={'s4'}
      active={false}
    />
    <LogoBubble
      size={'s2'}
      active={false}
    />
    <LogoBubble
      size={'s5'}
      active={false}
    />
    <LogoBubble
      size={'s1'}
      active={false}
    />
    <LogoBubble
      size={'s5'}
      active={false}
    />
    <LogoBubble
      size={'s4'}
      active={false}
    />
    <LogoBubble
      size={'s2'}
      active={false}
    />
  </div>
);

export default BubblesSection;
