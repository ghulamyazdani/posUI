import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const SvgComponent = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={14}
    fill="none"
    {...props}
  >
    <Path
      fill="#0FB58F"
      d="m1.847 13.338-1.112-1.23L8.272 3.76l3.187 3.528 4.564-5.055 1.112 1.229-5.676 6.29-3.187-3.53-6.425 7.117z"
    />
    <Path fill="#0FB58F" d="M14.789 1.762 18.572.638l-1.013 4.19-2.77-3.066z" />
  </Svg>
);
export default SvgComponent;
