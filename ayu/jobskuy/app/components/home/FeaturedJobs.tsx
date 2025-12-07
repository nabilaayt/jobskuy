import { useRouter } from "expo-router";
import { useState } from "react";
import { 
    Text, 
    View,
    TouchableOpacity,
    ActivityIndicator,
    FlatList,
} from "react-native";
import useFetch from "../../hooks/useFetch";
import PopularJobCard from "../common/cards/FeaturedJobCard";

export default function FeaturedJobs() {
    const router = useRouter();
    const { data, isLoading, error } = useFetch("search", {
        query: "Marketing",
        num_pages: 1
    });
    
    const [selectedJob, setSelectedJob] = useState<string | null>(null);

    const handleCardPress = (jobId: string) => {
        setSelectedJob(jobId);
        router.push(`/job-details/${jobId}`);
    };

    return(
        <View className="mt-6">
            <View className="flex flex-row justify-between items-center">
                <Text className="text-xl font-medium color-primary">Featured jobs</Text>
                <TouchableOpacity>
                    <Text className="font-medium text-base color-gray">Show all</Text>
                </TouchableOpacity>
            </View>

            <View className="mt-4">
                {isLoading ? (
                    <ActivityIndicator size="large" color="#312651" />
                ) : error ? (
                    <Text>Something went wrong</Text>
                ) : (
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <PopularJobCard
                                item={item}
                                selectedJob={selectedJob}
                                handleCardPress={() => handleCardPress(item.job_id)}
                            />
                        )}
                        keyExtractor={(item) => item.job_id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
                    />
                )}
            </View>
        </View>
    );
}