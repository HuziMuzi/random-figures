import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const SvgLogout = () => {
  return (
    <Svg width="30px" height="30px" viewBox="0 0 24 24" fill="none">
      <Path
        d="M15 16.5V19C15 20.1046 14.1046 21 13 21H6C4.89543 21 4 20.1046 4 19V5C4 3.89543 4.89543 3 6 3H13C14.1046 3 15 3.89543 15 5V8.0625M11 12H21M21 12L18.5 9.5M21 12L18.5 14.5"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
