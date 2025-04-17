import Svg, {Path} from 'react-native-svg';
import React from 'react';
import appColors from '../../theme/appColors';
export function LogoutIcon(props) {
  return (
    <Svg
      width="20"
      height="29"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M3.75 16.6643C3.55109 16.6643 3.36032 16.5853 3.21967 16.4446C3.07902 16.304 3 16.1132 3 15.9143V2.41431C3 2.21539 3.07902 2.02463 3.21967 1.88398C3.36032 1.74332 3.55109 1.66431 3.75 1.66431H14.25C14.4489 1.66431 14.6397 1.74332 14.7803 1.88398C14.921 2.02463 15 2.21539 15 2.41431V4.66431H13.5V3.16431H4.5V15.1643H13.5V13.6643H15V15.9143C15 16.1132 14.921 16.304 14.7803 16.4446C14.6397 16.5853 14.4489 16.6643 14.25 16.6643H3.75ZM13.5 12.1643V9.91431H8.25V8.41431H13.5V6.16431L17.25 9.16431L13.5 12.1643Z"
        fill={appColors.balck}
      />
    </Svg>
  );
}
