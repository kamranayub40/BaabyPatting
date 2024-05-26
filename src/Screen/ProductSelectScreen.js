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

const ProductSelectScreen = ({navigation}) => {
    const [selectButton,setSelectButton]=useState('Sleep Patter')
 

  return (
    <View style={styles.Main_Container}>
      <FocusAwareStatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent={false}
      />

      <ScrollView keyboardShouldPersistTaps={'handled'}>
        <View style={styles.mainLogo}>
          <Text style={[styles.titleLogo, {fontSize:25,fontFamily: Bold, color: primary}]}>
            Babby Patting
          </Text>
        </View>
        <View>
          <Text style={styles.titleLogo}>Hello, let's get to know you.</Text>
        </View>
      

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
            marginBottom: 10,
          }}>
          <Primary_Button
            backgroundColor={selectButton==='Sleep Patter'?primary:white}
            Text_color={selectButton==='Sleep Patter'?white:black}
            Button_Title={'Sleep Patter'}
            onPress={() => setSelectButton('Sleep Patter')}
          />
          <Primary_Button
            backgroundColor={selectButton==='Sleep Pillow'?primary:white}
            Text_color={selectButton==='Sleep Pillow'?white:black}
            Button_Title={'Sleep Pillow'}
            onPress={() => setSelectButton('Sleep Pillow')}

          />
           <Primary_Button
            backgroundColor={selectButton==='Sleep Sound'?primary:white}
            Text_color={selectButton==='Sleep Sound'?white:black}
            Button_Title={'Sleep Sound'}
            onPress={() => setSelectButton('Sleep Sound')}

          />
           <Primary_Button
            backgroundColor={primary}
            Text_color={white}
            Button_Title={'Next'}
            onPress={() => navigation.navigate('HomeScreen')}

          />
        </View>

     
      </ScrollView>
    </View>
  );
};
export default ProductSelectScreen;
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
