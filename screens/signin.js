import React from "react";
import {
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Pressable,
  TextInput,
} from "react-native";
import todo from "../styles/todo";
import colors from "../styles/colors";
import signup from "../styles/signup";

export default function Todo({ navigation }) {
  const [text, onChangeText] = React.useState("Useless Text");
  return (
    <SafeAreaView style={signup.container}>
      <StatusBar backgroundColor={colors.dark} />
      <View style={signup.back_view}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={signup.back_button}
        >
          <Image
            source={require(// @ts-ignore
            "../assets/arrow_back.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={signup.form_view}>
        <View style={signup.head_texts}>
          <Text style={signup.head_texts_text_1}>Sign In</Text>
          <Text style={signup.head_texts_text_2}>Welcome back. Sign in and ge started</Text>
        </View>
        <View style={signup.form_view_inputs}>
          <TextInput
            style={signup.form_view_inputs_input_1}
            onChangeText={onChangeText}
            placeholder="Email"
          />
          <TextInput
            style={signup.form_view_inputs_input_2}
            onChangeText={onChangeText}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>
        <View style={signup.signin_link}>
          <Pressable onPress={() => navigation.navigate("Signup")}>
            <Text style={signup.signin_link_text}>
              Don't have an account?
            </Text>
          </Pressable>
        </View>
        <TouchableOpacity style={signup.signup_button}>
          <Text style={signup.signup_button_text}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = todo;
