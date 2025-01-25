import React, { createContext, useContext } from 'react';

export const ConfigContext = createContext();

export const ConfigProvider = ({ children }) => {
    const apiConfig = {
        api_key: "b34186573421baaa297b271caf096018", // Your API Key
        movieDBUrl: "https://api.themoviedb.org/3",
        IMAGE_BASE_URL: "https://image.tmdb.org/t/p/original",
    }

    return (
        <ConfigContext.Provider value={apiConfig}>
            {children}
        </ConfigContext.Provider>
    )
}
export const useConfig = () => useContext(ConfigContext);

