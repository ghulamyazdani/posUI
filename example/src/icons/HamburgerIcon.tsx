import * as React from 'react';
import Svg, { Rect } from 'react-native-svg';
//color scheme

const SvgComponent = (props: any) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={29}
      height={23}
      fill="none"
      {...props}
    >
      <Rect
        width={29}
        height={5}
        fill={props.colorScheme === 'dark' ? '#fff' : '#3B3B3B'}
        rx={2.5}
      />
      <Rect
        width={22}
        height={5}
        x={7}
        y={9}
        fill={props.colorScheme === 'dark' ? '#fff' : '#3B3B3B'}
        rx={2.5}
      />
      <Rect
        width={29}
        height={5}
        y={18}
        fill={props.colorScheme === 'dark' ? '#fff' : '#3B3B3B'}
        rx={2.5}
      />
    </Svg>
  );
};
export default SvgComponent;
