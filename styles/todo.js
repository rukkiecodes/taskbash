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
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
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
  scrollview_container: {
    flex: 1,
    width: "100%",
    marginTop: "10%",
    marginBottom: "5%"
  },
  scrollview: {
    width: "100%"
  },
  todos: {
    width: "100%",
    backgroundColor: colors.purple,
    paddingHorizontal: 20,
    height: 55,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 10
  },
  todos_text: {
    color: colors.white,
    fontSize: 16
  },
});
