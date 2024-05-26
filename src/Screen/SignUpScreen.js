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
import BusinessIcon from '../Utils/Images/Icons/BussinessIcon';
import PortalIcon from '../Utils/Images/Icons/PortalIcon';
import MapIcon from '../Utils/Images/Icons/MapIcon';
import MessageModal from '../Components/MessageModal';
import MainLogoIcon from '../Utils/Images/Icons/MainLogoIcon';
import DangerIconRed from '../Utils/Images/Icons/DangerIConRed';

const SignupScreen = ({navigation}) => {
  const [messageModalShow, setMessageModalShow] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [loading, setLoading] = React.useState(false);
  const [iconPass, setIconPass] = useState(true);
  const [email, setEmail] = useState('');
  const [emailError, setEmailerror] = React.useState(false);
  const [EmailFocus, setEmailFocus] = React.useState(false);
  const [password, setPassword] = useState('');
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);

  const [isError,setIsError]=useState(false)
  React.useEffect(() => {
    if (email !== '') {
      setEmailerror(false);
      setIsError(false)

    }
  }, [email]);
  React.useEffect(() => {
    if (password !== '') {
      setPasswordError(false);
      setIsError(false)
    }
  }, [password]);

  useEffect(() => {
    if (messageModalShow) {
      setTimeout(() => {
        setMessageModalShow(false);
        navigation.navigate('LocationScreen');
      }, 3000);
    }
  }, [messageModalShow]);
  const signup = () => {
    // if(password===''||email===''){
    //   if (password === '') {
    //     setPasswordError(true);
    //     setIsError(true);
    //   } if (email === '') {
    //     setEmailerror(true);
    //     setIsError(true);
    //   }
      
    // }
    // else {
      navigation.navigate('PricingPlanScreen');
    // }
  }
  return (
    <View style={styles.Main_Container}>
      <FocusAwareStatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent={false}
      />
      {messageModalShow ? (
        <MessageModal
          MessageTitle={'You’ve Successfully Signed up!'}
          MessageDetail={
            'Welcome! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
          }
        />
      ) : (
        <ScrollView keyboardShouldPersistTaps={'handled'}>
          <View style={styles.mainLogo}>
        <Text style={[styles.titleLogo,{fontFamily:Bold,color:primary}]}>ChampEng</Text>
            
          </View>
          <View style={styles.SignupCotnianer}>
            <Text style={styles.titleLogo}>Sign Up</Text>
         
          </View>
          <View style={styles.ContantContainer}>
            <View style={{alignSelf: 'center'}}>
              <Text_Input icon={<BusinessIcon />} placeholder={'Enter Name'} 
            width={Dimensions.get('screen').width/1.1}
              
              />
              <Text_Input icon={<MapIcon />} placeholder={'Enter Age'} 
            width={Dimensions.get('screen').width/1.1}
              
              />
                <Text_Input icon={<MapIcon />} placeholder={'Gender '} 
            width={Dimensions.get('screen').width/1.1}
              
              />
              
              <Text_Input
            width={Dimensions.get('screen').width/1.1}
            icon={<UserIcon/>}
              placeholder={'Enter mail'}
              value={email}
              onChangeText={text => {
                setEmail(text);
              }}
              error={emailError}
              IsFocus={EmailFocus}
              onFocus={() => {
                setEmailFocus(true);
              }}
              onBlur={event => {
                setEmailFocus(false);
              }}
            />
           
             
           
             
              
              <Text_Input
                icon={<LockIcon />}
                placeholder={'Password'}
            width={Dimensions.get('screen').width/1.1}

                value={password}
                onChangeText={text => {
                  setPassword(text);
                }}
                error={passwordError}
                IsFocus={passwordFocus}
                onFocus={() => {
                  setPasswordFocus(true);
                }}
                onBlur={event => {
                  setPasswordFocus(false);
                }}
                secureTextEntry={iconPass}
                isActive={true}
                IdIcon={
                  <TouchableOpacity
                    onPress={() => {
                      setIconPass(prev => !prev);
                    }}>
                    <Ionicons
                      name={iconPass ? 'eye-off' : 'eye'}
                      size={24}
                      color={'#7D7D7D'}
                    />
                  </TouchableOpacity>
                }
              />
              <Text_Input
                icon={<LockIcon />}
            width={Dimensions.get('screen').width/1.1}

                placeholder={'Confirm Password'}
                value={password}
                onChangeText={text => {
                  setPassword(text);
                }}
                error={passwordError}
                IsFocus={passwordFocus}
                onFocus={() => {
                  setPasswordFocus(true);
                }}
                onBlur={event => {
                  setPasswordFocus(false);
                }}
                secureTextEntry={iconPass}
                isActive={true}
                IdIcon={
                  <TouchableOpacity
                    onPress={() => {
                      setIconPass(prev => !prev);
                    }}>
                    <Ionicons
                      name={iconPass ? 'eye-off' : 'eye'}
                      size={24}
                      color={'#7D7D7D'}
                    />
                  </TouchableOpacity>
                }
              />
            </View>
         
           
            <View style={{justifyContent:"center",alignItems:"center",marginTop:20,}}>
          <Primary_Button
          backgroundColor={primary}
          Text_color={white}
          Button_Title={'Sign Up'}
          width={Dimensions.get('screen').width/1.2}

          />
        </View>
            
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",marginTop:20,marginBottom:20}}>
          <Text style={styles.forgotpassword_text}>Already have an Account?</Text>
          <TouchableOpacity
            onPress={()=>navigation.navigate('LoginScreen')}
          
          >

              <Text style={[styles.forgotpassword_text,{left:5,fontFamily:SemiBold,color:primary}]}>Login</Text>
          </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};
export default SignupScreen;
const styles = StyleSheet.create({
  Main_Container: {
    flex: 1,
    backgroundColor: white,
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
  wellcomedetailText: {
    fontSize: 13,
    opacity: 0.9,
    fontFamily: Regular,
    color: grey,
  },
  LoginText: {
    fontSize: 25,
    fontFamily: Bold,
    color: black,
  },
  SignupCotnianer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  titleLogo: {
    fontSize: 25,
    paddingHorizontal: 20,
    marginBottom: 30,
    fontFamily: SemiBold,
    color: black,
  },
  backIcon: {
    marginTop: 30,
    marginHorizontal: 30,
  },
  ContantContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  savetitile: {
    fontSize: 16,
    fontFamily: Medium,
    color: black,
  },
  Savedatacontianer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  saveTitleContianer: {
    flexDirection: 'row',
  },

  forgotpassword_text: {
    fontSize: 14,
    fontFamily: Regular,
    color: '#E53636',
    paddingHorizontal: 20,
    right: 10,
  },
  wellcomeContianer: {
    marginTop: 20,
    marginBottom: 30,
    marginHorizontal: 5,
  },
  wellcomeText: {
    fontSize: 20,
    fontFamily: Bold,
    color: black,
  },
  donContianer: {
    alignItems: 'center',
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dontText: {
    fontSize: 14,
    fontFamily: Regular,
    color: black,
  },
  OrdataContianer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  lineActiveCotnainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    right: 20,
    borderBottomWidth: 6,
    width: 50,
    borderRadius: 100,
    borderBottomColor: '#000000BA',
    marginHorizontal: 10,
    marginBottom: 20,
    borderRadius: 30,
  },
  orText: {
    fontSize: 14,
    fontFamily: Medium,
    color: '#89898B',
  },
  GoogleButton: {
    width: Dimensions.get('screen').width / 1.1,
    height: 65,
    borderWidth: 1,
    borderColor: black,
    borderRadius: 60,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 40,
    alignItems: 'center',
    marginBottom: 20,
    alignSelf: 'center',
  },
  Button_Title: {
    fontSize: 18,
    fontFamily: Medium,
    color: ThemeLightTextColor,
    position: 'absolute',
    alignItems: 'center',
    left: 0,
    right: 0,
    textAlign: 'center',
  },
  icon: {
    position: 'absolute',
    paddingHorizontal: 30,
  },
  pattternView: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  welcomeText: {
    fontSize: 24,
    fontFamily: Bold,
    color: secondary,
  },
  welcomeTextDetail: {
    fontSize: 16,
    fontFamily: Regular,
    color: secondary,
  },
  forgotpassword_text: {
    fontSize: 16,
    fontFamily: Medium,
    color: black,
  },
  GenderContianer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
});
