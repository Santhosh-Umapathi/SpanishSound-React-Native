import React, { Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import { Audio } from "expo-av";


const colorList = {
  1: "#E44236",
  2: "#3498DB",
  3: "#0A3D62",
  4: "#67E6DC",
  5: "#6AB04A",
  6: "#F4C724",
  7: "#0A3D62",
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
            style={{ height: 100, width: 100, alignSelf: "center", marginBottom:10 }}
          />
        </View>
        <ScrollView>
          <View style={{ flexDirection: "row" }}>
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

            <TouchableOpacity
              style={[styles.buttonTouch, { backgroundColor: colorList[3] }]}
              onPress={() => {
                this.playSound("three");
              }}
            >
              <Text style={[styles.buttonText]}>Three</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={[styles.buttonTouch, { backgroundColor: colorList[4] }]}
              onPress={() => {
                this.playSound("four");
              }}
            >
              <Text style={[styles.buttonText]}>Four</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.buttonTouch, { backgroundColor: colorList[5] }]}
              onPress={() => {
                this.playSound("five");
              }}
            >
              <Text style={[styles.buttonText]}>Five</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.buttonTouch, { backgroundColor: colorList[6] }]}
              onPress={() => {
                this.playSound("six");
              }}
            >
              <Text style={[styles.buttonText]}>Six</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={[styles.buttonTouch, { backgroundColor: colorList[7] }]}
              onPress={() => {
                this.playSound("seven");
              }}
            >
              <Text style={[styles.buttonText]}>Seven</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.buttonTouch, { backgroundColor: colorList[8] }]}
              onPress={() => {
                this.playSound("eight");
              }}
            >
              <Text style={[styles.buttonText]}>Eight</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.buttonTouch, { backgroundColor: colorList[9] }]}
              onPress={() => {
                this.playSound("nine");
              }}
            >
              <Text style={[styles.buttonText]}>Nine</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", justifyContent:'center' }}>
            <TouchableOpacity
              style={[styles.buttonTouch, { backgroundColor: colorList[10] }]}
              onPress={() => {
                this.playSound("ten");
              }}
            >
              <Text style={[styles.buttonText]}>Ten</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems:'center'
  },
  logoView: {
    marginTop: 20,

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

