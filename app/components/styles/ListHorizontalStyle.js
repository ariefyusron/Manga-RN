import { StyleSheet } from "react-native";

import { color } from "../../themes";

export default StyleSheet.create({
  container: {
    marginTop: 35
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 10,
    justifyContent: "space-between"
  },
  headerTitle: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold"
  },
  otherLabel: {
    fontSize: 14,
    color: "#6F6B6B"
  },
  wrapContent: {
    paddingHorizontal: 20,
    marginTop: 10
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
