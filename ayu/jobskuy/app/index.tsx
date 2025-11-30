import { Text, View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";

import { COLORS, icons, SIZES } from "./constants";
import { NearbyJobs, PopularJobs, ScreenHeaderBtn, Welcome } from "./components";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView
      className="flex-1"
      // style={{
      //   flex: 1,
      //   justifyContent: "center",
      //   alignItems: "center",
      // }}
    >
      <Text className="text-5xl font-bold">Jobskuy</Text>
    </SafeAreaView>
  );
}
