import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const SvgComponent = (props: any) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={17}
      height={17}
      fill="none"
      {...props}
    >
      <Path
        fill="#000"
        stroke={props.colorScheme === 'dark' ? '#fff' : '#3B3B3B'}
        opacity={0.5}
        d="M13.179 4.262a.705.705 0 0 0-.999 0L8.716 7.718 5.252 4.254a.706.706 0 1 0-.998 1l3.463 3.463-3.463 3.464a.706.706 0 1 0 .998.999l3.464-3.464 3.464 3.464a.706.706 0 0 0 .999-1L9.715 8.718l3.464-3.464a.71.71 0 0 0 0-.991z"
      />
    </Svg>
  );
};
export default SvgComponent;
