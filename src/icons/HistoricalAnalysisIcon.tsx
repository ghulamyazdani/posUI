import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const SvgComponent = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={29}
    height={29}
    fill="none"
    {...props}
  >
    <Path
      stroke={props.color || '#8CBEFF'}
      d="M4.03 27h21.154a1.923 1.923 0 0 0 1.923-1.923V3.923A1.923 1.923 0 0 0 25.184 2H4.03a1.923 1.923 0 0 0-1.923 1.923v21.154c0 1.062.861 1.923 1.923 1.923z"
    />
    <Path
      stroke={props.color || '#8CBEFF'}
      d="M6.915 6.808h3.846m-3.846 4.807h8.654m7.692 0-5.769 9.616-6.73-3.846-3.847 5.769"
    />
  </Svg>
);
export default SvgComponent;
