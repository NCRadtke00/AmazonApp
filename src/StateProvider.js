// set up data layer
// this is how the basket is tracked 
import React, { createContext, useContext, useReducer } from 'react';
// this prepares the data layer
export const StateContext = createContext();
//wrap app and provide data layer
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}> 
    { children }
    </StateContext.Provider>
);
// pull info from the datalayer
export const useStateValue = () => useContext(StateContext);