import { Dimensions, FlatList, TouchableOpacity } from "react-native";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesingIcon from "react-native-vector-icons/AntDesign";
import { colors } from "../const/style";

const containerPadding = 20;
const screenWidth = Dimensions.get("window").width;
const numColumns = 2;
const gap = 20;
const availableSpace =
  screenWidth - (numColumns - 1) * gap - containerPadding * 2;
const itemSize = availableSpace / numColumns;

const styles = StyleSheet.create({
  container: {
    padding: containerPadding,
  },
  menu: {
    justifyContent: "center",
    alignItems: "center",
    width: itemSize,
    height: itemSize,
    backgroundColor: colors.primary,
    borderRadius: 10,
    // shadowRadius: 20,
  },
  icon: {
    fontSize: 50,
    color: colors.white,
  },
  text: {
    fontSize: 20,
    color: colors.white,
  },
});

const listMenu = [
  {
    text: "Invoice",
    antdIconName: "profile",
    route: "Invoice",
  },
];

const Item = ({ item, index, navigation }) => (
  <TouchableOpacity
    key={index}
    style={styles.menu}
    onPress={() =>
      item?.route !== null
        ? navigation.replace(item.route)
        : alert(`Development in progress ${index}`)
    }
  >
    <AntDesingIcon name={item.antdIconName} style={styles.icon} />
  </TouchableOpacity>
);

const Menu = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={listMenu}
        numColumns={numColumns}
        contentContainerStyle={{ gap }}
        columnWrapperStyle={{ gap }}
        renderItem={({ item, index }) => (
          <Item item={item} index={index} navigation={navigation} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Menu;
