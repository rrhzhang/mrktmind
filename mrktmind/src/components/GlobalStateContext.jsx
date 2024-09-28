// GlobalStateContext.js
import React, { createContext, useState, useEffect } from 'react';

// Create a Context for the global state
export const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
    const [pins, setPins] = useState([]);

    // Load pins from localStorage when the app loads
    useEffect(() => {
        const storedPins = localStorage.getItem('pins');
        if (storedPins) {
            setPins(JSON.parse(storedPins));
        }
    }, []);

    // Save pins to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('pins', JSON.stringify(pins));
    }, [pins]);

    // Function to add new pins
    const addPin = (pinDetails) => {
        setPins([...pins, pinDetails]);
    };

    // Function to reset pins (for example, on logout)
    const clearPins = () => {
        setPins([]);
        localStorage.removeItem('pins');
    };

    return (
        <GlobalStateContext.Provider value={{ pins, addPin, clearPins }}>
            {children}
        </GlobalStateContext.Provider>
    );
};
