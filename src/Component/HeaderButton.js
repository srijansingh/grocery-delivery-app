import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Color from '../Constant/Color';


const CustomHeaderButton = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={MaterialIcons}
      iconSize={23}
      color={Color.icon}
    />
  );
};

export default CustomHeaderButton;
