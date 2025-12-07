import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, TouchableOpacity, View } from "react-native";
import { Stack, useRouter, useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ScreenHeaderBtn from "../components/common/header/ScreenHeaderBtn";
import { icons } from "../constants";
import { fetchJobs } from "../services/job";
import NearbyJobCard from "../components/common/cards/NearbyJobCard";
import { JobType } from "../types/job";

interface FetchJobsResponse {
  data: JobType[];
  total: number;
  page: number;
  hasMore: boolean;
}

export default function JobSearch(){
    const params = useLocalSearchParams();
    const router = useRouter()

    const [searchResult, setSearchResult] = useState<JobType[]>([]);
    const [searchLoader, setSearchLoader] = useState(false);
    const [searchError, setSearchError] = useState<Error | null>(null);
    const [page, setPage] = useState(1);

    const handleSearch = async () => {
        setSearchLoader(true);
        setSearchResult([]);
        
        try {
        const response = await fetchJobs(params.id as string, page);

        // Mapping job_id menjadi slug 
        const jobs: JobType[] = response.data.map(job => ({
            ...job,
            slug: job.job_id,
            url: '',
        }));

        setSearchResult(jobs);
        } catch (error) {
            setSearchError(error);
        } finally {
            setSearchLoader(false);
        }
    };

    const handlePagination = (direction: "left" | "right") => {
        if (direction === "left" && page > 1) {
        setPage(page - 1);
        } else if (direction === "right") {
        setPage(page + 1);
        }
    };

    useEffect(() => {
        handleSearch()
    }, [page]);

    return (
        <SafeAreaView className="flex-1 w-full" edges={['bottom']}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: '#FAFAFC' },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimension={30}
                            handlePress={() => router.back()}
                        />
                    ),
                    headerTitle: "",
                }}
            />

            <FlatList
                data={searchResult}
                renderItem={({ item }) => (
                    <NearbyJobCard
                        job={item}
                        handleNavigate={() => router.push(`/job-details/${item.slug}`)}
                    />
                )}
                keyExtractor={(item) => item.slug}
                className="flex-1 px-4 py-8 bg-lightWhite"
                contentContainerStyle={{ paddingBottom: 60 }}
                ListHeaderComponent={() => (
                    <>
                        <View className="w-full">
                            <Text className="font-medium text-2xl color-primary">{params.id}</Text>
                            <Text className="mt-2 font-medium text-lg color-primary">Job Opportunities</Text>
                        </View>
                        <View className="mt-6">
                            {searchLoader ? (
                                <ActivityIndicator size="large" className="color-primary"/>
                            ) : searchError && (
                                <Text>Oops something went wrong</Text>
                            )}
                        </View>
                    </>
                )}
                ListFooterComponent={() => (
                    <View className="mt-6 flex-row justify-center items-center gap-8">
                        <TouchableOpacity
                            className="w-16 h-16 py-2 px-3 rounded-lg justify-center items-center bg-tertiary mr-4"
                            onPress={() => handlePagination('left')}
                        >
                            <Image
                                source={icons.chevronLeft}
                                className="w-8 h-8"
                                style={{ tintColor: 'white' }}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <View className="w-16 h-16 py-2 px-3 rounded-lg justify-center items-center bg-white">
                            <Text className="font-medium text-xl color-primary">{page}</Text>
                        </View>
                        <TouchableOpacity
                            className="w-16 h-16 py-2 px-3 rounded-lg justify-center items-center bg-tertiary ml-4"
                            onPress={() => handlePagination('right')}
                        >
                            <Image
                                source={icons.chevronRight}
                                className="w-8 h-8"
                                style={{ tintColor: 'white' }}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </SafeAreaView>
    )
}