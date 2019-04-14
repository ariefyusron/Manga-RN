import { StyleSheet } from "react-native";

import { color } from "../../themes";

export default StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 30
  },
  icon: {
    color: color.main,
    fontSize: 18,
    marginRight: 10
  },
  textInput: {
    fontSize: 16,
    padding: 0,
    flex: 1
  }
});
