import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";

import { ListColumn } from "../components";
import styles from "./styles/ExploreStyle";

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
      ],
      genres: [
        { label: "Action", color: "#FE2742" },
        { label: "Adventure", color: "#FE4032" },
        { label: "Comedy", color: "#FE6A3A" },
        { label: "Drama", color: "#FE7F12" }
      ]
    };
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: "#fff" }}>
        <View style={styles.genre}>
          <View style={styles.headerGenre}>
            <Text style={styles.titleHeaderGenre}>Genres</Text>
            <Text style={styles.otherHeaderGenre}>Selengkapnya</Text>
          </View>
          <View style={styles.listGenre}>
            {this.state.genres.map((item, index) => (
              <View
                key={index}
                style={[{ backgroundColor: item.color }, styles.button]}
              >
                <Text style={styles.textButton}>{item.label}</Text>
              </View>
            ))}
          </View>
        </View>
        <ListColumn data={this.state.data} />
      </ScrollView>
    );
  }
}

export default Explore;
