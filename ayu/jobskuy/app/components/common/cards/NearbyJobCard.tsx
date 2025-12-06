import React from "react";
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Image 
} from "react-native";
import checkImageURL from "../../../utils";

export default function NearbyJobCard({ job, handleNavigate }: { job: any, handleNavigate: () => void }) {
    return(
        <TouchableOpacity
            className="flex-1 justify-between items-center flex flex-row p-4 rounded-lg bg-[#FFF]"
            onPress={handleNavigate}
        >
            <TouchableOpacity className="w-[50px] h-[50px] bg-white rounded-lg justify-center items-center">
                <Image 
                    source={{ uri: checkImageURL(job.company_logo) 
                            ? `https://logo.clearbit.com/${job.company_logo.replace(/\s+/g, "")}.com`
                            : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
                    }}
                    resizeMode="contain"
                    className="w-full h-full rounded-xl"
                />
            </TouchableOpacity>

            <View className="flex-1 mx-4">
                <Text
                    numberOfLines={1}
                    className="text-xl font-medium color-primary"
                >
                    {job.title}
                </Text>
                <Text className="font-lg font-regular color-gray mt-3 capitalize">
                    {job.company_name}
                </Text>
            </View>
        </TouchableOpacity>
    );
};