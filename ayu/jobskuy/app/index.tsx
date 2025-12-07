import { Text, View, ScrollView, Keyboard } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import { StackScreen } from "react-native-screens";
import { icons } from "./constants";
import NearbyJobs from "./components/home/NearbyJobs";
import PopularJobs from "./components/home/FeaturedJobs";
import Welcome from "./components/home/Welcome";
import ScreenHeaderBtn from "./components/common/header/ScreenHeaderBtn";


export default function Index() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    const trimmedSearchTerm = searchTerm.trim();
    if (searchTerm.trim().length === 0) return;

    Keyboard.dismiss();

    const encodedTerm = encodeURIComponent(trimmedSearchTerm);
    router.push(`/search/${encodedTerm}`);
  };

  return (
    <SafeAreaView className="flex-1 bg-lightWhite" edges={['bottom']}>
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
          className="flex-1 px-6 pt-2"
        >
          <Welcome 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={handleSearch}
          />
          <PopularJobs />
          <NearbyJobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}