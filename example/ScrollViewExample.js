import React, { Component } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

class ScrollViewExample extends Component {
  state = {
    names: [
      { name: "Rudi1", id: 1 },
      { name: "Rudi2", id: 2 },
      { name: "Rudi3", id: 3 },
      { name: "Rudi4", id: 4 },
      { name: "Rudi5", id: 5 },
      { name: "Rudi6", id: 6 },
      { name: "Rudi7", id: 7 },
      { name: "Rudi8", id: 8 },
      { name: "Rudi9", id: 9 },
      { name: "Rudi10", id: 10 },
      { name: "Rudi11", id: 11 },
      { name: "Rudi12", id: 12 },
    ],
  };

  render() {
    return (
      <View>
        <ScrollView>
          {this.state.names.map((item, index) => (
            <View key={item.id} style={styles.item}>
              <Text>{item.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default ScrollViewExample;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 30,
    margin: 2,
    borderColor: "32a4944",
    borderWidth: 1,
    backgroundColor: "#d2f7f1",
  },
});
