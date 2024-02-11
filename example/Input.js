import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import FlatListExample from "../FlatListExample";
import SectionListExample from "./SectionListExample";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

const Input = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (email, password) => {
    alert(`email: ${email}, password: ${password}`);
    navigation.navigate("Home");
  };

  return (
    // <View style={styles.container}>
    //   <TextInput
    //     style={styles.input}
    //     underlineColorAndroid="transparent"
    //     placeholder="email"
    //     placeholderTextColor="#9a73ef"
    //     autoCapitalize="none"
    //     onChangeText={setEmail}
    //   />
    //   <TextInput
    //     style={styles.input}
    //     underlineColorAndroid="transparent"
    //     placeholder="password"
    //     placeholderTextColor="#9a73ef"
    //     autoCapitalize="none"
    //     onChangeText={setPassword}
    //   />
    //   <TouchableOpacity
    //     style={styles.submitButton}
    //     onPress={() => login(email, password)}
    //   >
    //     <Text style={styles.submitText}>Submit</Text>
    //   </TouchableOpacity>

    // </View>

    <Tab.Navigator>
      <Tab.Screen
        name="Flat List"
        component={FlatListExample}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Section List"
        component={SectionListExample}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1,
    paddingHorizontal: 5,
  },
  submitButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitText: {
    color: "white",
  },
});
