import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = (props: any) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={28}
      height={28}
      fill="none"
      {...props}
    >
      <Path
        fill={props.colorScheme === 'dark' ? '#fff' : '#000'}
        opacity={0.3}
        d="M12.565 21.35a8.784 8.784 0 1 1 0-17.57 8.784 8.784 0 0 1 0 17.57zm0-15.809a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"
      />
      <Path
        fill={props.colorScheme === 'dark' ? '#fff' : '#000'}
        opacity={0.3}
        d="M23.334 24.208a.863.863 0 0 1-.619-.256l-4.818-4.819a.875.875 0 0 1 1.237-1.236l4.818 4.818a.875.875 0 0 1-.618 1.493z"
      />
    </Svg>
  );
};
export default SvgComponent;
