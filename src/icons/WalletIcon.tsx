import * as React from 'react';
import Svg, {Path, Defs, Pattern, Use} from 'react-native-svg';
const SvgComponent = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}>
    <Path fill="url(#a)" d="M0 0h30v30H0z" />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox">
        <Use transform="scale(.01)" />
      </Pattern>
    </Defs>
  </Svg>
);
export default SvgComponent;
