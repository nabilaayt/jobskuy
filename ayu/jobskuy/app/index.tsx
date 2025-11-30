import { Text, View } from "react-native";
import { Stack } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-5xl font-bold">Jobskuy</Text>
    </View>
  );
}
