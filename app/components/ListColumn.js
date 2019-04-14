import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";

import styles from "./styles//ListColumnStyle";

const ListColumn = props => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Manga List</Text>
      <TouchableOpacity>
        <Text style={styles.otherLabel}>Sort by Latest Update</Text>
      </TouchableOpacity>
    </View>
    <FlatList
      numColumns={3}
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

export default ListColumn;
