import 'src/components/layout/lineSplit/LineSplit.scss';

import React from 'react';

import defineBlock from 'src/utils/defineBlock';

const bem = defineBlock('LineSplit');

const LineSplit = () => (
  <div className={bem()}>
    <svg
      viewBox="0 -15 1920 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M-15 46.0848C-15 46.0848 134.092 28.6835 230 29.0848C320.454 29.4632 370.546 45.6106 461 46.0848C614.635 46.8901 698.801 -9.01449 852 2.58477C918.422 7.61384 954.389 20.9262 1020.5 29.0848C1100.23 38.9237 1145.17 46.6256 1225.5 46.0848C1299.8 45.5845 1340.79 25.3823 1415 29.0848C1493.56 33.0042 1534.17 61.472 1612.5 68.5848C1732.22 79.4554 1919.5 46.0848 1919.5 46.0848" />
    </svg>
  </div>
);

export default LineSplit;
