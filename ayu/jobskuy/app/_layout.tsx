import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import { View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import "./global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    DMSansRegular: require("../assets/fonts/DMSans-Regular.ttf"),
    DMSansMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMSansBold: require("../assets/fonts/DMSans-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if(loaded){
      await SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <View onLayout={onLayoutRootView} className="flex-1">
      <Stack />
    </View>
  );
}
