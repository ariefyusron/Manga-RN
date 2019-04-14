import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";

import { ListColumn } from "../components";

class Explore extends Component {
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
        <ListColumn data={this.state.data} />
      </ScrollView>
    );
  }
}

export default Explore;
