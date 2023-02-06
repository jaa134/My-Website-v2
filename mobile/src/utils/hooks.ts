import { useCallback, useEffect, useState } from 'react';

export function useEventListener(element: Window, type: keyof WindowEventMap, listener: EventListener): void;
export function useEventListener(element: HTMLElement, type: keyof HTMLElementEventMap, listener: EventListener): void;

export function useEventListener(
  element: Window | HTMLElement,
  type: keyof WindowEventMap | keyof HTMLElementEventMap,
  listener: EventListener,
) {
  useEffect(() => {
    if (!element) {
      return undefined;
    }
    element.addEventListener(type, listener);
    return () => {
      element.removeEventListener(type, listener);
    };
  }, [element, type, listener]);
}

export function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const callback = () => setWindowWidth(window.innerWidth);
  const getWindowWidth = useCallback(callback, []);
  useEventListener(window, 'resize', getWindowWidth);
  return windowWidth;
}

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const callback = () => setScrollPosition(window.pageYOffset);
  const getScrollPosition = useCallback(callback, []);
  useEventListener(window, 'scroll', getScrollPosition);
  return scrollPosition;
}
