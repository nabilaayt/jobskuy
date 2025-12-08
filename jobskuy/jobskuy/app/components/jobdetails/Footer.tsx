import { icons } from "../../constants";
import React from "react";
import { Text, View, TouchableOpacity, Image, Linking } from "react-native";

interface FooterProps {
  url: string;
}

export default function Footer({ url }: FooterProps) {
    return(
        <View className="absolute mb-3 bottom-0 left-0 right-0 p-4 bg-[#FFF] justify-between items-center flex flex-row">
            <TouchableOpacity 
                className="flex-1 bg-[#FE7654] w-[55px] h-[55px] justify-center items-center ml-4 rounded-lg"
                onPress={() => Linking.openURL(url)}
            >
                <Text className="text-xl color-white font-medium">Apply for job</Text>
            </TouchableOpacity>
        </View>
    );
};