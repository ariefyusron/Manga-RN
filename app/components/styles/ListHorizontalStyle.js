import { StyleSheet } from "react-native";

import { color } from "../../themes";

export default StyleSheet.create({
  container: {
    paddingHorizontal: 15
  },
  content: {
    width: 100,
    marginHorizontal: 5
  },
  image: {
    width: "100%",
    height: 140,
    borderRadius: 18
  },
  title: {
    fontSize: 13,
    color: "#000",
    marginTop: 7
  },
  chapter: {
    color: color.main,
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 4
  }
});
