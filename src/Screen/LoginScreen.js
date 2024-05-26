import React, {useEffect, useRef, useState} from 'react';
import {
  Alert,
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  ThemeLightTextColor,
  backgroundColor,
  black,
  blue,
  grey,
  light_grey,
  primary,
  secondary,
  tertiary,
  white,
} from '../Utils/Colors/Colors';
import Text_Input from '../Components/TextInput';
import Primary_Button from '../Components/PrimaryButton';
import FocusAwareStatusBar from '../Components/FocusAwareStatusBar';
import CheckBox from '@react-native-community/checkbox';
import {Bold, Medium, Regular, SemiBold} from '../Utils/Fonts/FontFamily';
import Ionicons from 'react-native-vector-icons/Ionicons';
import UserIcon from '../Utils/Images/Icons/UserIcon';
import LockIcon from '../Utils/Images/Icons/LockIcon';
import MainLogoIcon from '../Utils/Images/Icons/MainLogoIcon';
import DangerIcon from '../Utils/Images/Icons/DangerIcon';
import DangerIconRed from '../Utils/Images/Icons/DangerIConRed';

const LoginScreen = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [loading, setLoading] = React.useState(false);
  const [iconPass, setIconPass] = useState(true);
  const [email, setEmail] = useState('');
  const [emailError, setEmailerror] = React.useState(false);
  const [EmailFocus, setEmailFocus] = React.useState(false);
  const [password, setPassword] = useState('');
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  const [isError, setIsError] = useState(false);
  React.useEffect(() => {
    if (email !== '') {
      setEmailerror(false);
      setIsError(false);
    }
  }, [email]);
  React.useEffect(() => {
    if (password !== '') {
      setPasswordError(false);
      setIsError(false);
    }
  }, [password]);
  const login = () => {
    if (password === '') {
      setPasswordError(true);
      setIsError(true);
    } else if (email === '') {
      setEmailerror(true);
      setIsError(true);
    } else {
      navigation.navigate('TabNavigation');
    }
  };

  return (
    <View style={styles.Main_Container}>
      <FocusAwareStatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent={false}
      />

      <ScrollView keyboardShouldPersistTaps={'handled'}>
        <View style={styles.mainLogo}>
          <Text style={[styles.titleLogo, {fontFamily: Bold, color: primary}]}>
            Babby Patting
          </Text>
        </View>
        <View>
          <Text style={styles.titleLogo}>Hello, let's get to know you.</Text>
        </View>
        <View style={styles.ContantContainer}>
          <View style={{alignSelf: 'center'}}>
            <Text_Input
              width={Dimensions.get('screen').width / 1.1}
              placeholder={'What is your Name?'}
              // icon={<UserIcon/>}
              //   value={email}
              //   onChangeText={text => {
              //     setEmail(text);
              //   }}
              //   error={emailError}
              //   IsFocus={EmailFocus}
              //   onFocus={() => {
              //     setEmailFocus(true);
              //   }}
              //   onBlur={event => {
              //     setEmailFocus(false);
              //   }}
            />
            <Text_Input
              icon={<LockIcon />}
              width={Dimensions.get('screen').width / 1.1}
              placeholder={'What is your email address?'}
              // value={password}
              // onChangeText={text => {
              //   setPassword(text);
              // }}
              // error={passwordError}
              // IsFocus={passwordFocus}
              // onFocus={() => {
              //   setPasswordFocus(true);
              // }}
              // onBlur={event => {
              //   setPasswordFocus(false);
              // }}
              // secureTextEntry={iconPass}
              // isActive={true}
              // IdIcon={
              //   <TouchableOpacity
              //     onPress={() => {
              //       setIconPass(prev => !prev);
              //     }}>
              //     <Ionicons
              //       name={iconPass ? 'eye-off' : 'eye'}
              //       size={24}
              //       color={primary}
              //     />
              //   </TouchableOpacity>
              // }
            />
          </View>
         
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
            marginBottom: 10,
          }}>
          <Primary_Button
            backgroundColor={primary}
            Text_color={white}
            Button_Title={'Get Started'}
            onPress={() => navigation.navigate('ProductSelectScreen')}
          />
        </View>

      </ScrollView>
    </View>
  );
};
export default LoginScreen;
const styles = StyleSheet.create({
  Main_Container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  mainLogo: {
    marginTop: 10,
    paddingHorizontal: 15,
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  SignupButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('screen').width / 3.5,
    height: 45,
    borderRadius: 10,
    paddingHorizontal: 15,

    backgroundColor: light_grey,
  },
  SignupButtotnext: {
    fontSize: 16,
    fontFamily: SemiBold,
    color: black,
  },

  titleLogo: {
    fontSize: 18,
    marginBottom: 30,
    fontFamily: Medium,
    color: blue,
    textAlign: 'center',
  },

  forgotpassword_text: {
    fontSize: 16,
    fontFamily: Medium,
    color: black,
  },
});
