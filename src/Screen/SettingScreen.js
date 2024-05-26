import React, {useState} from 'react';
import {
  Text,
  View,
  Switch,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {
  primary,
  white,
  grey,
  backColor,
  blue,
  black,
} from '../Utils/Colors/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome5'; // Import FontAwesome from @expo/vector-icons
import {Medium, Regular} from '../Utils/Fonts/FontFamily';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SettingScreen = ({navigation}) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const toggleNotifications = () => {
    setNotificationsEnabled(previousState => !previousState);
  };

  const toggleDarkMode = () => {
    setDarkModeEnabled(previousState => !previousState);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backIcon}>
          <Ionicons name="arrow-back" size={24} color={white} />
        </TouchableOpacity>
        <Text style={styles.profileTitle}>Profile</Text>
        <View></View>
      </View>

      <View style={styles.userContainer}>
        <Image
          source={require('../Utils/Images/Images/profile.png')}
          style={styles.userIcon}
        />
      </View>

      <TouchableOpacity style={styles.dataBox}>
        <FontAwesome name="user" size={24} color={primary} />
        <View style={styles.dataInfo}>
          <Text style={styles.dataTitle}>John Doe</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.dataBox}>
        <FontAwesome name="envelope" size={24} color={primary} />
        <View style={styles.dataInfo}>
          <Text style={styles.dataTitle}>john.doe@example.com</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.dataBox}>
        <FontAwesome name="calendar" size={24} color={primary} />
        <View style={styles.dataInfo}>
          <Text style={styles.dataTitle}>01/01/1990</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.dataBox}>
        <FontAwesome name="transgender-alt" size={24} color={primary} />
        <View style={styles.dataInfo}>
          <Text style={styles.dataTitle}>Male</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonBox} onPress={()=>navigation.navigate('RecordScreen')}>
        <FontAwesome name="book" size={24} color={primary} />
        <Text style={styles.buttonText}>Records</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonBox} onPress={()=>navigation.navigate('EditPersoanlInfoScreen')}>

        <FontAwesome name="edit" size={24} color={primary} />
        <Text style={styles.buttonText}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primary,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  backIcon: {
    marginRight: 10,
  },
  profileTitle: {
    fontSize: 24,
    fontFamily: Medium,
    color: white,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'center',
  },
  userIcon: {
    width: 120,
    height: 120,
    marginRight: 10,
    borderRadius: 20,
  },
  userName: {
    fontSize: 18,
    fontFamily: Medium,
    color: white,
  },
  userInfo: {
    fontSize: 14,
    fontFamily: Regular,
    color: white,
  },
  dataBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: white,
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  dataInfo: {
    marginLeft: 10,
  },
  dataTitle: {
    fontSize: 16,
    fontFamily: Medium,
    color: primary,
  },
  data: {
    fontSize: 14,
    fontFamily: Regular,
    color: black,
  },
  buttonBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: white,
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: Medium,
    color: primary,
    marginLeft: 10,
  },
});

export default SettingScreen;
