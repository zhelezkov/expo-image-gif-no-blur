import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source="https://ucarecdn.com/b9186723-274e-4d6d-9387-a1600443920f/"
        blurRadius={50}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 500,
    height: 500,
  },
});
