import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator
} from "react-navigation";

import { color } from "../themes";
import Home from "../containers/Home";
import Explore from "../containers/Explore";
import Saved from "../containers/Saved";
import Account from "../containers/Account";

const app = createBottomTabNavigator(
  {
    Home,
    Explore,
    Saved,
    Account
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = `home${focused ? "" : "-outline"}`;
        } else if (routeName === "Explore") {
          iconName = `compass${focused ? "" : "-outline"}`;
        } else if (routeName === "Saved") {
          iconName = `book${focused ? "" : "-outline"}`;
        } else if (routeName === "Account") {
          iconName = `account${focused ? "" : "-outline"}`;
        }

        // You can return any component that you like here!
        return <Icon name={iconName} size={22} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: color.main,
      inactiveTintColor: "#474747",
      labelStyle: {
        fontSize: 12
      },
      style: {
        height: 60,
        paddingVertical: 8
      }
    }
  }
);

const authStatus = createSwitchNavigator({
  App: app
});

export default createAppContainer(authStatus);
