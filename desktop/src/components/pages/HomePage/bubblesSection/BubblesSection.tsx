import 'src/components/pages/homePage/bubblesSection/BubblesSection.scss';

import React, { useState } from 'react';

import defineBlock from 'src/utils/defineBlock';

import LogoBubble from 'src/components/common/logoBubble/LogoBubble';
import Angular from 'src/components/icons/logos/tech/Angular';
import ReactJS from 'src/components/icons/logos/tech/ReactJS';
import Vue from 'src/components/icons/logos/tech/Vue';
import GraphQL from 'src/components/icons/logos/tech/GraphQL';
import Git from 'src/components/icons/logos/tech/Git';
import JavaScript from 'src/components/icons/logos/tech/JavaScript';
import CSS from 'src/components/icons/logos/tech/CSS';
import HTML from 'src/components/icons/logos/tech/HTML';
import Jest from 'src/components/icons/logos/tech/Jest';
import TypeScript from 'src/components/icons/logos/tech/TypeScript';
import Java from 'src/components/icons/logos/tech/Java';
import Sass from 'src/components/icons/logos/tech/Sass';
import Jira from 'src/components/icons/logos/tech/Jira';

const bem = defineBlock('BubblesSection');

type BubbleData = {
  id: string;
  size: 's1' | 's2' | 's3' | 's4' | 's5';
  active: boolean;
  logo: React.ReactElement;
};

const BubblesSection = () => {
  const [bubbles, setBubbles] = useState<readonly BubbleData[]>([
    {
      id: 'bubble-1',
      size: 's3',
      active: false,
      logo: <TypeScript />,
    },
    {
      id: 'bubble-2',
      size: 's1',
      active: false,
      logo: <Angular />,
    },
    {
      id: 'bubble-3',
      size: 's4',
      active: false,
      logo: <CSS />,
    },
    {
      id: 'bubble-4',
      size: 's2',
      active: false,
      logo: <GraphQL />,
    },
    {
      id: 'bubble-5',
      size: 's5',
      active: false,
      logo: <HTML />,
    },
    {
      id: 'bubble-6',
      size: 's1',
      active: false,
      logo: <Jest />,
    },
    {
      id: 'bubble-7',
      size: 's5',
      active: false,
      logo: <JavaScript />,
    },
    {
      id: 'bubble-8',
      size: 's4',
      active: false,
      logo: <Vue />,
    },
    {
      id: 'bubble-9',
      size: 's2',
      active: false,
      logo: <Git />,
    },
    {
      id: 'bubble-10',
      size: 's2',
      active: false,
      logo: <Jira />,
    },
    {
      id: 'bubble-11',
      size: 's4',
      active: false,
      logo: <ReactJS />,
    },
    {
      id: 'bubble-12',
      size: 's1',
      active: false,
      logo: <Java />,
    },
    {
      id: 'bubble-13',
      size: 's3',
      active: false,
      logo: <Sass />,
    },
  ]);

  const toggleActive = (activeBubble: BubbleData) => {
    const newBubbles = [...bubbles];
    newBubbles.forEach((currentBubble) => {
      currentBubble.active = !currentBubble.active && currentBubble.id === activeBubble.id;
    });
    setBubbles(newBubbles);
  };

  return (
    <div className={bem()}>
      <div className={bem('container')}>
        {bubbles.map((bubble) => (
          <LogoBubble
            key={bubble.id}
            size={bubble.size}
            active={bubble.active}
            onClick={() => toggleActive(bubble)}
          >
            {bubble.logo}
          </LogoBubble>
        ))}
      </div>
    </div>
  );
};

export default BubblesSection;
