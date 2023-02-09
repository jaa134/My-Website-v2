import 'src/components/pages/homePage/bubblesSection/BubblesSection.scss';

import React from 'react';

import defineBlock from 'src/utils/defineBlock';

import LogoBubble from 'src/components/common/logoBubble/LogoBubble';
import Angular from 'src/components/icons/logos/tech/Angular';
import ReactJS from 'src/components/icons/logos/tech/ReactJS';
import Vue from 'src/components/icons/logos/tech/Vue';
import GraphQL from 'src/components/icons/logos/tech/GraphQL';
import Git from 'src/components/icons/logos/tech/Git';
import Javascript from 'src/components/icons/logos/tech/Javascript';
import CSS from 'src/components/icons/logos/tech/CSS';
import HTML from 'src/components/icons/logos/tech/HTML';
import Jest from 'src/components/icons/logos/tech/Jest';

const bem = defineBlock('BubblesSection');

const BubblesSection = () => (
  <div className={bem()}>
    <LogoBubble
      size="s3"
      active={false}
    >
      <ReactJS />
    </LogoBubble>
    <LogoBubble
      size="s1"
      active={false}
    >
      <Angular />
    </LogoBubble>
    <LogoBubble
      size="s4"
      active={false}
    >
      <CSS />
    </LogoBubble>
    <LogoBubble
      size="s2"
      active={false}
    >
      <GraphQL />
    </LogoBubble>
    <LogoBubble
      size="s5"
      active={false}
    >
      <HTML />
    </LogoBubble>
    <LogoBubble
      size="s1"
      active={false}
    >
      <Jest />
    </LogoBubble>
    <LogoBubble
      size="s5"
      active={false}
    >
      <Javascript />
    </LogoBubble>
    <LogoBubble
      size="s4"
      active={false}
    >
      <Vue />
    </LogoBubble>
    <LogoBubble
      size="s2"
      active={false}
    >
      <Git />
    </LogoBubble>
  </div>
);

export default BubblesSection;
