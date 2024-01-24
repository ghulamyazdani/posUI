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
        d="M15.833 4.167 4.166 15.832M2.5 2.5 5 5.833 7.5 2.5M2.083 5.833h5.833M2.083 8.334h5.833M5 5.833v5m8.685.001H17.5V17.5H9.166v-2.437"
      />
    </Svg>
  );
};
export default SvgComponent;
