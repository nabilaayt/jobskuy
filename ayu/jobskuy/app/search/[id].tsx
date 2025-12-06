import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, TouchableOpacity, View } from "react-native";
import { Stack, useRouter, useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ScreenHeaderBtn from "../components/common/header/ScreenHeaderBtn";
import NearbyJobs from "../components/home/NearbyJobs";
import { icons } from "../constants";
import { fetchJobs } from "../services/job";

export default function JobSearch(){
    const params = useLocalSearchParams();
    const router = useRouter()

    const [searchResult, setSearchResult] = useState([]);
    const [searchLoader, setSearchLoader] = useState(false);
    const [searchError, setSearchError] = useState(null);
    const [page, setPage] = useState(1); 

    const handleSearch = async () => {
        setSearchLoader(true);
        setSearchResult([]);
        
        try {
            const data = await fetchJobs(params.id as string, page);
            setSearchResult(data);
        } catch (error) {
            setSearchError(error);
        } finally {
            setSearchLoader(false);
        }
    };

    const handlePagination = (direction: "left" | "right") => {
        if (direction === "left" && page > 1) {
        setPage(page - 1);
        } else if (direction === "right") {
        setPage(page + 1);
        }
    };

    useEffect(() => {
        handleSearch()
    }, [page]);

    return(
        <SafeAreaView>
            <Stack.Screen />
        </SafeAreaView>
    )
}