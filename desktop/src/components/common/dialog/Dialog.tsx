import 'src/components/common/dialog/Dialog.scss';

import PropTypes from 'prop-types';
import React, { FunctionComponent, MouseEventHandler, ReactElement } from 'react';
import { createPortal } from 'react-dom';

import defineBlock from 'src/utils/css';

import Button from 'src/components/common/button/Button';
import Close from 'src/components/icons/general/Close';

const bem = defineBlock('Dialog');

type Props = {
  open: boolean;
  title: string;
  children: ReactElement;
  primaryAction?: {
    label: string;
    href?: string | null;
    onClick?: MouseEventHandler<HTMLElement> | null;
  } | null;
  onClose: MouseEventHandler<HTMLElement>;
};

const Dialog: FunctionComponent<Props> = ({ open, title, children, primaryAction = null, onClose }) => {
  if (!open) {
    return null;
  }

  let primaryActionButton: ReactElement | null = null;
  if (primaryAction) {
    primaryActionButton = (
      <Button
        type="filled"
        color="purple"
        label={primaryAction.label}
        {...(primaryAction.onClick && { onClick: primaryAction.onClick })}
      />
    );
    if (primaryAction.href) {
      primaryActionButton = (
        <a
          href={primaryAction.href}
          target="_blank"
          rel="noreferrer"
        >
          {primaryActionButton}
        </a>
      );
    }
  }

  return createPortal(
    <div
      className={bem('wrapper')}
      onClick={onClose}
    >
      <div
        className={bem()}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div
          className={bem('close')}
          onClick={onClose}
        >
          <Close />
        </div>
        <div className={bem('header')}>
          <div className={bem('title')}>{title}</div>
        </div>
        <div className={bem('body')}>{children}</div>
        <div className={bem('footer')}>
          <Button
            type="outlined"
            color="white"
            label="Close"
            onClick={onClose}
          />
          {primaryActionButton}
        </div>
      </div>
    </div>,
    document.body,
  );
};

Dialog.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  primaryAction: PropTypes.shape({
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    onClick: PropTypes.func,
  }),
  onClose: PropTypes.func.isRequired,
};

export default Dialog;
