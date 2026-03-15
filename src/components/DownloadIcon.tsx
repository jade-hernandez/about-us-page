interface IconProps {
  size?: number;
  color?: string;
}

const DownloadIcon = (props: IconProps) => (
  <svg
    viewBox={`${0} ${0} ${props.size || 54} ${props.size || 54}`}
    xmlns='http://www.w3.org/2000/svg'
    width={props.size || 54}
    height={props.size || 54}
    fill={props.color || "#4338CA"}
  >
    <g filter='url(#filter0_dd_12_654)'>
      <path
        d='M3 26C3 12.7452 13.7452 2 27 2C40.2548 2 51 12.7452 51 26C51 39.2548 40.2548 50 27 50C13.7452 50 3 39.2548 3 26Z'
        fill='white'
      />
      <path
        d='M28 24H33L27 30L21 24H26V17H28V24ZM19 33H35V26H37V34C37 34.5523 36.5523 35 36 35H18C17.4477 35 17 34.5523 17 34V26H19V33Z'
        fill={props.color || "#4338CA"}
      />
    </g>
    <defs>
      <filter
        id='filter0_dd_12_654'
        x='0'
        y='0'
        width='54'
        height='54'
        filterUnits='userSpaceOnUse'
        color-interpolation-filters='sRGB'
      >
        <feFlood
          flood-opacity='0'
          result='BackgroundImageFix'
        />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy='1' />
        <feGaussianBlur stdDeviation='1' />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'
        />
        <feBlend
          mode='normal'
          in2='BackgroundImageFix'
          result='effect1_dropShadow_12_654'
        />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy='1' />
        <feGaussianBlur stdDeviation='1.5' />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'
        />
        <feBlend
          mode='normal'
          in2='effect1_dropShadow_12_654'
          result='effect2_dropShadow_12_654'
        />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='effect2_dropShadow_12_654'
          result='shape'
        />
      </filter>
    </defs>
  </svg>
);

export default DownloadIcon;
