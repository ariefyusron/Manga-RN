import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";

import styles from "./styles//ListColumnStyle";
import { color } from "../themes";

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
          <View style={styles.wrapImage}>
            <ActivityIndicator color={color.other} />
            <Image source={{ uri: item.image }} style={styles.image} />
          </View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.chapter}>{item.chapter}</Text>
        </View>
      )}
    />
  </View>
);

export default ListColumn;
