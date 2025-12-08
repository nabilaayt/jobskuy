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

const tabs = ["About", "Qualifications", "Responsibilities"];

export default function JobDetails() {
  const params = useLocalSearchParams ();
  const router = useRouter();
  const { data, isLoading, error, refetch } = useFetch("job-details", {
    job_id: params.id
  });
  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false)
  }, []);

  const displayTabContent = () => {
    switch (activeTab) {
      case "Qualifications":
        return (
          <Specifics
            title='Qualifications'
            points={data[0].job_highlights?.Qualifications ?? ["N/A"]}
          />
        );

      case "About":
        return (
          <About info={data[0].job_description ?? "No data provided"} />
        );

      case "Responsibilities":
        return (
          <Specifics
            title='Responsibilities'
            points={data[0].job_highlights?.Responsibilities ?? ["N/A"]}
          />
        );

      default:
        return null;
    }
  };

  return (
    <SafeAreaView className="flex-1 w-full bg-lightWhite" edges={['bottom']}>
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
          // headerRight: () => (
          //   <ScreenHeaderBtn 
          //       iconUrl={icons.share}
          //       dimension={26}
          //   />
          // ),          
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
                      tabs={tabs}
                      activeTab={activeTab}
                      setActiveTab={setActiveTab}
                    />

                    {displayTabContent()}
                </View>
            )}
        </ScrollView>

        <Footer url={data[0]?.job_google_link ?? 'https://careers.google.com/jobs/results/'} />
      </>
    </SafeAreaView>
  );
}