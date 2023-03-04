import 'src/scss/notification.scss';

import defineBlock from 'src/utils/css';

const CONTAINER_ID = 'notifyContainer';

const bem = defineBlock('Notification');

const createContainer = () => {
  let element = document.getElementById(CONTAINER_ID);

  if (element) {
    return element;
  }

  element = document.createElement('div');
  element.setAttribute('id', CONTAINER_ID);
  element.setAttribute('class', bem('container'));

  document.body.appendChild(element);

  return element;
};

const notify = (message: string, timeout = 5000, animationDuration = 1000) => {
  const container = createContainer();

  const notificationEl = document.createElement('div');
  notificationEl.setAttribute('class', bem());
  notificationEl.style.setProperty('transition-duration', `${animationDuration}ms`);

  const messageEl = document.createElement('div');
  messageEl.setAttribute('class', bem('message'));
  messageEl.innerText = message;

  const closeEl = document.createElement('div');
  closeEl.setAttribute('class', bem('close'));
  closeEl.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>';

  notificationEl.appendChild(messageEl);
  notificationEl.appendChild(closeEl);
  container.appendChild(notificationEl);

  const close = () => {
    notificationEl.setAttribute('class', bem('', 'closed'));
    setTimeout(() => {
      container.removeChild(notificationEl);
    }, animationDuration);
  };

  const autoCloseTimeout = setTimeout(() => {
    close();
  }, timeout);

  closeEl.addEventListener('click', () => {
    clearTimeout(autoCloseTimeout);
    close();
  });
};

export default notify;
