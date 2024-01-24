// import * as React from 'react';
// import Svg, {Path} from 'react-native-svg';
// const SvgComponent = (props: any) => (
//   <Svg
//     xmlns="http://www.w3.org/2000/svg"
//     width={25}
//     height={28}
//     fill="none"
//     {...props}>
//     <Path
//       stroke="#000"
//       opacity={0.5}
//       strokeWidth="2"
//       d="M15.166 22.4c0 .73-.478 1.687-1.088 2.058l-1.686 1.088c-1.567.968-3.743-.12-3.743-2.057v-6.398c0-.849-.479-1.937-.969-2.535L3.088 9.725C2.478 9.115 2 8.039 2 7.309V4.535C2 3.088 3.088 2 4.416 2h15.952a2.424 2.424 0 0 1 2.416 2.416V7.07c0 .969-.61 2.177-1.208 2.775"
//     />
//     <Path
//       stroke="#000"
//       opacity={0.5}
//       strokeWidth="2"
//       d="M17.26 19.352a3.827 3.827 0 1 0 0-7.654 3.827 3.827 0 0 0 0 7.654zm4.542.717-1.196-1.196"
//     />
//   </Svg>
// );
// export default SvgComponent;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = (props: any) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={26}
      height={26}
      fill="none"
      {...props}
    >
      <Path
        stroke={props.colorScheme === 'dark' ? '#fff' : '#000'}
        opacity={0.8}
        d="m12.306 21.898-2.556.852v-9.208L4.896 8.203a2.167 2.167 0 0 1-.563-1.457V4.333h17.333v2.353c0 .575-.228 1.126-.634 1.532L16.25 13m5.633 8.884 1.95 1.95M16.25 19.5a3.25 3.25 0 1 0 6.5 0 3.25 3.25 0 0 0-6.5 0z"
      />
    </Svg>
  );
};
export default SvgComponent;
