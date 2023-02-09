import 'src/components/pages/contactPage/formSection/FormSection.scss';

import React from 'react';

import defineBlock from 'src/utils/defineBlock';

import Button from 'src/components/common/button/Button';

const bem = defineBlock('FormSection');

const FormSection = () => (
  <div className={bem()}>
    <div className={bem('title')}>Leave A Message</div>
    <div className={bem('subtitle')}>
      <div>and I&#39;ll get back to you</div>
      <div>ASAP</div>
    </div>
    <div className={bem('form')}>
      <div className={bem('form-row')}>
        <input
          type="text"
          placeholder="Name"
        />
        <input
          type="text"
          placeholder="Email"
        />
        <input
          type="text"
          placeholder="Phone"
        />
      </div>
      <div className={bem('form-row')}>
        <textarea rows={10} />
      </div>
    </div>
    <Button
      size="medium"
      type="filled"
      label="Send"
    />
  </div>
);

export default FormSection;
