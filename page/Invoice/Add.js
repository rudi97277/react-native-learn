import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useRef, useState } from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesingIcon from "react-native-vector-icons/AntDesign";
import { colors } from "../../constant/style";
import AntDFloatingButton from "../../components/AntDFloatingButton";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    gap: 5,
  },
  containerInput: {
    flexDirection: "row",
    gap: 5,
  },
  input: {
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 7,
    flex: 1,
    borderRadius: 5,
    maxHeight: 40,
  },
});

const Add = ({ setBadge }) => {
  const nameRef = useRef(),
    flatRef = useRef(),
    priceRef = useRef(),
    qtyRef = useRef();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [list, setList] = useState([]);
  const [tQty, setTQty] = useState(0);
  const [tPrice, setTPrice] = useState(0);

  const handleReset = () => {
    setName("");
    setPrice("");
    setQty("");
  };

  const handleSave = () => {
    if (!name && !price) return alert("Name and price is required!");
    setTQty((prev) => prev + Number.parseFloat(qty));
    setTPrice(
      (prev) =>
        prev + Number.parseFloat(price) * (qty > 0 ? Number.parseFloat(qty) : 1)
    );
    setList((prev) => [...prev, { name, price, qty }]);
    setBadge(list.length + 1);
    handleReset();
    nameRef.current.focus();
    flatRef.scro;
  };

  const handleQty = (text) => {
    setQty(text.replace(/[^0-9.,]/g, ""));
  };

  const handlePrice = (text) => {
    setPrice(text.replace(/[^0-9.,]/g, ""));
  };

  const option = {
    style: "currency",
    currency: "IDR",
    notation: "standard",
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={list}
        ref={flatRef}
        showsVerticalScrollIndicator={true}
        scrol
        renderItem={({ item, index }) => (
          <View>
            <Text style={styles.item}>{`${index + 1}. ${item.name}`}</Text>
            <Text>{`${item.price} x ${item.qty}`}</Text>
          </View>
        )}
        ListEmptyComponent={() => <Text>Empty List</Text>}
      />
      <Modal visible={false} style={{ backgroundColor: "red" }}>
        <Text>Halo</Text>
      </Modal>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: colors.secondary,
          marginHorizontal: -10,
          paddingHorizontal: 10,
          marginBottom: 5,
          paddingVertical: 5,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: 500, color: colors.grey }}>
          Total
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 500,
            marginLeft: "auto",
            color: colors.grey,
          }}
        >
          {`${tQty} Kg --- ${tPrice
            .toLocaleString("id-ID", option)
            .slice(0, -3)}`}
        </Text>
      </View>
      <View style={{ flexDirection: "row", gap: 5 }}>
        <TextInput
          placeholder="*Name"
          ref={nameRef}
          style={{ ...styles.input, width: "80%" }}
          autoComplete="off"
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
          style={{ ...styles.button, backgroundColor: colors.red }}
        >
          <AntDesingIcon
            name="reload1"
            color={"white"}
            size={20}
            style={{ textAlign: "center" }}
          />
        </TouchableOpacity>
      </View>
      <AntDFloatingButton />
    </SafeAreaView>
  );
};

export default Add;
