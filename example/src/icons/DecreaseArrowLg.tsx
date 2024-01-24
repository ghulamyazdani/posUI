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
      fill="#B83535"
      d="m22.231.013 1.483 1.47-9.987 10.05-4.25-4.22L3.43 13.4l-1.483-1.47 7.521-7.572 4.25 4.222L22.23.013z"
    />
    <Path fill="#B83535" d="M5.073 13.958.048 15.323l1.33-5.033 3.695 3.668z" />
  </Svg>
);
export default SvgComponent;
