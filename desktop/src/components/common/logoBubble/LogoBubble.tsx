import 'src/components/common/logoBubble/LogoBubble.scss';

import PropTypes from 'prop-types';
import React, { FunctionComponent, MouseEventHandler, Validator, ReactElement } from 'react';

import defineBlock from 'src/utils/defineBlock';

const bem = defineBlock('LogoBubble');

interface Props {
  size: 's1' | 's2' | 's3' | 's4' | 's5';
  menuPositon: 'left' | 'right';
  values: {
    knowledge: number;
    experience: number;
  };
  active: boolean;
  children: ReactElement;
  onClick: MouseEventHandler<HTMLElement>;
}

const LogoBubble: FunctionComponent<Props> = ({ size, menuPositon, values, active, children, onClick }) => {
  const renderSlider = (label: string, value: number) => (
    <div className={bem('menu-slider', `${value}`)}>
      <style>{`.${bem('menu-slider')}--${value} { --bar-width: ${value}% }`}</style>
      <div className={bem('menu-slider-label')}>{label}</div>
      <div className={bem('menu-slider-value')}>
        <div className={bem('menu-slider-value-inner')}></div>
      </div>
    </div>
  );

  return (
    <div
      className={bem('', size, `menu-${menuPositon}`, { active })}
      onClick={onClick}
    >
      <div className={bem('menu-wrapper')}>
        <div className={bem('menu')}>
          {renderSlider('Knowledge', values.knowledge)}
          {renderSlider('Years of Experience', values.experience)}
        </div>
        <div className={bem('menu-arm', '1')}></div>
        <div className={bem('menu-arm', '2')}></div>
      </div>

      <div className={bem('logo')}>{children}</div>

      <svg
        className={bem('bubble', 'normal')}
        viewBox="0 0 460 534"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(-5 32)">
          <g opacity="0.72">
            <g
              opacity="0.5"
              filter="url(#filter0_f_89_430)"
            >
              <circle
                cx="140.134"
                cy="140.134"
                r="60.1336"
                fill="#CB8F8F"
              />
            </g>
            <g filter="url(#filter1_bi_89_430)">
              <circle
                cx="235.183"
                cy="235.183"
                r="155.183"
                fill="#C4C4C4"
                fillOpacity="0.01"
              />
            </g>
            <circle
              cx="235.183"
              cy="235.183"
              r="154.683"
              stroke="url(#paint0_linear_89_430)"
            />
            <g
              opacity="0.7"
              filter="url(#filter2_f_89_430)"
            >
              <ellipse
                cx="182.359"
                cy="166.841"
                rx="21.3105"
                ry="35.6627"
                transform="rotate(45 182.359 166.841)"
                fill="#FF9BC5"
                fillOpacity="0.16"
              />
            </g>
            <g
              opacity="0.35"
              filter="url(#filter3_f_89_430)"
            >
              <ellipse
                cx="314.463"
                cy="326.102"
                rx="20.5931"
                ry="42.146"
                transform="rotate(45 314.463 326.102)"
                fill="#DF9BFF"
              />
            </g>
            <g filter="url(#filter4_f_89_430)">
              <path
                d="M196.388 86.8934C146.207 99.9854 106.043 137.875 89.7717 186.689H89.699V181.061C107.25 133.901 147.076 97.5808 196.388 84.8889V86.8934Z"
                fill="#DFB9D7"
              />
            </g>
            <g filter="url(#filter5_f_89_430)">
              <ellipse
                cx="132.539"
                cy="120.851"
                rx="23.2775"
                ry="5.81938"
                transform="rotate(-40.3806 132.539 120.851)"
                fill="#AED4D2"
              />
            </g>
            <g filter="url(#filter6_f_89_430)">
              <ellipse
                cx="132.539"
                cy="120.852"
                rx="18.2756"
                ry="8.82319"
                transform="rotate(-40.3806 132.539 120.852)"
                fill="white"
                fillOpacity="0.1"
              />
            </g>
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_89_430"
            x="0"
            y="0"
            width="280.267"
            height="280.267"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood
              floodOpacity="0"
              result="BackgroundImageFix"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="40"
              result="effect1_foregroundBlur_89_430"
            />
          </filter>
          <filter
            id="filter1_bi_89_430"
            x="60"
            y="60"
            width="350.367"
            height="350.367"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood
              floodOpacity="0"
              result="BackgroundImageFix"
            />
            <feGaussianBlur
              in="BackgroundImageFix"
              stdDeviation="10"
            />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_89_430"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_89_430"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset
              dx="-4"
              dy="-4"
            />
            <feGaussianBlur stdDeviation="8" />
            <feComposite
              in2="hardAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
            />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.751506 0 0 0 0 0.608333 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_89_430"
            />
          </filter>
          <filter
            id="filter2_f_89_430"
            x="128.978"
            y="113.46"
            width="106.762"
            height="106.762"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood
              floodOpacity="0"
              result="BackgroundImageFix"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="12"
              result="effect1_foregroundBlur_89_430"
            />
          </filter>
          <filter
            id="filter3_f_89_430"
            x="257.286"
            y="268.925"
            width="114.353"
            height="114.353"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood
              floodOpacity="0"
              result="BackgroundImageFix"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="12"
              result="effect1_foregroundBlur_89_430"
            />
          </filter>
          <filter
            id="filter4_f_89_430"
            x="77.699"
            y="72.8889"
            width="130.689"
            height="125.8"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood
              floodOpacity="0"
              result="BackgroundImageFix"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="6"
              result="effect1_foregroundBlur_89_430"
            />
          </filter>
          <filter
            id="filter5_f_89_430"
            x="93.4067"
            y="84.1288"
            width="78.2639"
            height="73.4454"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood
              floodOpacity="0"
              result="BackgroundImageFix"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="10.5"
              result="effect1_foregroundBlur_89_430"
            />
          </filter>
          <filter
            id="filter6_f_89_430"
            x="101.485"
            y="91.2346"
            width="62.1069"
            height="59.2343"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood
              floodOpacity="0"
              result="BackgroundImageFix"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="8"
              result="effect1_foregroundBlur_89_430"
            />
          </filter>
          <linearGradient
            id="paint0_linear_89_430"
            x1="80"
            y1="80"
            x2="390.367"
            y2="390.367"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F9E5B2" />
            <stop
              offset="1"
              stopColor="#640DFB"
              stopOpacity="0.1"
            />
          </linearGradient>
        </defs>
      </svg>

      <svg
        className={bem('bubble', 'hover')}
        viewBox="0 0 460 534"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(-5 0)">
          <g
            opacity="0.5"
            filter="url(#filter0_f_89_348)"
          >
            <circle
              cx="140.009"
              cy="172.339"
              r="60.0092"
              fill="#CB8F8F"
            />
          </g>
          <g filter="url(#filter1_f_89_348)">
            <circle
              cx="234.862"
              cy="383.34"
              r="100.661"
              fill="#240E74"
            />
          </g>
          <g filter="url(#filter2_f_89_348)">
            <circle
              cx="234.862"
              cy="162.661"
              r="100.661"
              fill="#55108B"
            />
          </g>
          <g
            opacity="0.7"
            filter="url(#filter3_i_89_348)"
          >
            <circle
              cx="234.863"
              cy="267.193"
              r="154.862"
              fill="#C4C4C4"
              fillOpacity="0.01"
            />
          </g>
          <g filter="url(#filter4_bi_89_348)">
            <circle
              cx="234.863"
              cy="267.193"
              r="154.862"
              fill="#C4C4C4"
              fillOpacity="0.01"
            />
          </g>
          <circle
            cx="234.863"
            cy="267.193"
            r="154.362"
            stroke="url(#paint0_linear_89_348)"
          />
          <g filter="url(#filter5_f_89_348)">
            <circle
              cx="234.863"
              cy="267.193"
              r="151.862"
              stroke="url(#paint1_linear_89_348)"
              strokeWidth="6"
            />
            <circle
              cx="234.863"
              cy="267.193"
              r="151.862"
              stroke="black"
              strokeOpacity="0.2"
              strokeWidth="6"
            />
          </g>
          <g
            opacity="0.3"
            filter="url(#filter6_i_89_348)"
          >
            <circle
              cx="234.863"
              cy="267.193"
              r="154.862"
              fill="#C4C4C4"
              fillOpacity="0.01"
            />
          </g>
          <circle
            cx="234.863"
            cy="267.193"
            r="154.362"
            stroke="url(#paint2_linear_89_348)"
          />
          <g
            opacity="0.7"
            filter="url(#filter7_f_89_348)"
          >
            <ellipse
              cx="182.148"
              cy="198.992"
              rx="21.2664"
              ry="35.5889"
              transform="rotate(45 182.148 198.992)"
              fill="#FF9BC5"
            />
          </g>
          <g
            opacity="0.35"
            filter="url(#filter8_f_89_348)"
          >
            <ellipse
              cx="313.978"
              cy="357.923"
              rx="20.5505"
              ry="42.0588"
              transform="rotate(45 313.978 357.923)"
              fill="#DF9BFF"
            />
          </g>
          <g filter="url(#filter9_f_89_348)">
            <path
              d="M196.147 119.209C146.07 132.274 105.989 170.086 89.7514 218.798H89.6788V213.182C107.194 166.12 146.937 129.875 196.147 117.209V119.209Z"
              fill="#DFB9D7"
            />
          </g>
          <g filter="url(#filter10_f_89_348)">
            <ellipse
              cx="132.43"
              cy="153.097"
              rx="23.2294"
              ry="5.80734"
              transform="rotate(-40.3806 132.43 153.097)"
              fill="#D4AEBD"
            />
          </g>
          <g
            opacity="0.7"
            filter="url(#filter11_f_89_348)"
          >
            <ellipse
              cx="132.43"
              cy="153.097"
              rx="52.3657"
              ry="13.0914"
              transform="rotate(-40.3806 132.43 153.097)"
              fill="#D4AEBD"
            />
          </g>
          <g filter="url(#filter12_f_89_348)">
            <ellipse
              cx="335.687"
              cy="383.455"
              rx="23.2294"
              ry="5.80734"
              transform="rotate(-40.3806 335.687 383.455)"
              fill="#A08FF4"
            />
          </g>
          <g filter="url(#filter13_f_89_348)">
            <ellipse
              cx="132.43"
              cy="153.097"
              rx="18.2378"
              ry="8.80493"
              transform="rotate(-40.3806 132.43 153.097)"
              fill="white"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_89_348"
            x="0.00012207"
            y="32.3303"
            width="280.018"
            height="280.018"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood
              floodOpacity="0"
              result="BackgroundImageFix"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="40"
              result="effect1_foregroundBlur_89_348"
            />
          </filter>
          <filter
            id="filter1_f_89_348"
            x="66.2018"
            y="214.679"
            width="337.321"
            height="337.321"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood
              floodOpacity="0"
              result="BackgroundImageFix"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="34"
              result="effect1_foregroundBlur_89_348"
            />
          </filter>
          <filter
            id="filter2_f_89_348"
            x="72.2018"
            y="0"
            width="325.321"
            height="325.321"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood
              floodOpacity="0"
              result="BackgroundImageFix"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="31"
              result="effect1_foregroundBlur_89_348"
            />
          </filter>
          <filter
            id="filter3_i_89_348"
            x="56.0002"
            y="88.3303"
            width="333.725"
            height="333.725"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood
              floodOpacity="0"
              result="BackgroundImageFix"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset
              dx="-24"
              dy="-24"
            />
            <feGaussianBlur stdDeviation="27" />
            <feComposite
              in2="hardAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
            />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.3155 0 0 0 0 0.075 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_89_348"
            />
          </filter>
          <filter
            id="filter4_bi_89_348"
            x="60.0002"
            y="92.3303"
            width="349.725"
            height="349.725"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood
              floodOpacity="0"
              result="BackgroundImageFix"
            />
            <feGaussianBlur
              in="BackgroundImageFix"
              stdDeviation="10"
            />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_89_348"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_89_348"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset
              dx="-4"
              dy="-4"
            />
            <feGaussianBlur stdDeviation="8" />
            <feComposite
              in2="hardAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
            />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.751506 0 0 0 0 0.608333 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_89_348"
            />
          </filter>
          <filter
            id="filter5_f_89_348"
            x="64.0002"
            y="96.3303"
            width="341.725"
            height="341.725"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood
              floodOpacity="0"
              result="BackgroundImageFix"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="8"
              result="effect1_foregroundBlur_89_348"
            />
          </filter>
          <filter
            id="filter6_i_89_348"
            x="80.0002"
            y="112.33"
            width="312.725"
            height="312.725"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood
              floodOpacity="0"
              result="BackgroundImageFix"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset
              dx="3"
              dy="3"
            />
            <feGaussianBlur stdDeviation="2" />
            <feComposite
              in2="hardAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
            />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_89_348"
            />
          </filter>
          <filter
            id="filter7_f_89_348"
            x="128.827"
            y="145.671"
            width="106.641"
            height="106.641"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood
              floodOpacity="0"
              result="BackgroundImageFix"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="12"
              result="effect1_foregroundBlur_89_348"
            />
          </filter>
          <filter
            id="filter8_f_89_348"
            x="256.87"
            y="300.815"
            width="114.216"
            height="114.216"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood
              floodOpacity="0"
              result="BackgroundImageFix"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="12"
              result="effect1_foregroundBlur_89_348"
            />
          </filter>
          <filter
            id="filter9_f_89_348"
            x="77.6788"
            y="105.209"
            width="130.468"
            height="125.589"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood
              floodOpacity="0"
              result="BackgroundImageFix"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="6"
              result="effect1_foregroundBlur_89_348"
            />
          </filter>
          <filter
            id="filter10_f_89_348"
            x="93.3357"
            y="116.407"
            width="78.1888"
            height="73.3804"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood
              floodOpacity="0"
              result="BackgroundImageFix"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="10.5"
              result="effect1_foregroundBlur_89_348"
            />
          </filter>
          <filter
            id="filter11_f_89_348"
            x="59.6401"
            y="85.7268"
            width="145.58"
            height="134.741"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood
              floodOpacity="0"
              result="BackgroundImageFix"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="16"
              result="effect1_foregroundBlur_89_348"
            />
          </filter>
          <filter
            id="filter12_f_89_348"
            x="302.593"
            y="352.765"
            width="66.1888"
            height="61.3804"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood
              floodOpacity="0"
              result="BackgroundImageFix"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="7.5"
              result="effect1_foregroundBlur_89_348"
            />
          </filter>
          <filter
            id="filter13_f_89_348"
            x="101.408"
            y="123.508"
            width="62.0446"
            height="59.1779"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood
              floodOpacity="0"
              result="BackgroundImageFix"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="8"
              result="effect1_foregroundBlur_89_348"
            />
          </filter>
          <linearGradient
            id="paint0_linear_89_348"
            x1="80.0002"
            y1="112.33"
            x2="389.725"
            y2="422.055"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#640DFB" />
            <stop
              offset="0.755208"
              stopColor="#640DFB"
              stopOpacity="0.1"
            />
          </linearGradient>
          <linearGradient
            id="paint1_linear_89_348"
            x1="123.362"
            y1="155.692"
            x2="346.364"
            y2="378.694"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF9179" />
            <stop
              offset="0.255208"
              stopColor="#FF5CF0"
            />
            <stop
              offset="0.541667"
              stopColor="#8466FF"
            />
            <stop
              offset="1"
              stopColor="#002FA8"
            />
          </linearGradient>
          <linearGradient
            id="paint2_linear_89_348"
            x1="80.0002"
            y1="112.33"
            x2="389.725"
            y2="422.055"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F9E5B2" />
            <stop
              offset="1"
              stopColor="#640DFB"
              stopOpacity="0.1"
            />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

LogoBubble.propTypes = {
  size: PropTypes.oneOf(['s1', 's2', 's3', 's4', 's5']) as Validator<'s1' | 's2' | 's3' | 's4' | 's5'>,
  menuPositon: PropTypes.oneOf(['left', 'right']) as Validator<'left' | 'right'>,
  values: PropTypes.shape({
    knowledge: PropTypes.number.isRequired,
    experience: PropTypes.number.isRequired,
  }).isRequired,
  active: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default LogoBubble;
