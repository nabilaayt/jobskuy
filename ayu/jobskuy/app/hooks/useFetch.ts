import { useState, useEffect } from "react";

export default function useFetch() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(null);
    const [error, setError] = useState(null);

    
}