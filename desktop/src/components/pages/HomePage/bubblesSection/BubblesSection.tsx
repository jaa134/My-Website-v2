import 'src/components/pages/homePage/bubblesSection/BubblesSection.scss';

import React, { ReactElement, useState } from 'react';

import defineBlock from 'src/utils/defineBlock';

import LogoBubble from 'src/components/common/logoBubble/LogoBubble';
import Angular from 'src/components/icons/logos/tech/Angular';
import CSS from 'src/components/icons/logos/tech/CSS';
import Git from 'src/components/icons/logos/tech/Git';
import GraphQL from 'src/components/icons/logos/tech/GraphQL';
import HTML from 'src/components/icons/logos/tech/HTML';
import Java from 'src/components/icons/logos/tech/Java';
import JavaScript from 'src/components/icons/logos/tech/JavaScript';
import Jest from 'src/components/icons/logos/tech/Jest';
import Jira from 'src/components/icons/logos/tech/Jira';
import NPM from 'src/components/icons/logos/tech/NPM';
import ReactJS from 'src/components/icons/logos/tech/ReactJS';
import Sass from 'src/components/icons/logos/tech/Sass';
import TypeScript from 'src/components/icons/logos/tech/TypeScript';
import Vite from 'src/components/icons/logos/tech/Vite';
import Vue from 'src/components/icons/logos/tech/Vue';
import Webpack from 'src/components/icons/logos/tech/Webpack';

const bem = defineBlock('BubblesSection');

type BubbleData = {
  id: string;
  logo: ReactElement;
  size: 's1' | 's2' | 's3' | 's4' | 's5';
  menuPosition: 'left' | 'right';
  values: {
    knowledge: number;
    experience: number;
  };
}

const BubblesSection = () => {
  const [activeBubble, setActiveBubble] = useState<BubbleData | null>(null);

  const toggleActiveBubble = (bubble: BubbleData) => {
    const newActiveBubble = bubble.id === activeBubble?.id ? null : bubble;
    setActiveBubble(newActiveBubble);
  };

  const bubbles: readonly BubbleData[] = [
    {
      id: 'TypeScript',
      logo: <TypeScript />,
      size: 's3',
      menuPosition: 'right',
      values: {
        knowledge: 90,
        experience: 80,
      },
    },
    {
      id: 'Angular',
      logo: <Angular />,
      size: 's1',
      menuPosition: 'left',
      values: {
        knowledge: 40,
        experience: 20,
      },
    },
    {
      id: 'CSS',
      logo: <CSS />,
      size: 's4',
      menuPosition: 'right',
      values: {
        knowledge: 100,
        experience: 100,
      },
    },
    {
      id: 'GraphQL',
      logo: <GraphQL />,
      size: 's2',
      menuPosition: 'left',
      values: {
        knowledge: 80,
        experience: 80,
      },
    },
    {
      id: 'HTML',
      logo: <HTML />,
      size: 's5',
      menuPosition: 'left',
      values: {
        knowledge: 100,
        experience: 100,
      },
    },
    {
      id: 'Jest',
      logo: <Jest />,
      size: 's1',
      menuPosition: 'right',
      values: {
        knowledge: 90,
        experience: 90,
      },
    },
    {
      id: 'JavaScript',
      logo: <JavaScript />,
      size: 's5',
      menuPosition: 'left',
      values: {
        knowledge: 90,
        experience: 80,
      },
    },
    {
      id: 'Vue',
      logo: <Vue />,
      size: 's4',
      menuPosition: 'right',
      values: {
        knowledge: 90,
        experience: 70,
      },
    },
    {
      id: 'Git',
      logo: <Git />,
      size: 's2',
      menuPosition: 'left',
      values: {
        knowledge: 90,
        experience: 90,
      },
    },
    {
      id: 'Jira',
      logo: <Jira />,
      size: 's2',
      menuPosition: 'right',
      values: {
        knowledge: 90,
        experience: 90,
      },
    },
    {
      id: 'ReactJS',
      logo: <ReactJS />,
      size: 's4',
      menuPosition: 'right',
      values: {
        knowledge: 80,
        experience: 70,
      },
    },
    {
      id: 'Java',
      logo: <Java />,
      size: 's1',
      menuPosition: 'left',
      values: {
        knowledge: 70,
        experience: 80,
      },
    },
    {
      id: 'Sass',
      logo: <Sass />,
      size: 's3',
      menuPosition: 'left',
      values: {
        knowledge: 100,
        experience: 100,
      },
    },
    {
      id: 'Vite',
      logo: <Vite />,
      size: 's1',
      menuPosition: 'left',
      values: {
        knowledge: 60,
        experience: 30,
      },
    },
    {
      id: 'Webpack',
      logo: <Webpack />,
      size: 's1',
      menuPosition: 'left',
      values: {
        knowledge: 80,
        experience: 80,
      },
    },
    {
      id: 'NPM',
      logo: <NPM />,
      size: 's1',
      menuPosition: 'left',
      values: {
        knowledge: 70,
        experience: 80,
      },
    },
  ];

  return (
    <div className={bem()}>
      <div className={bem('header')}>
        <div className={bem('title')}>Skills</div>
        <div className={bem('subtitle', '1')}>Programming Languages /</div>
        <div className={bem('subtitle', '2')}>Technical Expertise /</div>
        <div className={bem('bar')} />
      </div>
      <div className={bem('background')} />
      <div className={bem('container')}>
        {bubbles.map((bubble) => (
          <LogoBubble
            key={bubble.id}
            size={bubble.size}
            menuPositon={bubble.menuPosition}
            values={bubble.values}
            active={bubble.id === activeBubble?.id}
            onClick={() => toggleActiveBubble(bubble)}
          >
            {bubble.logo}
          </LogoBubble>
        ))}
      </div>
    </div>
  );
};

export default BubblesSection;
