import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { 
    Text, 
    View,
    TouchableOpacity,
    FlatList,
    ActivityIndicator,
} from "react-native";
import { fetchJobs } from "../../services/job";
import PopularJobCard from "../common/cards/PopularJobCard";

export default function PopularJobs() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    return(
        <View className="mt-6">
            <View className="flex flex-row justify-between items-center">
                <Text className="text-xl font-medium color-primary">Popular jobs</Text>
                <TouchableOpacity>
                    <Text className="font-medium text-lg color-gray">Show all</Text>
                </TouchableOpacity>
            </View>
            <View className="mt-6">
                {isLoading ? (
                    <ActivityIndicator className="text-2xl color-primary" />
                ) : error ? (
                    <Text>Something went wrong</Text>
                ) : (
                    <FlatList 
                        data={jobs}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item?.job_id}
                        renderItem={({ item }) => (
                            <PopularJobCard 
                                item={item}
                            />
                        )}
                    />
                )}
            </View>
        </View>
    );
};