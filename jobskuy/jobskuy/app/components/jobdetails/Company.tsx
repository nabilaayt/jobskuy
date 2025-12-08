import React from "react";
import { Text, View, Image } from "react-native";
import { icons } from "../../constants";
import checkImageURL from "../../utils";

interface CompanyProps {
    companyLogo: string;
    jobTitle: string;
    companyName: string;
    location: string;
}

export default function Company({ companyLogo, jobTitle, companyName, location }: CompanyProps) {
    return(
        <View className="py-6 justify-center items-center">
            <View className="w-[80px] h-[80px] justify-center items-center bg-[#FFF] rounded-xl">
                <Image 
                    source={{ 
                        uri: checkImageURL(companyLogo)
                            ? companyLogo
                            : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
                     }}
                     className="w-full h-full"
                />
            </View>

            <View className="mt-4">
                <Text className="text-2xl color-primary font-medium text-center">{jobTitle}</Text>
            </View>

            <View className="mt-4 flex flex-row justify-center items-center">
                <Text className="text-xl color-primary font-medium">{companyName}</Text>
                <View className="flex flex-row justify-center items-center">
                     <Image 
                        source={icons.location}
                        resizeMode="contain"
                        className="w-[14px] h-[14px] tint-gray"
                     />
                     <Text className="text-xl color-gray font-regular ml-2">{location}</Text>
                </View>
                
            </View>
        </View>
    );
};