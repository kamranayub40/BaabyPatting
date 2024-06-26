import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Assuming you have a library for icons
import axios from 'axios';
import { Bold, Medium, Regular } from '../Utils/Fonts/FontFamily';
import {
  backgroundColor,
  black,
  blue,
  primary,
  red,
  white,
} from '../Utils/Colors/Colors';
import Primary_Button from '../Components/PrimaryButton';

const HomeScreen = ({ navigation }) => {
  const [selectedSleepButton, setSelectedSleepButton] = useState(null);
  const [selectedCircleButton, setSelectedCircleButton] = useState(null);
  const [selectedSpeedButton, setSelectedSpeedButton] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state
  const [isStarted, setIsStarted] = useState(false); // Track if the process is started

  const handleGetStarted = async () => {
    setLoading(true); // Start loading

    // Constructing the data payload
    const data = {
      Cmd: '0x01', // Start command
      Timer: '0xXX', // Placeholder for the timer value
      Style: '0xXX', // Placeholder for the style value
      Speed: '0xXX', // Placeholder for the speed value
    };

    try {
      // Sending the data payload
      const response = await axios.post('http://12.1.1.1/post', data);
      console.log('Data sent successfully:', response.data);
      setIsStarted(true); // Update state to indicate process started
    } catch (error) {
      console.error('Error sending data:', error);
    } finally {
      setLoading(false); // End loading
    }
  };

  const handleStop = async () => {
    setLoading(true); // Start loading

    // Constructing the data payload for stopping
    const data = {
      Cmd: '0x02', // Stop command
      Timer: '0x00',
      Style: '0x00',
      Speed: '0x00',
    };

    try {
      // Sending the data payload
      const response = await axios.post('http://12.1.1.1/post', data);
      console.log('Stop command sent successfully:', response.data);
      setIsStarted(false); // Reset the state to indicate process stopped
    } catch (error) {
      console.error('Error sending stop command:', error);
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Babby Petting</Text>
      <View style={styles.iconContainer}>
        <Text style={[styles.title, { fontSize: 30, fontFamily: Regular }]}>
          HI Marshall
        </Text>
        <Text style={styles.bluthoothText}>Let's get your baby to sleep</Text>
      </View>
      <View style={styles.timerContaner}>
        <View style={styles.timerContaner1}>
          <View style={styles.timerContaner2}>
            <Text style={styles.timeTitle}>15:00</Text>
          </View>
        </View>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[
            styles.button,
            selectedSleepButton === 'SleepPatter' && styles.selectedButton,
          ]}
          onPress={() => setSelectedSleepButton('SleepPatter')}
        >
          <Text
            style={[
              styles.buttonText,
              selectedSleepButton === 'SleepPatter' && styles.selectedButtonText,
            ]}
          >
            SleepPatter
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            selectedSleepButton === 'SleepPilllow' && styles.selectedButton,
          ]}
          onPress={() => setSelectedSleepButton('SleepPilllow')}
        >
          <Text
            style={[
              styles.buttonText,
              selectedSleepButton === 'SleepPilllow' && styles.selectedButtonText,
            ]}
          >
            SleepPilllow
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            selectedSleepButton === 'SleepSound' && styles.selectedButton,
          ]}
          onPress={() => setSelectedSleepButton('SleepSound')}
        >
          <Text
            style={[
              styles.buttonText,
              selectedSleepButton === 'SleepSound' && styles.selectedButtonText,
            ]}
          >
            SleepSound
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, backgroundColor: '#cdc9d8', marginTop: 20 }}>
        <View style={styles.rowView}>
          <TouchableOpacity
            style={[
              styles.circleButton,
              selectedCircleButton === 'One' && styles.selectedCircleButton,
            ]}
            onPress={() => setSelectedCircleButton('One')}
          >
            <Icon
              name="hand-left-outline"
              size={20}
              color={selectedCircleButton === 'One' ? white : black}
            />
            <Text
              style={[
                styles.circleButtonText,
                selectedCircleButton === 'One' && styles.selectedButtonText,
              ]}
            >
              One
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.circleButton,
              selectedCircleButton === 'Two' && styles.selectedCircleButton,
            ]}
            onPress={() => setSelectedCircleButton('Two')}
          >
            <Icon
              name="hand-left-outline"
              size={20}
              color={selectedCircleButton === 'Two' ? white : black}
            />
            <Text
              style={[
                styles.circleButtonText,
                selectedCircleButton === 'Two' && styles.selectedButtonText,
              ]}
            >
              Two
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.circleButton,
              selectedCircleButton === 'Three' && styles.selectedCircleButton,
            ]}
            onPress={() => setSelectedCircleButton('Three')}
          >
            <Icon
              name="heart"
              size={20}
              color={selectedCircleButton === 'Three' ? white : black}
            />
            <Text
              style={[
                styles.circleButtonText,
                selectedCircleButton === 'Three' && styles.selectedButtonText,
              ]}
            >
              Three
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[
              styles.button,
              selectedSpeedButton === 'Silow' && styles.selectedButton,
            ]}
            onPress={() => setSelectedSpeedButton('Silow')}
          >
            <Text
              style={[
                styles.buttonText,
                selectedSpeedButton === 'Silow' && styles.selectedButtonText,
                { paddingHorizontal: 20 },
              ]}
            >
              Silow
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              selectedSpeedButton === 'Medium' && styles.selectedButton,
              { paddingHorizontal: 20 },
            ]}
            onPress={() => setSelectedSpeedButton('Medium')}
          >
            <Text
              style={[
                styles.buttonText,
                selectedSpeedButton === 'Medium' && styles.selectedButtonText,
                { paddingHorizontal: 20 },
              ]}
            >
              Medium
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              selectedSpeedButton === 'Fast' && styles.selectedButton,
              { paddingHorizontal: 20 },
            ]}
            onPress={() => setSelectedSpeedButton('Fast')}
          >
            <Text
              style={[
                styles.buttonText,
                selectedSpeedButton === 'Fast' && styles.selectedButtonText,
              ]}
            >
              Fast
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignSelf: 'center', marginTop: 20 }}>
          {isStarted ? (
            <Primary_Button
              backgroundColor={red} // Change to red background
              Text_color={white}
              Button_Title={'Stop'} // Change button title to 'Stop'
              onPress={handleStop} // Call handleStop function on press
            />
          ) : (
            <Primary_Button
              backgroundColor={primary}
              Text_color={white}
              Button_Title={'Get Started'}
              onPress={handleGetStarted}
            />
          )}
        </View>

        {loading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={primary} />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: Bold,
    marginTop: 20,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bluthoothText: {
    fontSize: 16,
    fontFamily: Regular,
    color: black,
  },
  timerContaner: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 200 / 2,
    borderWidth: 3,
    borderColor: primary,
  },
  timerContaner1: {
    width: 180,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 200 / 2,
    borderWidth: 30,
    borderColor: '#a7a6ba',
  },
  timerContaner2: {
    width: 160,
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 150,
    backgroundColor: '#cad1e1',
  },
  timeTitle: {
    fontSize: 30,
    fontFamily: Medium,
    color: primary,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    padding: 10,
    backgroundColor: white,
    borderRadius: 5,
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: primary,
  },
  buttonText: {
    color: black,
    fontSize: 14,
    fontFamily: Regular,
  },
  selectedButtonText: {
    color: white,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
  },
  circleButton: {
    width: 100,
    height: 120,
    borderRadius: 10,
    backgroundColor: white,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: primary,
  },
  selectedCircleButton: {
    backgroundColor: primary,
  },
  circleButtonText: {
    color: primary,
    fontSize: 15,
    fontFamily: Medium,
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
