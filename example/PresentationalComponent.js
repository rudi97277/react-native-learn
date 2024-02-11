import { StyleSheet, Text, View } from "react-native";

const PresentationalComponent = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.myState} onPress={props.updateState}>
        {props.myState}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  myState: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default PresentationalComponent;
