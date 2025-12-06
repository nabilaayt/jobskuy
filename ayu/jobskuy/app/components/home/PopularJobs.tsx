import { useState } from "react";
import { useRouter } from "expo-router";
import { 
    Text, 
    View,
    TouchableOpacity,
    FlatList,
    ActivityIndicator,
} from "react-native";
import useFetch from "../../hooks/useFetch";
import PopularJobCard from "../common/cards/PopularJobCard";

export default function PopularJobs() {
    const router = useRouter();
    const [selectedJob, setSelectedJob] = useState(null);
    const { data, isLoading, error } = useFetch("");


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
                        data={data}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.slug}
                        renderItem={({ item }) => (
                            <PopularJobCard 
                                item={item}
                                selectedJob={selectedJob}
                            />
                        )}
                        ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
                    />
                )}
            </View>
        </View>
    );
};