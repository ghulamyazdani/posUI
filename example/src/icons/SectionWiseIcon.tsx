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
        d="M4.167 13.333h2.5v2.5c0 .92.747 1.667 1.666 1.667h7.5c.92 0 1.667-.747 1.667-1.667v-7.5c0-.919-.747-1.666-1.667-1.666h-2.5v-2.5c0-.92-.747-1.667-1.666-1.667h-7.5c-.92 0-1.667.748-1.667 1.667v7.5c0 .919.748 1.666 1.667 1.666zm7.5-1.666V8.333v3.334zm4.166-3.334.001 7.5h-7.5v-2.5h3.333c.919 0 1.666-.747 1.666-1.666V8.333h2.5zM4.167 4.167h7.5v2.5H8.333c-.919 0-1.666.747-1.666 1.666v3.334h-2.5v-7.5z"
      />
    </Svg>
  );
};
export default SvgComponent;
