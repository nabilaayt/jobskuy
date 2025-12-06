import { Stack, useRouter, useLocalSearchParams  } from "expo-router";
import { useCallback, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ScreenHeaderBtn from "../components/common/header/ScreenHeaderBtn";
import Company from "../components/jobdetails/Company";
import About from "../components/jobdetails/About";
import Footer from "../components/jobdetails/Footer";
import Tabs from "../components/jobdetails/Tabs";
import Specifics from "../components/jobdetails/Specifics";
import useFetch from "../hooks/useFetch";
import { icons } from "../constants";

export default function JobDetails() {
  const params = useLocalSearchParams ();
  const router = useRouter();
  const { data, isLoading, error, refetch } = useFetch("job-details", {
    job_id: params.id
  });
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false)
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-lightWhite">
      <Stack.Screen
        options={{
          headerTitle: "",
          headerBackTitle: "Back",
          headerStyle: { backgroundColor: "#FAFAFC" },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn 
                iconUrl={icons.left}
                dimension={30}
                handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn 
                iconUrl={icons.share}
                dimension={30}
            />
          ),          
        }}
      />

      <>
        <ScrollView 
            showsVerticalScrollIndicator={false}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
            {isLoading ? (
                <ActivityIndicator 
                    size="large"  
                    className="color-primary"
                />
            ) : error ? (
                <Text>Something went wrong</Text>
            ) : data.length === 0 ? (
                <Text>No data</Text>
            ) : (
                <View className="p-6 pb-50">
                    <Company 
                        companyLogo={data[0].employer_logo}
                        jobTitle={data[0].job_title}
                        companyName={data[0].employer_name}
                        location={data[0].job_country}
                    />
                    <Tabs 
                    
                    />
                </View>
            )}
        </ScrollView>
      </>
    </SafeAreaView>
  );
}