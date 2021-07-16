import React from "react";

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBh5xvcvFTbkvb_mHYauCC1sjx1ZgREWDU",
  authDomain: "taskbash.firebaseapp.com",
  projectId: "taskbash",
  storageBucket: "taskbash.appspot.com",
  messagingSenderId: "21742881721",
  appId: "1:21742881721:web:b8589a91687a3b4fa44468",
  measurementId: "G-VDNB280PS8",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Todo from "./screens/todo";
import Signup from "./screens/signup";
import Signin from "./screens/signin";
import Task from "./screens/task"

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Todo"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Todo" component={Todo} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Task" component={Task} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
