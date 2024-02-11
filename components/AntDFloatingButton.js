import { StyleSheet, Text, TouchableOpacity } from "react-native";
import AntDesingIcon from "react-native-vector-icons/AntDesign";
import { colors } from "../constant/style";

const AntDFloatingButton = ({
  iconName = "question",
  size = 25,
  color = null,
  backgroundColor = null,
}) => {
  const styles = StyleSheet.create({
    floatingButton: {
      position: "absolute",
      bottom: 20,
      right: 20,
      borderRadius: 100,
      padding: 10,
      elevation: 1,
      backgroundColor:
        backgroundColor !== null ? backgroundColor : colors.primary,
    },
  });

  return (
    <TouchableOpacity style={styles.floatingButton}>
      <AntDesingIcon
        name={iconName}
        size={size}
        color={color || colors.white}
      />
    </TouchableOpacity>
  );
};

export default AntDFloatingButton;
