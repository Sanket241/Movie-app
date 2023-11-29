
//      Context <API></>
// USECONETEXT HOOKS

//CONTEXT (WAREHOUSE)
//PROVIDER(DELIVERY
//CONSUMER (YOU)


import React, { useContext, useEffect, useState } from "react";
const AppContext = React.createContext();
const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
const AppProvider = ({ children }) => {
    const [listloading, setListloading] = useState(true);
    const [movie, setMovie] = useState([])
    const [error, setError] = useState({ Show: "False", msg: "" });
    const [query, setQuery] = useState("spider man")
    const getMovies = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);

            if (data.Response === "True") {
                setListloading(false);
                setMovie(data.Search);


            }
            else {
                setError({
                    show: false,
                    msg: "",
                });
            }
        }
        catch (error) {
            console.loog(error);

        }
    }
    useEffect(() => {
        let timerout = setTimeout(() => {
            getMovies(`${API_URL}&s=${query}`);

        },500)
        return () => clearTimeout(timerout); // Debounce
    }, [query])
    return <AppContext.Provider value={{ listloading, movie, error, query, setQuery, error }}>
        {children}
    </AppContext.Provider>
}
//global custom hook 
const useGlobalContext = () => {
    return useContext(AppContext);
}





export { AppContext, AppProvider, useGlobalContext }


