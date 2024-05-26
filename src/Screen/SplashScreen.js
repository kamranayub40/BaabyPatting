import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import FocusAwareStatusBar from '../Components/FocusAwareStatusBar';
import MainLogoIcon from '../Utils/Images/Icons/MainLogoIcon';
import {backColor, black, primary, white} from '../Utils/Colors/Colors';
import { SemiBold } from '../Utils/Fonts/FontFamily';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('BluetoothScreen');
    }, 2000);
  }, []);
  return (
    <View style={styles.Main_Container}>
      <FocusAwareStatusBar
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        translucent={true}
      />
      <View style={styles.MainLogo}>
        <Text style={{fontSize:25,fontFamily:SemiBold,color:black}}>Babby Petting</Text>
      </View>
    </View>
  );
};

export default SplashScreen;
const styles = StyleSheet.create({
  Main_Container: {
    flex: 1,
    backgroundColor:white
  },
  MainLogo: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
