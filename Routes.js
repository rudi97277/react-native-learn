import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Menu from "./page/Menu";
import Invoice from "./page/Invoice";

const Routes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Menu">
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Invoice"
        component={Invoice}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
