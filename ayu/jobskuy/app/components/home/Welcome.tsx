import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import { icons } from "../../constants";

const jobTypes = ["Full-time", "Part-time", "Contractor"];

export default function Welcome({ 
    searchTerm = "", 
    setSearchTerm = () => {}, 
    handleClick = () => {}
}) {
    const router = useRouter();
    const [activeJobType, setActiveJobType] = useState("Full-time");

    return(
        <View>
            <View className="w-full">
                <Text className="font-regular text-xl color-secondary">Hello Nabila</Text>
                <Text className="font-medium text-2xl color-primary mt-2">Find your perfect job</Text>
            </View>

            <View className="justify-center items-center flex flex-row mt-8 h-[50px]">
                <View className="flex-1 bg-white justify-center items-center rounded-lg h-full">
                    <TextInput 
                        className="font-regular text-base w-full h-full px-6"
                        value=""
                        onChange={() => {}}
                        placeholder="What are you looking for?"
                    />
                </View>

                <TouchableOpacity 
                    onPress={() => {}}
                    className="w-[50px] h-full bg-tertiary rounded-lg justify-center items-center"
                >
                    <Image 
                        source={icons.search}
                        resizeMode="contain"
                        className="w-8 h-8"
                        style={{ tintColor:"#FFF" }}
                    />
                </TouchableOpacity>
            </View>

            <View className="w-full mt-8">
                <FlatList
                    data={jobTypes}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        const isActive = activeJobType === item;

                        return (
                        <TouchableOpacity
                            onPress={() => {
                                setActiveJobType(item);
                                router.push(`/search/${item}`)
                            }}
                            className={`mr-4 px-4 py-2 rounded-lg border `}
                            style={{ borderColor: isActive ? "#444262" : "#C1C0C8" }}
                        >
                            <Text
                                className={`
                                    font-medium
                                    ${isActive ? "text-secondary" : "text-gray2"}
                                `}
                                >
                                {item}
                            </Text>
                        </TouchableOpacity>
                    );
                }}
                keyExtractor={(item) => item}
                />
            </View>
        </View>
    );
};