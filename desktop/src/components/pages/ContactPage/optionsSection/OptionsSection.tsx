import 'src/components/pages/contactPage/optionsSection/OptionsSection.scss';

import React from 'react';

import defineBlock from 'src/utils/defineBlock';
import { EMAIL_ADDRESS, LOCATION, PHONE_NUMBER } from 'src/utils/constants';
import Phone from 'src/components/icons/general/Phone';
import Email from 'src/components/icons/general/Email';
import Location from 'src/components/icons/general/Location';
import copyText from 'src/utils/textUtils';
import notify from 'src/utils/notificatons';

const bem = defineBlock('OptionsSection');

const OptionsSection = () => {
  const onCopy = async (text: string) => {
    if (await copyText(text)) {
      notify('Copied to clipboard!');
    } else {
      notify('Copying failed!');
    }
  };

  const options = [
    {
      icon: <Phone />,
      label: 'Phone',
      value: PHONE_NUMBER,
    },
    {
      icon: <Email />,
      label: 'Email',
      value: EMAIL_ADDRESS,
    },
    {
      icon: <Location />,
      label: 'In Person',
      value: LOCATION,
    },
  ].map((optionData) => (
    <div
      key={optionData.label}
      className={bem('option')}
    >
      <div
        className={bem('icon')}
        onClick={() => onCopy(optionData.value)}
      >
        {optionData.icon}
      </div>
      <div className={bem('details')}>
        <div className={bem('label')}>{optionData.label}</div>
        <div className={bem('value')}>{optionData.value}</div>
      </div>
    </div>
  ));

  return <div className={bem()}>{options}</div>;
};

export default OptionsSection;