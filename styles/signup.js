import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import colors from "./colors";

export default StyleSheet.create({
  container: {
    backgroundColor: colors.dark,
    paddingHorizontal: 10,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  back_view: {
    width: "100%",
    height: 50,
    alignItems: "flex-start",
    justifyContent: "center",
  },

  back_button: {
    width: "15%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },

  form_view: {
    width: "100%",
  },
  head_texts: {
    flexDirection: "column",
    marginBottom: 50
  },
  head_texts_text_1: {
    fontSize: 48,
    color: colors.white,
  },
  head_texts_text_2: {
    fontSize: 14,
    color: colors.white,
  },
  form_view_inputs: {
    flexDirection: "column",
  },
  form_view_inputs_input_1: {
    width: "100%",
    backgroundColor: colors.white,
    height: 45,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 14,
  },
  form_view_inputs_input_2: {
    width: "100%",
    backgroundColor: colors.white,
    height: 45,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 14,
    marginTop: 15,
  },
  signin_link: {
    width: "100%",
    height: 45,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  signin_link_text: {
    color: colors.white,
    fontSize: 14,
  },
  signup_button: {
    width: "100%",
    backgroundColor: colors.purple,
    height: 45,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  signup_button_text: {
    color: colors.white,
    fontSize: 14,
  },
});
