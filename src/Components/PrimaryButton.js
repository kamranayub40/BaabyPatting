import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Bold, SemiBold} from '../Utils/Fonts/FontFamily';
import {black, light_grey, primary, white} from '../Utils/Colors/Colors';

const Primary_Button = ({
  Button_Title,
  Text_color,
  onPress,
  Icon,
  backgroundColor,
  borderColor,
  width
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.Main_Container, {backgroundColor: backgroundColor,}]}>
      <Text style={[styles.Button_Title, {color: Text_color}]}>
        {Button_Title}
      </Text>
    </TouchableOpacity>
  );
};

export default Primary_Button;
const styles = StyleSheet.create({
  Main_Container: {
    justifyContent:"center",
    alignItems:"center",
    width:Dimensions.get('screen').width/1.4,
    height:70,
    borderRadius:50,
    paddingHorizontal:20,
    backgroundColor:light_grey,
    marginBottom:20
  },
  Button_Title: {
    fontSize:16,
    fontFamily:SemiBold,color:black
  },
  icon: {
    position: 'absolute',
    right: 0,
    paddingHorizontal: 30,
  },
});
