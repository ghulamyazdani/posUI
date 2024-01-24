import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const SvgComponent = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={10}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M11.32.993a.667.667 0 0 0-.458.202L4 8.057 1.805 5.862a.667.667 0 1 0-.943.943L3.53 9.47a.667.667 0 0 0 .943 0l7.333-7.333A.668.668 0 0 0 11.32.993z"
    />
  </Svg>
);
export default SvgComponent;
