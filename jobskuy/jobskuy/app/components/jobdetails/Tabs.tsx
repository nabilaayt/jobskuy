import React from "react";
import { Text, View, TouchableOpacity, FlatList } from "react-native";

interface TabsProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

interface TabButtonProps {
  name: string;
  activeTab: string;
  onHandleSearchType: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ name, activeTab, onHandleSearchType }) => {
    return(
        <TouchableOpacity
            className={`py-3 px-4 rounded-lg ${name === activeTab ? "bg-primary" : "bg-[#F3F4F8]"}`}
            onPress={onHandleSearchType}
        >
            <Text className={`text-sm font-medium ${name === activeTab ? "text-[#C3BFCC]" : "text-[#AAA9B8]"}`}>{name}</Text>
        </TouchableOpacity>
    );
}

export default function Tabs({ tabs, activeTab, setActiveTab }: TabsProps) {
    return(
        <View className="mt-4 mb-4">
            <FlatList 
                data={tabs}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TabButton
                        name={item}
                        activeTab={activeTab}
                        onHandleSearchType={() => setActiveTab(item)}
                    />
                )}
                keyExtractor={(item) => item}
                ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
            />
        </View>
    );
};