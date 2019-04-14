import React, { Component } from "react";
import { ScrollView, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

import { ListHorizontal, Carousel } from "../components";
import styles from "./styles/HomeStyles";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          title: "Nanatsu No Taizai",
          chapter: "Chapter 171",
          image: "https://cdn.myanimelist.net/images/anime/11/90089l.jpg"
        },
        {
          title: "Nanatsu No Taizai",
          chapter: "Chapter 171",
          image: "https://cdn.myanimelist.net/images/anime/11/90089l.jpg"
        },
        {
          title: "Nanatsu No Taizai",
          chapter: "Chapter 171",
          image: "https://cdn.myanimelist.net/images/anime/11/90089l.jpg"
        },
        {
          title: "Nanatsu No Taizai",
          chapter: "Chapter 171",
          image: "https://cdn.myanimelist.net/images/anime/11/90089l.jpg"
        },
        {
          title: "Nanatsu No Taizai",
          chapter: "Chapter 171",
          image: "https://cdn.myanimelist.net/images/anime/11/90089l.jpg"
        },
        {
          title: "Nanatsu No Taizai",
          chapter: "Chapter 171",
          image: "https://cdn.myanimelist.net/images/anime/11/90089l.jpg"
        }
      ]
    };
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: "#fff" }}>
        <View style={styles.header}>
          <Text style={styles.title}>HOME PAGE</Text>
          <View style={styles.wrapIcon}>
            <Icon style={styles.icon} name="magnifying-glass" />
          </View>
        </View>
        <Carousel data={this.state.data} />
        <ListHorizontal
          title="Top Manga"
          data={this.state.data}
          marginTop={20}
        />
        <ListHorizontal
          title="Recent Update"
          data={this.state.data}
          marginBottom={40}
        />
      </ScrollView>
    );
  }
}

export default Home;
