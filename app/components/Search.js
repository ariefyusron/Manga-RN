import React from "react";
import { View, Text, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

import styles from "./styles/SearchStyle";

const Search = () => (
  <View style={styles.container} elevation={5}>
    <Icon name="magnifying-glass" style={styles.icon} />
    <TextInput placeholder="Search Manga" style={styles.textInput} />
  </View>
);

export default Search;
