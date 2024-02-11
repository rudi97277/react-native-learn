import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const FlatListExample = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { key: "Kevin" },
          { key: "Kevin1" },
          { key: "Kevin2" },
          { key: "Kevin3" },
          { key: "Kevin4" },
          { key: "Kevin5" },
          { key: "Kevin6" },
          { key: "Kevin7" },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
};

export default FlatListExample;
