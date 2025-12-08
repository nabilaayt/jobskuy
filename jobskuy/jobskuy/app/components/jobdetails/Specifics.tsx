import React from "react";
import { Text, View } from "react-native";

interface SpecificsProps {
  title: string;
  points: string[];
}

export default function Specifics({ title, points }: SpecificsProps) {
    return(
        <View className="bg-[#FFF] rounded-lg p-6 mt-4 mb-4">
            <Text className="text-xl color-primary font-medium">{title}:</Text>

            <View className="py-4">
                {points.map((item, index) => (
                    <View className="flex flex-row justify-start items-start py-2" key={item + index}> 
                        <View className="w-3 h-3 rounded-full bg-gray2 mt-6" />
                        <Text className="text-lg color-gray font-regular ml-4">{item}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};