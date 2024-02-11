import { useEffect, useRef, useState } from "react";
import {
  Button,
  Modal,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../../constant/style";
import AntDesingIcon from "react-native-vector-icons/AntDesign";

const AddFormModal = ({ showModal = false, hideModal, setList, flatRef }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const nameRef = useRef(),
    priceRef = useRef(),
    qtyRef = useRef();

  const handleReset = () => {
    setName("");
    setPrice("");
    setQty("");
  };

  const handleQty = (text) => {
    setQty(text.replace(/[^0-9.,]/g, ""));
  };

  const handlePrice = (text) => {
    setPrice(text.replace(/[^0-9.,]/g, ""));
  };

  const handleSave = () => {
    if (!name && !price) return alert("Name and price is required!");

    setList((prev) => [...prev, { name, price, qty }]);
    // handleReset();
  };

  const styles = StyleSheet.create({
    input: {
      borderColor: colors.primary,
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 8,
      paddingVertical: 2,
    },
    containerInput: {
      flexDirection: "row",
      gap: 5,
    },
    button: {
      backgroundColor: colors.primary,
      padding: 7,
      flex: 1,
      borderRadius: 5,
      maxHeight: 40,
    },
  });

  return (
    <Modal visible={showModal} transparent={true} animationType="slide">
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
        }}
      >
        <View style={{ backgroundColor: "white", padding: 10, gap: 10 }}>
          <View
            style={{
              flexDirection: "row",
              gap: 5,
            }}
          >
            <TextInput
              placeholder="*Name"
              ref={nameRef}
              style={{ ...styles.input, width: "80%" }}
              autoComplete="off"
              onLayout={() => {
                nameRef.current.focus();
                setTimeout(
                  () => flatRef.current.scrollToEnd({ animated: true }),
                  300
                );
              }}
              value={name}
              onSubmitEditing={() => {
                priceRef.current.focus();
              }}
              autoCorrect={false}
              blurOnSubmit={false}
              onChangeText={setName}
            />

            <TouchableOpacity onPress={handleSave} style={styles.button}>
              <AntDesingIcon
                name="plus"
                color={"white"}
                size={20}
                style={{ textAlign: "center" }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.containerInput}>
            <TextInput
              placeholder="*Price (Rp)"
              ref={priceRef}
              value={price}
              keyboardType="numeric"
              style={{ ...styles.input, width: "45%" }}
              onSubmitEditing={() => {
                qtyRef.current.focus();
              }}
              blurOnSubmit={false}
              onChangeText={handlePrice}
            />
            <TextInput
              placeholder="Quantity (Kg)"
              ref={qtyRef}
              value={qty}
              keyboardType="numeric"
              style={{
                ...styles.input,
                borderColor: colors.secondary,
                width: "33.5%",
              }}
              onChangeText={handleQty}
            />
            <TouchableOpacity
              onPress={handleReset}
              style={{ ...styles.button, backgroundColor: "brown" }}
            >
              <AntDesingIcon
                name="reload1"
                color={"white"}
                size={20}
                style={{ textAlign: "center" }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Button title="Hide" onPress={hideModal}></Button>
      </View>
    </Modal>
  );
};

export default AddFormModal;
