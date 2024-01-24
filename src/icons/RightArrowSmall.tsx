import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const SvgComponent = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={6}
    height={11}
    fill="none"
    {...props}
  >
    <Path
      stroke="#157AFF"
      d="m1 9.311 3.138-3.137a.956.956 0 0 0 0-1.348L1 1.69"
    />
  </Svg>
);
export default SvgComponent;
