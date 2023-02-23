import 'src/components/pages/homePage/experienceSection/ExperienceSection.scss';

import React, { useCallback, useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import useEmblaCarousel from 'embla-carousel-react';

import defineBlock from 'src/utils/defineBlock';
import numberWithinRange from 'src/utils/mathUtils';

const bem = defineBlock('ExperienceSection');

const TWEEN_FACTOR = 2.5;

const ExperienceSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [tweenValues, setTweenValues] = useState<number[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;

    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      if (!emblaApi.slidesInView().includes(index)) return 0;
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target().get();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);
      return numberWithinRange(tweenValue, 0, 1);
    });
    setTweenValues(styles);
  }, [emblaApi, setTweenValues]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll();
    emblaApi.on('scroll', () => {
      flushSync(() => onScroll());
    });
    emblaApi.on('reInit', onScroll);
  }, [emblaApi, onScroll]);

  return (
    <div className={bem()}>
      <div className={bem('header')}>
        <div className={bem('title')}>What I Do</div>
        <div className={bem('subtitle', '1')}>Project Management /</div>
        <div className={bem('subtitle', '2')}>Front-End Development /</div>
        <div className={bem('bar')} />
      </div>
      <div
        ref={emblaRef}
        className={bem('carousel')}
      >
        <div className={bem('cards')}>
          <div
            className={bem('card')}
            style={{ ...(tweenValues.length && { opacity: tweenValues[0] }) }}
          >
            <div className={bem('bubble-text')}>REACT</div>
            <div className={bem('bubble-text')}>JS</div>
            <div className={bem('bubble-text')}>NODE</div>
            <div className={bem('card-title')}>Software Development</div>
          </div>
          <div
            className={bem('card')}
            style={{ ...(tweenValues.length && { opacity: tweenValues[1] }) }}
          >
            <div className={bem('dev-screen-inner')} />
            <div className={bem('dev-screen-outer')} />
            <div className={bem('card-title')}>Websites & Mobile Apps</div>
          </div>
          <div
            className={bem('card')}
            style={{ ...(tweenValues.length && { opacity: tweenValues[2] }) }}
          >
            <div className={bem('project-grid')}>
              <div className={bem('project-grid-box')} />
              <div className={bem('project-grid-box')} />
              <div className={bem('project-grid-box')} />
              <div className={bem('project-grid-box')} />
              <div className={bem('project-grid-box')} />
              <div className={bem('project-grid-box')} />
              <div className={bem('project-grid-box')} />
            </div>
            <div className={bem('card-title')}>Project Management</div>
          </div>
          <div
            className={bem('card')}
            style={{ ...(tweenValues.length && { opacity: tweenValues[3] }) }}
          >
            <svg
              className={bem('seek-logo')}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <linearGradient
                id="search-shape-gradient"
                x2="0.35"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="rgba(223, 211, 244, 0.728125)"
                />
                <stop
                  offset="60%"
                  stopColor="rgba(131, 76, 230, 0.5)"
                />
              </linearGradient>
              <path
                fill="url('#search-shape-gradient')"
                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
              />
            </svg>
            <div className={bem('card-title')}>Seek Opportunities</div>
          </div>
        </div>
      </div>
      <div className={bem('carousel-buttons')}>
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={bem('carousel-button', { selected: index === selectedIndex })}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
