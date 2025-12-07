import { useRouter } from "expo-router";
import { 
    Text, 
    View,
    TouchableOpacity,
    ActivityIndicator,
} from "react-native";
import useFetch from "../../hooks/useFetch";
import NearbyJobCard from "../common/cards/NearbyJobCard";

export default function NearbyJobs() {
    const router = useRouter();
    const { data, isLoading, error } = useFetch("search", {
        query: "",
        num_pages: 1
    });

    return(
        <View className="mt-6">
            <View className="flex flex-row justify-between items-center">
                <Text className="text-xl font-medium color-primary">Nearby jobs</Text>
                <TouchableOpacity>
                    <Text className="font-medium text-base color-gray">Show all</Text>
                </TouchableOpacity>
            </View>
            
            <View className="mt-4 gap-3">
                {isLoading ? (
                    <ActivityIndicator size="large" color="#312651" />
                ) : error ? (
                    <Text>Something went wrong</Text>
                ) : (
                    data?.map((job) => (
                        <NearbyJobCard
                            job={job}
                            key={`nearby-job-${job.job_id}`}
                            handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
                        />
                    ))
                )}
            </View>
        </View>
    );
}