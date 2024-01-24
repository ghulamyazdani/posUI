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
        stroke={
          props.isSelected
            ? '#157AFF'
            : props.colorScheme === 'dark'
            ? '#fff'
            : '#000'
        }
        d="M10.833 14.167a3.334 3.334 0 1 0 6.667 0 3.334 3.334 0 0 0-6.667 0z"
      />
      <Path
        stroke={
          props.isSelected
            ? '#157AFF'
            : props.colorScheme === 'dark'
            ? '#fff'
            : '#000'
        }
        d="M14.167 10.833v3.334H17.5M10 2.5v3.333a.833.833 0 0 0 .833.834h3.334"
      />
      <Path
        stroke={
          props.isSelected
            ? '#157AFF'
            : props.colorScheme === 'dark'
            ? '#fff'
            : '#000'
        }
        d="M9.583 17.5H4.167A1.667 1.667 0 0 1 2.5 15.833V4.167A1.667 1.667 0 0 1 4.167 2.5H10l4.167 4.167v1.666m0 2.5v3.334"
      />
    </Svg>
  );
};
export default SvgComponent;
