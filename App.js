import React, { Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Audio } from "expo-av";


const colorList = {
  1: "#E44236",
  2: "#3498DB",
  3: "#0A3D62",
  4: "#67E6DC",
  5: "#6AB04A",
  6: "#F4C724",
  7: "#FFF222",
  8: "#99AAAB",
  9: "#4C4B4B",
  10: "#F5BCBA"
};

const soundList = {
  one: require("./assets/one.wav"),
  two: require("./assets/two.wav"),
  three: require("./assets/three.wav"),
  four: require("./assets/four.wav"),
  five: require('./assets/five.wav'),
  six: require('./assets/six.wav'),
  seven: require('./assets/seven.wav'),
  eight: require('./assets/eight.wav'),
  nine: require('./assets/nine.wav'),
  ten: require('./assets/ten.wav')
};



export default class SpanishSound extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  //Playsound function from Expo
  playSound = async (buttonNumber) =>
  {
    const soundObject = new Audio.Sound();
    try
    {
      let soundPath = soundList[buttonNumber];
      await soundObject.loadAsync(soundPath);
      // Your sound is playing!
      await soundObject.playAsync()
        .then(async playbackStatus =>
        {
          setTimeout(() =>
          {
            soundObject.unloadAsync();
          }, playbackStatus.playableDurationMillis);
        })
      .catch ((error) => { console.log(error) })
    }
    catch (error)
    {
      // An error occurred!
      console.log('Error Playing sound:' + error)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoView}>
          <Text style={styles.logoText}>Spanish Sound App</Text>
          <Image
            source={require("./assets/logo.png")}
            style={{ height: 100, width: 100, alignSelf: "center" }}
          />
        </View>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={[styles.buttonTouch, { backgroundColor: colorList[1] }]}
            onPress={() => {
              this.playSound("one");
            }}
          >
            <Text style={[styles.buttonText]}>One</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.buttonTouch, { backgroundColor: colorList[2] }]}
            onPress={() => {
              this.playSound("two");
            }}
          >
            <Text style={[styles.buttonText]}>Two</Text>
          </TouchableOpacity>


        </View>





      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  logoView: {
    marginTop: 50,

  },
  logoText: {
    fontSize: 40,
    margin: 30,
    alignSelf: "center"
  },
  buttonText:
  {
    fontSize: 25,
    alignSelf: 'center',
    color:'white'
  },
  buttonTouch:
  {
    marginTop: 20,
    marginHorizontal:5,
    height: 100,
    width: 100,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent:'center'
  }
});

