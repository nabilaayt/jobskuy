import { Text, View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import { StackScreen } from "react-native-screens";
import { icons } from "./constants";
import NearbyJobs from "./components/home/NearbyJobs";
import PopularJobs from "./components/home/PopularJobs";
import Welcome from "./components/home/Welcome";
import ScreenHeaderBtn from "./components/common/header/ScreenHeaderBtn";


export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-lightWhite">
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#FAFAFC" },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension={25} />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.profile} dimension={34} />
          ),
          headerTitle: ""
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          className="flex-1 px-6 pt-8"
        >
          <Welcome 

          />
          <PopularJobs />
          <NearbyJobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
