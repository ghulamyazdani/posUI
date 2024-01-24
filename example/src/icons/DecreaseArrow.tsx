import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const SvgComponent = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={14}
    fill="none"
    {...props}
  >
    <Path
      fill="#B83535"
      d="m18.518.614 1.235 1.227-8.319 8.388-3.54-3.522-5.037 5.079-1.234-1.227L7.887 4.24l3.54 3.524 7.091-7.15z"
    />
    <Path fill="#B83535" d="M4.226 12.252.04 13.391l1.108-4.2 3.077 3.061z" />
  </Svg>
);
export default SvgComponent;
