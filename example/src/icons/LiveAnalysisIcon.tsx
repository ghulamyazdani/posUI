import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const SvgComponent = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={26}
    fontWeight={800}
    fill="none"
    {...props}
  >
    <Path
      stroke={props.color || '#8CBEFF'}
      d="M25.107 24.553H1.893V1.34h7.143v23.215-12.5h7.143v12.5-17.86h7.143v17.858"
    />
  </Svg>
);
export default SvgComponent;
