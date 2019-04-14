import { StyleSheet } from "react-native";

const border = 20;

export default StyleSheet.create({
  container: {
    paddingVertical: 10
  },
  slide: {
    paddingHorizontal: 10
  },
  image: {
    borderRadius: border
  },
  wrapTitle: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    position: "absolute",
    borderBottomStartRadius: border,
    borderBottomEndRadius: border,
    bottom: 0,
    width: "100%",
    padding: 5
  },
  title: {
    color: "#fff",
    fontSize: 14
  },
  wrapIndicator: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 3.5
  }
});
