import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = (props: any) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      fill="none"
      {...props}
    >
      <Path
        fill={props.colorScheme === 'dark' ? '#fff' : '#000'}
        opacity={0.5}
        d="M5.063 1.688h2.25v2.25h-2.25v-2.25zm5.625 0h2.25v2.25h-2.25v-2.25zM5.061 5.813h2.25v2.25h-2.25v-2.25zm5.625 0h2.25v2.25h-2.25v-2.25zM5.064 9.938h2.25v2.25h-2.25v-2.25zm5.625 0h2.25v2.25h-2.25v-2.25zm-5.626 4.124h2.25v2.25h-2.25v-2.25zm5.625 0h2.25v2.25h-2.25v-2.25z"
      />
    </Svg>
  );
};
export default SvgComponent;
