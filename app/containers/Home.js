import React, { Component } from "react";
import { View, Text } from "react-native";

import { ListHorizontal, Carousel } from "../components";

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
      <View>
        <Text>Home</Text>
        <Carousel data={this.state.data} />
        <ListHorizontal data={this.state.data} />
      </View>
    );
  }
}

export default Home;
