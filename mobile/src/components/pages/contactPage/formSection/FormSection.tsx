import 'src/components/pages/contactPage/formSection/FormSection.scss';

import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import defineBlock from 'src/utils/css';
import notify from 'src/utils/notificatons';

import Button from 'src/components/common/button/Button';
import LoadingSpinner from 'src/components/common/loadingSpinner/LoadingSpinner';

const bem = defineBlock('FormSection');

/*
  Uses EmailJS and reCaptcha to send emails. Can send up to 200 
  emails per month and EmailJS supports rate limiting by IP to 
  avoid bot spam. Titan has been setup in EmailJS profile as a
  email service from which to send/recieve mail. Auto-reply emails
  may be set up for the template on EmailJS. Auto-reply emails 
  will count as an additional email towards the free email quota.
*/

const EMAILJS_SERVICE_ID = 'service_f6vq4q1';
const EMAILJS_TEMPLATE_ID = 'template_stiymyn';
const EMAILJS_PUBLIC_KEY = 'tHKpunSrvx009HOfP';

const RECAPTCHA_SITE_KEY = '6Ldf9YYkAAAAAPP_-PKo0jycyXU-yrgkdz1SCl8Q';

// Per the W3C HTML5 specification
// https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address
const EMAIL_VALIDATION_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

const PHONE_VALIDATION_REGEX = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;

type EmailData = {
  from_name: string;
  contact_email: string;
  contact_phone: string;
  message: string;
  'g-recaptcha-response': string | null;
};

const FormSection = () => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const nameInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const phoneInput = useRef<HTMLInputElement>(null);
  const messageTextArea = useRef<HTMLTextAreaElement>(null);

  const [isLoading, setLoading] = useState(false);

  const [isNameValid, setNameValid] = useState(true);
  const [isEmailValid, setEmailValid] = useState(true);
  const [isPhoneValid, setPhoneValid] = useState(true);
  const [isMessageValid, setMessageValid] = useState(true);

  const validateForm = (emailData: EmailData) => {
    const nameValid = !!emailData.from_name;
    const emailValid = EMAIL_VALIDATION_REGEX.test(emailData.contact_email);
    const phoneValid = PHONE_VALIDATION_REGEX.test(emailData.contact_phone);
    const messageValid = !!emailData.message;

    setNameValid(nameValid);
    setEmailValid(emailValid);
    setPhoneValid(phoneValid);
    setMessageValid(messageValid);

    return nameValid && emailValid && phoneValid && messageValid;
  };

  const resetForm = () => {
    if (nameInput.current && emailInput.current && phoneInput.current && messageTextArea.current) {
      nameInput.current.value = '';
      emailInput.current.value = '';
      phoneInput.current.value = '';
      messageTextArea.current.value = '';
    }

    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
  };

  const sendEmail = () => {
    if (!nameInput.current || !emailInput.current || !phoneInput.current || !messageTextArea.current) {
      notify('Form not found!');
      return;
    }

    const emailData: EmailData = {
      from_name: nameInput.current.value,
      contact_email: emailInput.current.value,
      contact_phone: phoneInput.current.value,
      message: messageTextArea.current.value,
      'g-recaptcha-response': null,
    };

    if (!validateForm(emailData)) {
      notify('Form validation failed!');
      return;
    }

    if (!recaptchaRef.current) {
      notify('Could not perform CAPTCHA test!');
      return;
    }

    setLoading(true);

    const onCaptchaTestSuccess = (captchaResponse: string | null) => {
      emailData['g-recaptcha-response'] = captchaResponse;
      emailjs
        .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, emailData, EMAILJS_PUBLIC_KEY)
        .then(
          () => {
            notify('Your email was sent to me!');
            resetForm();
          },
          (error) => {
            notify('Failed to send email!');
            console.error(error);
          },
        )
        .finally(() => {
          setLoading(false);
        });
    };

    const onCaptchaTestError = (error: unknown) => {
      notify('Failed CAPTCHA test!');
      console.error(error);
      setLoading(false);
    };

    recaptchaRef.current.executeAsync().then(onCaptchaTestSuccess, onCaptchaTestError);
  };

  return (
    <div className={bem()}>
      <div className={bem('title')}>Leave a Message</div>
      <div className={bem('subtitle')}>and I&#39;ll get back to you ASAP</div>
      <div className={bem('form')}>
        {isLoading && (
          <div className={bem('form-loader')}>
            <LoadingSpinner />
          </div>
        )}
        <div className={bem('form-row')}>
          <input
            ref={nameInput}
            className={bem('form-element', { invalid: !isNameValid })}
            type="text"
            placeholder="Name"
            autoComplete="nope"
            disabled={isLoading}
          />
          <input
            ref={emailInput}
            className={bem('form-element', { invalid: !isEmailValid })}
            type="text"
            placeholder="Email"
            autoComplete="nope"
            disabled={isLoading}
          />
          <input
            ref={phoneInput}
            className={bem('form-element', { invalid: !isPhoneValid })}
            type="text"
            placeholder="Phone"
            autoComplete="nope"
            disabled={isLoading}
          />
        </div>
        <div className={bem('form-row')}>
          <textarea
            ref={messageTextArea}
            className={bem('form-element', { invalid: !isMessageValid })}
            rows={10}
            autoComplete="nope"
            disabled={isLoading}
          />
        </div>
        <div className={bem('form-row')}>
          <Button
            size="medium"
            type="filled"
            disabled={isLoading}
            label="Send"
            onClick={sendEmail}
          />
        </div>
      </div>
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey={RECAPTCHA_SITE_KEY}
      />
    </div>
  );
};

export default FormSection;
