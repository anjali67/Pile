

import Svg, {Path} from 'react-native-svg';
import React from 'react';

export function Arrow() {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
  );
}
