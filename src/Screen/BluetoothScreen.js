import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Linking, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Medium, Regular } from '../Utils/Fonts/FontFamily';
import { backgroundColor, black, blue, primary, white } from '../Utils/Colors/Colors';
import Primary_Button from '../Components/PrimaryButton';

const BluetoothScreen = ({ navigation }) => {
  const openWifiSettings = () => {
    if (Platform.OS === 'android') {
      Linking.openSettings();
    } else if (Platform.OS === 'ios') {
      Linking.openURL('app-settings:');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Babby Petting</Text>
      <View style={styles.iconContainer}>
        <View style={styles.iconBorder}>
          <Icon name="wifi" size={60} color={primary} />
        </View>
        <Text style={styles.bluthoothText}>Babb Patting Put your Wifi device into pairing mode. This may involve pressing and holding a button on the device until you see a blinking light indicating it's ready to pair.</Text>
      </View>
      <View style={{ alignSelf: "center", marginTop: 20 }}>
        <Primary_Button
          backgroundColor={primary}
          Button_Title={'Turn on Wifi'}
          Text_color={white}
          width={Dimensions.get('screen').width / 1.3}
          onPress={openWifiSettings} // Call function to open WiFi settings
        />
          <Primary_Button
          backgroundColor={primary}
          Button_Title={'Home'}
          Text_color={white}
          width={Dimensions.get('screen').width / 1.3}
          onPress={()=>navigation.navigate("HomeScreen")} // Call function to open WiFi settings
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>By Creating an account you agree to BabbyPatting's 
          <Text style={[styles.footerText, { color: blue, fontFamily: Medium }]}> Privacy Policy</Text>
          <Text style={styles.footerText}>{' '} and</Text>
          <Text style={[styles.footerText, { color: blue, fontFamily: Medium }]}> Terms and condition</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: backgroundColor
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: "center"
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bluthoothText: {
    fontSize: 16,
    lineHeight: 25,
    marginTop: 20,
    marginBottom: 20,
    fontFamily: Regular,
    color: black,
  },
  iconBorder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  connectButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  connectButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 120
  },
  footerText: {
    fontSize: 14,
    textAlign: "center",
    fontFamily: Regular,
    color: primary
  },
});

export default BluetoothScreen;
