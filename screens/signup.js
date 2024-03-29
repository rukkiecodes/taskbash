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
  ActivityIndicator,
  Alert,
} from "react-native";
import todo from "../styles/todo";
import colors from "../styles/colors";
import signup from "../styles/signup";

import firebase from "firebase";

export default function Todo({ navigation }) {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [spiner, onChangeSpiner] = React.useState(false);

  const signup_user = () => {
    onChangeSpiner(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        onChangeSpiner(false);
        navigation.navigate("Task");
      })
      .catch((error) => {
        onChangeSpiner(false);
        Alert.alert("An error has occured!!", `${error}`, [
          {
            text: "Cancel",
            style: "cancel",
          },
          { text: "OK" },
        ]);
      });
  };

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
          <Text style={signup.head_texts_text_1}>Sign Up</Text>
          <Text style={signup.head_texts_text_2}>Create your free account</Text>
        </View>
        <View style={signup.form_view_inputs}>
          <TextInput
            style={signup.form_view_inputs_input_1}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="Email"
          />
          <TextInput
            style={signup.form_view_inputs_input_2}
            onChangeText={onChangePassword}
            value={password}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>
        <View style={signup.signin_link}>
          <Pressable onPress={() => navigation.navigate("Signin")}>
            <Text style={signup.signin_link_text}>
              Already have an account?
            </Text>
          </Pressable>
        </View>
        <TouchableOpacity onPress={signup_user} style={signup.signup_button}>
          {spiner ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={signup.signup_button_text}>Sign Up</Text>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = todo;
