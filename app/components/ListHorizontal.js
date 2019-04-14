import React from "react";
import { View, Text, FlatList, Image } from "react-native";

import styles from "./styles/ListHorizontalStyle";

const ListHorizontal = props => (
  <FlatList
    horizontal
    showsHorizontalScrollIndicator={false}
    style={styles.container}
    data={props.data}
    keyExtractor={(item, index) => index.toString()}
    renderItem={({ item }) => (
      <View style={styles.content}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.chapter}>{item.chapter}</Text>
      </View>
    )}
  />
);

export default ListHorizontal;
