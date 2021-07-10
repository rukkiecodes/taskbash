import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import todo from "../styles/todo"

export default function Todo() {
  return (
    <View style={styles.container}>
      <View style={styles.head_button_view}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.button_text}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.add_todo_view}>
        <TouchableOpacity style={styles.add_todo_view_button}>
          <Text style={styles.add_todo_view_button_text}>Add new todo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = todo
