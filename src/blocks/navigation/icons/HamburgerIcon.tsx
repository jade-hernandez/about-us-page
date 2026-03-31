interface IconProps {
  className?: string;
}

function HamburgerIcon(props: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
      width={20}
      height={20}
      className={props.className}
      fill='currentColor'
    >
      <path d='M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z'></path>
    </svg>
  );
}

export { HamburgerIcon };
