import React, { Component } from "react";
import { View, Dimensions, Text } from "react-native";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";

import styles from "./styles/CarouselStyle";
import { color } from "../themes";

const deviceWidth = Dimensions.get("window").width;

class MyCarousel extends Component {
  constructor() {
    super();
    this.state = {
      active: 0
    };
  }

  renderItem = ({ item }, parallaxProps) => (
    <View style={styles.slide}>
      <View>
        <ParallaxImage
          containerStyle={styles.image}
          source={{ uri: item.image }}
          dimensions={{ width: deviceWidth, height: 215 }}
          {...parallaxProps}
        />
        <View style={styles.wrapTitle}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </View>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <Carousel
          data={this.props.data}
          renderItem={this.renderItem}
          sliderWidth={deviceWidth}
          itemWidth={deviceWidth}
          hasParallaxImages={true}
          autoplay
          autoplayInterval={3000}
          loop
          onSnapToItem={index => this.setState({ active: index })}
        />
        <View style={styles.wrapIndicator}>
          {this.props.data.map((item, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                {
                  backgroundColor:
                    this.state.active === index ? color.main : "#C4C4C4"
                }
              ]}
            />
          ))}
        </View>
      </View>
    );
  }
}

export default MyCarousel;
