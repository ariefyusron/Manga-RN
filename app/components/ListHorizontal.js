import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";

import styles from "./styles/ListHorizontalStyle";

const ListHorizontal = props => (
  <View
    style={[
      props.marginTop ? { marginTop: props.marginTop } : styles.container,
      { marginBottom: props.marginBottom || 0 }
    ]}
  >
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
      <TouchableOpacity>
        <Text style={styles.otherLabel}>Selengkapnya</Text>
      </TouchableOpacity>
    </View>
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.wrapContent}
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
  </View>
);

export default ListHorizontal;
