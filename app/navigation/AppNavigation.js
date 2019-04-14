import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Home from "../containers/Home";

const authStatus = createSwitchNavigator({
  Home: Home
});

export default createAppContainer(authStatus);
