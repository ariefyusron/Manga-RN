import React, { Component, Fragment } from "react";
import { StatusBar } from "react-native";

import AppNavigation from "./app/navigation/AppNavigation";

class App extends Component {
  render() {
    return (
      <Fragment>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <AppNavigation />
      </Fragment>
    );
  }
}

export default App;
