import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgComponent = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={37}
    height={4}
    fill="none"
    {...props}>
    <Path stroke="#fff" d="M.66 2h35.62" />
  </Svg>
);
export default SvgComponent;
