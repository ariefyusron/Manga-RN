import { StyleSheet } from "react-native";

import { color } from "../../themes";

export default StyleSheet.create({
  container: {
    paddingHorizontal: 11
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 7
  },
  headerTitle: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold"
  },
  otherLabel: {
    fontSize: 15,
    color: "#4C4747"
  },
  wrapContent: {
    marginTop: 16
  },
  content: {
    flex: 1 / 3,
    marginHorizontal: 5,
    marginBottom: 21
  },
  wrapImage: {
    width: "100%",
    height: 167,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 18,
    position: "absolute"
  },
  title: {
    fontSize: 15,
    color: "#000",
    marginTop: 9
  },
  chapter: {
    color: color.main,
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5
  }
});
