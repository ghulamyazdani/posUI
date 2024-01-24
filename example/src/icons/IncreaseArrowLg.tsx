import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const SvgComponent = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#0FB58F"
      d="M1.53 15.988.054 14.512 10.07 4.494l4.236 4.233 6.067-6.067 1.478 1.475-7.545 7.548-4.236-4.236-8.54 8.54z"
    />
    <Path
      fill="#0FB58F"
      d="M18.733 2.096 23.762.748l-1.346 5.029-3.683-3.68z"
    />
  </Svg>
);
export default SvgComponent;
