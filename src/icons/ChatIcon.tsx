import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const SvgComponent = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={27}
    height={27}
    fill="none"
    {...props}
  >
    <Path
      stroke={props.color || '#8CBEFF'}
      d="M13.607 25.125a11.625 11.625 0 1 0-9.823-5.406l-1.802 5.406 5.406-1.802a11.57 11.57 0 0 0 6.22 1.802z"
    />
  </Svg>
);
export default SvgComponent;
