import React, { Component, Fragment } from "react";
import { StatusBar } from "react-native";

import { color } from "./app/themes";
import AppNavigation from "./app/navigation/AppNavigation";

class App extends Component {
  render() {
    return (
      <Fragment>
        <StatusBar backgroundColor={color.main} barStyle="light-content" />
        <AppNavigation />
      </Fragment>
    );
  }
}

export default App;
