import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Pressable
} from "react-native";
import todo from "../styles/todo";
import colors from "../styles/colors";

export default function Todo() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.dark} />
      <View style={styles.head_button_view}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.button_text}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <SafeAreaView style={styles.scrollview_container}>
        <ScrollView style={styles.scrollview}>
          <Pressable style={styles.todos}>
            <Text style={styles.todos_text}>New Todo</Text>
          </Pressable>
          <Pressable style={styles.todos}>
            <Text style={styles.todos_text}>Overdue Todo</Text>
          </Pressable>
          <Pressable style={styles.todos}>
            <Text style={styles.todos_text}>Done Todo</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
      <View style={styles.add_todo_view}>
        <TouchableOpacity style={styles.add_todo_view_button}>
          <Text style={styles.add_todo_view_button_text}>Add new todo</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = todo;
