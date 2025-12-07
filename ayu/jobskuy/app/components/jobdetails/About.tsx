import React from "react";
import { Text, View } from "react-native";

interface AboutProps {
  info: string;
}

export default function About({ info }: AboutProps) {
    return(
        <View className="mt-4 mb-4 bg-[#FFF] rounded-lg p-6">
            <Text className="text-xl color-primary font-medium mb-2">About the job:</Text>
            <View className="py-2">
                <Text className="text-lg color-gray font-regular my-4">{info}</Text>
            </View>
        </View>
    );
};