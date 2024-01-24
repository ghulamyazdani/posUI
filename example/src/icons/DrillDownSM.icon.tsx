import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = (props: any) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={10}
      height={10}
      fill="none"
      {...props}
    >
      <Path
        fill={props.colorScheme === 'dark' ? '#fff' : '#000'}
        opacity={0.5}
        d="m3.125 1.875.442-.442 1.12 1.12V0h.625v2.554l1.121-1.12.442.441L5 3.75 3.125 1.875z"
      />
      <Path
        fill={props.colorScheme === 'dark' ? '#fff' : '#000'}
        opacity={0.5}
        d="M6.875 5a1.87 1.87 0 0 0-.55-1.326L5 5 3.674 3.674A1.875 1.875 0 1 0 6.875 5z"
      />
      <Path
        fill={props.colorScheme === 'dark' ? '#fff' : '#000'}
        opacity={0.5}
        d="M9.375 5a4.362 4.362 0 0 0-1.283-3.092l-.442.442a3.75 3.75 0 1 1-5.3 0l-.442-.442A4.374 4.374 0 1 0 9.375 5z"
      />
    </Svg>
  );
};
export default SvgComponent;
