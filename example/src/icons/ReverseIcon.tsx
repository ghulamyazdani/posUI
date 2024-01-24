// import * as React from 'react';
// import Svg, {Path} from 'react-native-svg';
// const SvgComponent = (props: any) => (
//   <Svg
//     xmlns="http://www.w3.org/2000/svg"
//     width={20}
//     height={20}
//     fill="none"
//     {...props}>
//     <Path
//       stroke={colorScheme === 'dark'
//            ? '#fff'
//           : '#000'}
//       opacity={0.5}
//       d="m9.047 9.048-3.81 3.81m0 0 3.81 3.809m-3.81-3.81h11.43m-5.715-9.524 3.81 3.81m0 0-3.81 3.81m3.81-3.81H3.333"
//     />
//   </Svg>
// );
// export default SvgComponent;

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
      fill="#000"
      opacity={0.4}
      d="M5.299 6.507 6.627 6.1a.834.834 0 0 1 .488 1.594l-3.188.975a.833.833 0 0 1-1.04-.554L1.91 4.928a.834.834 0 0 1 1.595-.488l.366 1.201a7.824 7.824 0 0 1 12.303-1.04 7.817 7.817 0 0 1 1.702 2.928.834.834 0 1 1-1.587.506 6.151 6.151 0 0 0-10.99-1.528zm10.272 6.829-1.479.37a.833.833 0 1 1-.403-1.617l3.036-.758a.83.83 0 0 1 .508-.067.832.832 0 0 1 .7.625l.807 3.234a.833.833 0 0 1-1.617.403l-.275-1.102a7.818 7.818 0 0 1-13.653-1.496l-.217-.529a.834.834 0 0 1 1.543-.631l.216.527a6.151 6.151 0 0 0 10.834 1.041z"
    />
  </Svg>
);
export default SvgComponent;
