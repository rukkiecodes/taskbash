import { StyleSheet } from "react-native";
import colors from "./colors";

export default StyleSheet.create({
  container: {
    backgroundColor: "#121212",
    paddingHorizontal: 10,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  head_button_view: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  button: {
    alignItems: "center",
    backgroundColor: colors.purple,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  button_text: {
    color: colors.white,
    fontSize: 14,
    textTransform: "capitalize",
  },
  add_todo_view: {
    width: "100%",
  },
  add_todo_view_button: {
    backgroundColor: colors.purple,
    height: 45,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  add_todo_view_button_text: {
    color: colors.white,
    fontSize: 14,
  },
});
