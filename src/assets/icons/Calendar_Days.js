  import Svg, {Path} from 'react-native-svg';
  import React from 'react';
  
  export function EventsCalender({stroke = '#1A1A1A', strokeWidth = 1.5}) {
    return (
        <Svg width="28" height="28" viewBox="0 0 28 28" fill="none" >
        <Path d="M22.1667 4.66666H5.83332C5.18899 4.66666 4.66666 5.18899 4.66666 5.83332V22.1667C4.66666 22.811 5.18899 23.3333 5.83332 23.3333H22.1667C22.811 23.3333 23.3333 22.811 23.3333 22.1667V5.83332C23.3333 5.18899 22.811 4.66666 22.1667 4.66666Z" stroke={stroke} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M18.6667 18.6667H18.669V18.669H18.6667V18.6667Z" stroke={stroke} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M14 18.6667H14.0023V18.669H14V18.6667Z" stroke={stroke} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M9.33334 18.6667H9.33568V18.669H9.33334V18.6667Z" stroke={stroke} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M18.6667 14H18.669V14.0023H18.6667V14Z" stroke={stroke} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M14 14H14.0023V14.0023H14V14Z" stroke={stroke} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M9.33334 14H9.33568V14.0023H9.33334V14Z" stroke={stroke} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M4.66666 9.33334H23.3333" stroke={stroke} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M18.6667 2.33334V4.66668" stroke={stroke} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M9.33334 2.33334V4.66668" stroke={stroke} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
      
    );
  }
  
  
  
  