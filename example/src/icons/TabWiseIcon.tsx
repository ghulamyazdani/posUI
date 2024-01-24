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
        //   fill="#000"
        fill={
          props.isSelected
            ? '#157AFF'
            : props.colorScheme === 'dark'
            ? '#fff'
            : '#000'
        }
        d="M18.75 16.667H1.25V15h17.5v1.667zm0-13.334v10h-5v-10h5zM17.083 5h-1.666v6.667h1.666V5zM12.5 3.333v10h-5v-10h5zM10.833 5H9.167v6.667h1.666V5zM6.25 3.333v10h-5v-10h5zM4.583 5H2.917v6.667h1.666V5z"
      />
    </Svg>
  );
};
export default SvgComponent;
