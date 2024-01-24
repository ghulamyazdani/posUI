import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const SvgComponent = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={174}
    height={191}
    fill="none"
    {...props}
  >
    <Path
      stroke="#157AFF"
      d="M134 52.889c0 13.751-22.837 24.889-51 24.889S32 66.64 32 52.888m102 0C134 39.139 111.163 28 83 28S32 39.138 32 52.889m102 0V84M32 52.889V84m0 0c0 13.751 22.837 24.889 51 24.889M32 84v31.111C32 128.862 54.837 140 83 140m34-37.333v18.666m0 0V140m0-18.667h17m-17 0h-17"
    />
  </Svg>
);
export default SvgComponent;
