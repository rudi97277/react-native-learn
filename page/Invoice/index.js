import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Add from "./Add";
import Summary from "./Summary";
import History from "./History";
import AntDesingIcon from "react-native-vector-icons/AntDesign";
import { useState } from "react";
import { colors } from "../../const/style";

const Tab = createBottomTabNavigator();

const Invoice = () => {
  const [badge, setBadge] = useState(null);
  return (
    <Tab.Navigator
      initialRouteName="Add"
      screenOptions={{
        tabBarLabelStyle: {
          paddingBottom: 4,
          fontSize: 12,
          fontWeight: "400",
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
          height: 55,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Summary"
        component={Summary}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesingIcon name="profile" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesingIcon name="pluscircleo" color={color} size={size} />
          ),
          tabBarBadge: badge,
        }}
      >
        {(props) => <Add {...props} setBadge={setBadge} />}
      </Tab.Screen>
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesingIcon name="clockcircleo" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Invoice;
