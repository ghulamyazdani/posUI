import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const SvgComponent = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={152}
    height={152}
    fill="none"
    {...props}
  >
    <Path
      fill="#157AFF"
      d="M76 25.334c-29.703 0-56.557 12.033-76 31.54L76 133l31.667-31.73V50.667h37.493C126.477 34.897 102.347 25.333 76 25.333zM120.333 114H133v12.667h-12.667V114z"
    />
    <Path fill="#157AFF" d="M120.333 63.334H133v37.999h-12.667v-38z" />
  </Svg>
);
export default SvgComponent;
