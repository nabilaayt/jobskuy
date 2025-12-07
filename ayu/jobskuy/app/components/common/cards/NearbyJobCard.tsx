import React from "react";
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Image 
} from "react-native";
import checkImageURL from "../../../utils";
import { JobType } from "../../../types/job";

interface NearbyJobCardProps {
    job: JobType;
    handleNavigate: () => void;
}

export default function NearbyJobCard({ job, handleNavigate }: NearbyJobCardProps) {
    return(
        <TouchableOpacity
            className="flex-1 justify-between items-center flex-row p-4 rounded-lg bg-white mb-3"
            onPress={handleNavigate}
        >
            <TouchableOpacity className="w-[50px] h-[50px] bg-[#F3F4F8] rounded-lg justify-center items-center">
                <Image 
                    source={{ 
                        uri: job.employer_logo && checkImageURL(job.employer_logo)
                            ? job.employer_logo
                            : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
                    }}
                    resizeMode="contain"
                    className="w-[70%] h-[70%]"
                />
            </TouchableOpacity>

            <View className="flex-1 mx-4">
                <Text
                  numberOfLines={1}
                    className="text-base font-medium color-primary"
                >
                    {job.title}
                </Text>
                <Text className="text-sm font-regular color-gray mt-1 capitalize">
                    {job.company_name}
                </Text>
            </View>
        </TouchableOpacity>
    );
}