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
        stroke={props.colorScheme === 'dark' ? '#fff' : '#3B3B3B'}
        d="M16.095 21.048c-.826 1.238-1.857 1.857-3.095 1.857-1.238 0-2.27-.62-3.096-1.857m9.391-1.857H6.704a2.044 2.044 0 0 1-1.752-3.096A13.032 13.032 0 0 0 6.81 9.391V8.048a4.952 4.952 0 0 1 4.953-4.953h2.476a4.952 4.952 0 0 1 4.952 4.953V9.39c0 2.361.641 4.68 1.857 6.704a2.043 2.043 0 0 1-1.752 3.096z"
      />
    </Svg>
  );
};
export default SvgComponent;
