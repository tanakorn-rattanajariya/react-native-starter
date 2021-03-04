import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import Home from "pages/home";
const HomeStack = createStackNavigator();
function HomeStackScreen(props) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home">
        {(navigation) => {
          const prop = { ...props, ...navigation };
          return <Home {...prop} />;
        }}
      </HomeStack.Screen>
    </HomeStack.Navigator>
  );
}
export default function Routing(props) {
  return (
    <NavigationContainer>
      <HomeStackScreen {...props} />
    </NavigationContainer>
  );
}