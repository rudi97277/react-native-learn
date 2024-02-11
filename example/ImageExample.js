import { Image } from "react-native";

export default ImageExample = () => (
  <Image
    source={require("./assets/icon.png")}
    style={{ width: 100, height: 100 }}
  />
);
