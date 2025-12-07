import React from "react";
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Image 
} from "react-native";
import checkImageURL from "../../../utils";

interface FeaturedJobCardProps {
    item: {
        job_id: string;
        title: string;
        company_name: string;
        employer_logo?: string;
        location: string;
    };
    selectedJob: string | null;
    handleCardPress: () => void;
}

export default function FeaturedJobCard({ 
    item, 
    selectedJob,
    handleCardPress
}: FeaturedJobCardProps) {
    const isSelected = selectedJob === item.job_id;
    
    return(
        <TouchableOpacity
            className={`w-[180px] p-5 rounded-xl justify-between ${isSelected ? "bg-primary" : "bg-white"}`}
            onPress={handleCardPress}
        >
            <TouchableOpacity 
                className={`w-[50px] h-[50px] rounded-xl justify-center items-center ${isSelected ? "bg-white" : "bg-[#F3F4F8]"}`}
            >
                <Image 
                    source={{ 
                        uri: item.employer_logo && checkImageURL(item.employer_logo) 
                            ? item.employer_logo 
                            : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
                    }}
                    resizeMode="contain"
                    className="w-[70%] h-[70%]"
                />
            </TouchableOpacity>
            
            <Text
                numberOfLines={1}
                className="text-sm font-medium color-[#B3AEC6] mt-2"
            >
                {item.company_name}
            </Text>

            <View className="mt-2">
                <Text
                    numberOfLines={1}
                    className={`text-base font-medium ${isSelected ? "color-white" : "color-primary"}`}
                >
                    {item.title}
                </Text>
                <Text
                    className="text-sm font-regular color-[#B3AEC6] mt-1"
                >
                    {item.location}
                </Text>
            </View>
        </TouchableOpacity>
    );
}