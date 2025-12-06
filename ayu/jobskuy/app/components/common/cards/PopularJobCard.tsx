import React from "react";
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Image 
} from "react-native";
import checkImageURL from "../../../utils";

export default function PopularJobCard({ item, selectedJob }: { item: any, selectedJob: string | null }) {
    return(
        <TouchableOpacity
            className={`
                w-[180px] p-5 rounded-xl justify-between
                ${selectedJob === item.job_id ? "bg-primary" : "bg-white"} 
            `}
        >
            <TouchableOpacity 
                className={`
                    w-[50px] h-[50px] rounded-xl justify-center items-center
                    ${selectedJob === item.job_id ? "#FFF" : "bg-white"}
                `}
            >
                <Image 
                    source={{ uri: checkImageURL(item.employer_logo) 
                        ? item.employer_logo : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
                    }}
                    resizeMode="contain"
                    className="w-full h-full rounded-xl"
                />
            </TouchableOpacity>
            <Text
                numberOfLines={1}
                className="font-medium font-regular color-[#B3AEC6] mt-2"
            >
                {item.title}
            </Text>

            <View className="mt-4">
                <Text
                    numberOfLines={1}
                    className={`
                        font-xl font-medium ${selectedJob === item.job_id ? "color-white" : "color-primary"}
                    `}
                >
                    {item.company_name}
                </Text>
                <Text
                    className="font-lg font-regular color-[#B3AEC6]"
                >
                    {item.location}
                </Text>
            </View>
        </TouchableOpacity>
    );
};