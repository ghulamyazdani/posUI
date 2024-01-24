import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const SvgComponent = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="m6.25 3.75.884-.884 2.241 2.241V0h1.25v5.107l2.241-2.24.884.883L10 7.5 6.25 3.75z"
    />
    <Path
      fill="#fff"
      d="M13.75 10a3.737 3.737 0 0 0-1.098-2.652L10 10 7.348 7.348A3.75 3.75 0 1 0 13.75 10z"
    />
    <Path
      fill="#fff"
      d="M18.75 10a8.723 8.723 0 0 0-2.566-6.185l-.883.884A7.5 7.5 0 1 1 4.7 4.7l-.884-.884A8.748 8.748 0 1 0 18.75 10z"
    />
  </Svg>
);
export default SvgComponent;
