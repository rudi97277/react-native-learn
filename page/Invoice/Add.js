import {
  Button,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useEffect, useRef, useState } from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../constant/style";
import AntDFloatingButton from "../../components/AntDFloatingButton";
import AddFormModal from "./AddFormModal";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    gap: 5,
  },
});

const Add = ({ setBadge }) => {
  const flatRef = useRef();

  const [list, setList] = useState([]);
  const [summaries, setSummaries] = useState({ qty: 0, price: 0 });
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const hideModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const summaryData = list.reduce(
      (acc, obj) => {
        acc.qty += Number.parseFloat(obj.qty);
        acc.price += Number.parseFloat(obj.qty) * Number.parseFloat(obj.price);
        return acc;
      },
      { qty: 0, price: 0 }
    );
    setSummaries(summaryData);

    setBadge(list.length > 0 ? list.length : null);
  }, [list]);

  const option = {
    style: "currency",
    currency: "IDR",
    notation: "standard",
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: colors.primary,
          marginHorizontal: -10,
          paddingHorizontal: 10,
          marginBottom: 5,
          paddingVertical: 10,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: 500, color: "white" }}>
          {`Total  ${summaries.qty} Kg`}
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 500,
            marginLeft: "auto",
            color: "white",
          }}
        >
          {summaries.price.toLocaleString("id-ID", option).slice(0, -3)}
        </Text>
      </View>
      <FlatList
        data={list}
        ref={flatRef}
        onContentSizeChange={() =>
          flatRef.current?.scrollToEnd({ animated: true })
        }
        showsVerticalScrollIndicator={true}
        renderItem={({ item, index }) => (
          <View style={{ paddingVertical: 1 }}>
            <Text style={styles.item}>{`${index + 1}. ${item.name}`}</Text>
            <Text>{`${item.price} x ${item.qty}`}</Text>
          </View>
        )}
        ListEmptyComponent={() => <Text>Empty List</Text>}
      />
      <AddFormModal
        showModal={showModal}
        hideModal={hideModal}
        setList={setList}
        flatRef={flatRef}
      />

      {!showModal && (
        <AntDFloatingButton iconName="plus" onPress={handleShowModal} />
      )}
    </SafeAreaView>
  );
};

export default Add;
