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
        stroke={props.colorScheme === 'dark' ? '#fff' : '#000'}
        // strokeWidth={2.5}
        d="M4 1 1.244 3.756a.84.84 0 0 0 0 1.183L4 7.695"
      />
    </Svg>
  );
};
export default SvgComponent;
