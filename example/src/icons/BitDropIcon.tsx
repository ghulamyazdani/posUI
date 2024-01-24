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
        fill={props.colorScheme === 'dark' ? '#fff' : '#000'}
        d="M13 13.479a.406.406 0 1 0 0-.813.406.406 0 0 0 0 .813z"
      />
      <Path
        stroke={props.colorScheme === 'dark' ? '#fff' : '#000'}
        d="M13 13.479a.406.406 0 1 0 0-.813.406.406 0 0 0 0 .813z"
      />
      <Path
        stroke={props.colorScheme === 'dark' ? '#fff' : '#000'}
        d="M16.038 18.715c2.025-1.085 3.327-3.183 3.327-5.643 0-3.544-2.893-6.437-6.438-6.437s-6.438 2.893-6.438 6.438c0 2.459 1.375 4.556 3.4 5.642"
      />
      <Path
        stroke={props.colorScheme === 'dark' ? '#fff' : '#000'}
        d="M18.498 23.272c3.616-1.953 6.148-5.787 6.148-10.272A11.638 11.638 0 0 0 13 1.354C6.563 1.427 1.354 6.635 1.354 13.073c0 4.412 2.46 8.318 6.148 10.271"
      />
    </Svg>
  );
};
export default SvgComponent;
