import { StyleSheet, Text, TouchableOpacity } from "react-native";
import AntDesingIcon from "react-native-vector-icons/AntDesign";

const styles = StyleSheet.create({
  floating: {
    position: "absolute",
    right: 15,
    bottom: 15,
    backgroundColor: "#40a2e3",
    padding: 15,
    borderRadius: 30,
  },
});

const SaveButton = () => {
  return (
    <TouchableOpacity style={styles.floating}>
      <AntDesingIcon name="save" color="white" size={25} />
    </TouchableOpacity>
  );
};

export default SaveButton;
