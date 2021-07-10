import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native';

import firebase from "firebase";
import '@firebase/firestore';

// var firebaseConfig = {
//   apiKey: "AIzaSyBh5xvcvFTbkvb_mHYauCC1sjx1ZgREWDU",
//   authDomain: "taskbash.firebaseapp.com",
//   projectId: "taskbash",
//   storageBucket: "taskbash.appspot.com",
//   messagingSenderId: "21742881721",
//   appId: "1:21742881721:web:7849f0ee4a4d2e43a44468",
//   measurementId: "G-1B2E967P6L"
// };

// if (!firebase.app.length) {
//   firebase.initializeApp(firebaseConfig)
// } else {
//   firebase.initializeApp(firebaseConfig)
// }

const background_image = require("../assets/ball1.png");
const logo = require("../assets/logo.png");

export default function Signin_screen ({ navigation }) {
  const [email] = useState("Email");
  const [password] = useState("Password");
  const [signin_button, set_signin_button] = useState("Sign In")

  const goto_signup = () => {
    navigation.navigate("Signup_screen")
  }
  const goto_todo = () => {
    navigation.navigate("Todo_screen")
  }

  const sign_in = () => {
    // firebase.auth().signInWithEmailAndPassword()
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.image_container}>
        <ImageBackground source={background_image} style={styles.background_image}>
          <View style={styles.background_image_view}>
            <Image
              style={styles.logo}
              source={logo}
            />
          </View>
        </ImageBackground>
      </View>
      <View style={styles.input_container}>
        <View
          style={
            {
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignContent: 'center',
            }
          }
        >
          <TouchableOpacity
            style={{
              backgroundColor: '#1A5CFF',
              width: '45%',
              height: 50,
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={{ color: 'white', fontSize: 18 }}>Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'rgba(153,153,153,0.5)',
              width: '45%',
              height: 50,
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={goto_signup}
          >
            <Text style={{ color: '#434343', fontSize: 18 }}>Sign Up</Text>
          </TouchableOpacity>
        </View >
        <TextInput
          style={styles.input}
          placeholder={email}
        />
        <TextInput
          style={styles.input}
          placeholder={password}
        />
        <View style={{ width: '100%' }}>
          <Text style={styles.forgot_password_text}>Forgot Paswsord?</Text>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity onPress={goto_todo} style={styles.signin_button}>
            <Text style={styles.signin_button_text}>{signin_button}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  image_container: {
    width: '100%',
    height: '55%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: -90,
  },
  background_image: {
    width: '100%',
    height: '115%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  background_image_view: {
    width: '100%',
    height: '100%',
    padding: 20,
    justifyContent: 'center',
    alignContent: 'center'
  },
  logo: {
    marginTop: 150,
    width: '70%',
    height: 71
  },
  input_container: {
    padding: 20,
  },
  input: {
    height: 50,
    width: "100%",
    borderColor: "#C0C0C0",
    borderWidth: 1,
    borderRadius: 50,
    paddingLeft: 20,
    backgroundColor: "#fff",
    marginTop: 20,
  },
  forgot_password_text: {
    color: '#434343',
    marginTop: 20,
    fontSize: 14
  },
  signin_button_text: {
    color: 'white',
    fontSize: 18
  },
  signin_button: {
    backgroundColor: "#1A5CFF",
    width: "100%",
    height: 50,
    marginTop: 20,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  buttons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  }
});
