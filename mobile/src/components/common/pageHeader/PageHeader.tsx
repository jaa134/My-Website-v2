import 'src/components/common/pageHeader/PageHeader.scss';

import PropTypes from 'prop-types';
import React, { FunctionComponent, useState } from 'react';

import defineBlock from 'src/utils/defineBlock';

import Star from 'src/components/icons/general/Star';

const bem = defineBlock('PageHeader');

interface Props {
  title: string;
  subtitle: string;
  description: string;
}

const PageHeader: FunctionComponent<Props> = ({ title, subtitle, description }) => {
  const [position] = useState(Math.ceil(Math.random() * 2));

  return (
    <div className={bem('', `pos-${position}`)}>
      <div className={bem('container')}>
        <div className={bem('title')}>
          <Star />
          <Star />
          <div>{title}</div>
        </div>
        <div className={bem('subtitle')}>{subtitle}</div>
        <div className={bem('description')}>{description}</div>
      </div>
    </div>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PageHeader;
