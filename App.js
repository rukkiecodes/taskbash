import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Todo from "./screens/todo";
import Signup from "./screens/signup"
import Signin from "./screens/signin"

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
