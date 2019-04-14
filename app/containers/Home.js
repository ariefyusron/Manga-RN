import React, { Component } from "react";
import { ScrollView, Text } from "react-native";

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
      <ScrollView>
        <Text>Home</Text>
        <Carousel data={this.state.data} />
        <ListHorizontal
          title="Top Manga"
          data={this.state.data}
          marginTop={20}
        />
        <ListHorizontal title="Recent Update" data={this.state.data} />
      </ScrollView>
    );
  }
}

export default Home;
