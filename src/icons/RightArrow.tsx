import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = (props: any) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={5}
      height={9}
      fill="none"
      {...props}
    >
      <Path
        stroke={props.colorScheme == 'dark' ? '#fff' : '#3B3B3B'}
        // strokeWidth={2.5}
        d="M1 7.695 3.756 4.94a.84.84 0 0 0 0-1.183L1 1"
      />
    </Svg>
  );
};
export default SvgComponent;
