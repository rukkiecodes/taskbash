import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Todo from "./screens/todo";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
