import { StyleSheet } from "react-native";

import { color } from "../../themes";

export default StyleSheet.create({
  search: {
    paddingHorizontal: 17.5,
    marginTop: 21
  },
  genre: {
    paddingHorizontal: 13,
    marginVertical: 35
  },
  headerGenre: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5 / 2,
    paddingVertical: 5
  },
  titleHeaderGenre: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000"
  },
  otherHeaderGenre: {
    fontSize: 14,
    color: color.other
  },
  listGenre: {
    flexDirection: "row",
    paddingVertical: 5
  },
  button: {
    paddingHorizontal: 17,
    paddingVertical: 8,
    marginHorizontal: 5 / 2,
    borderRadius: 30
  },
  textButton: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff"
  }
});
