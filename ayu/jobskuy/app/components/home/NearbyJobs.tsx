import { useRouter } from "expo-router";
import { 
    Text, 
    View,
    TouchableOpacity,
    ActivityIndicator,
} from "react-native";
import useNearbyJobs from "../../hooks/useNearbyJobs";
import NearbyJobCard from "../common/cards/NearbyJobCard";

export default function NearbyJobs() {
    const router = useRouter();
    const { data, isLoading, error } = useNearbyJobs();

    return(
        <View className="mt-6">
            <View className="flex flex-row justify-between items-center">
                <Text className="text-xl font-medium color-primary">Nearby jobs</Text>
                <TouchableOpacity>
                    <Text className="font-medium text-lg color-gray">Show all</Text>
                </TouchableOpacity>
            </View>
            <View className="mt-6 gap-3">
                {isLoading ? (
                    <ActivityIndicator className="text-2xl color-primary" />
                ) : error ? (
                    <Text>Something went wrong</Text>
                ) : (
                    data?.map((job) => (
                    <NearbyJobCard
                        job={job}
                        key={`nearby-job-${job.slug}`}
                        handleNavigate={() => router.push(`/job-details/${job.slug}`)}
                    />
                    ))
                )}
            </View>
        </View>
    );
};