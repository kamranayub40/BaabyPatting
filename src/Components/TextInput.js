import React from 'react';
import { TextInput, View, Text, Dimensions, StyleSheet } from 'react-native';
import {
  black,
  grey,
  light_black,
  light_grey,
  primary,
  secondary,
  tertiary,
  white,
} from '../Utils/Colors/Colors';
import { Medium, Regular, SemiBold } from '../Utils/Fonts/FontFamily';

const Text_Input = ({
  placeholder,
  value,
  width,
  maxLength,
  onChangeText,
  secureTextEntry,
  keyboardType,
  icon,
  backgroundColor,
  editable,
  disabled,
  defaultValue,
  error,
  getCode,
  error2,
  error3,
  onSelect,
  onFocus,
  IsFocus,
  onBlur,
  IdIcon,
}) => {
  return (
    <View
      style={[
        styles.InputContainer,
        {
          width: width,
          backgroundColor: error ? '#FFE3E3' : light_grey,
          borderColor: error ? '#E41818' : light_grey,
        },
      ]}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={black}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        keyboardType={keyboardType}
        defaultValue={defaultValue}
        editable={editable}
        secureTextEntry={secureTextEntry}
        onFocus={onFocus}
        maxLength={maxLength}
        style={styles.textInput}
      />

    </View>
  );
};

export default Text_Input;

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 10, // Adjust the space between the icon and input
  },
  textInput: {
    fontSize: 16,
    fontFamily: SemiBold,
    color: black,
    textAlign:"center",
    flex:1
  },
  InputContainer: {
    width: Dimensions.get('screen').width / 1.1,
    borderRadius: 50,
    borderColor: black,
    marginBottom: 20,
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: light_grey,
    borderWidth: 1,
  },
  titleInput: {
    fontSize: 18,
    fontFamily: SemiBold,
    color: black,
    marginBottom: 4,
  },
});
