import { StyleSheet } from "react-native";

import { color } from "../../themes";

export default StyleSheet.create({
  header: {
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  title: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold"
  },
  wrapIcon: {
    backgroundColor: color.main,
    width: 45,
    height: 30,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    color: "#fff",
    fontSize: 16
  }
});
