import * as React from 'react';
import Svg, { Circle } from 'react-native-svg';
const SvgComponent = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={7}
    height={7}
    fill="none"
    {...props}
  >
    <Circle
      cx={3.5}
      cy={3.5}
      r={3.5}
      fill={props.active ? '#3B3B3B' : '#D9D9D9'}
    />
  </Svg>
);
export default SvgComponent;
