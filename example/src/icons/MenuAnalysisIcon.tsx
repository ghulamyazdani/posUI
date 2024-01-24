import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = (props: any) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      fill="none"
      {...props}
    >
      <Path
        fill={
          props.isSelected
            ? '#157AFF'
            : props.colorScheme === 'dark'
            ? '#fff'
            : '#000'
        }
        d="M1.667 1.667h16.667v16.666H1.667V1.667zm1.667 1.666v4.583h13.333V3.333H3.334zm13.333 6.25H3.334v7.083h13.333V9.583zM4.997 5h1.67v1.667h-.003v.003H4.997V5zm3.337 0H15v1.667H8.334V5z"
      />
    </Svg>
  );
};
export default SvgComponent;
