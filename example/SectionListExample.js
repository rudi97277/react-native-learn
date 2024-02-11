import React from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "black",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const SectionListExample = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          { title: "D", data: ["Devom", "dan", "Dominic"] },
          { title: "J", data: ["Jack", "jom", "Jim", "Joshua"] },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item) => `basicListEntry-${item}`}
      />
    </View>
  );
};

export default SectionListExample;
