// set up data layer
//this is how the basket is tracked 
import React, { createContext, useContext, useReducer } from 'react';
// this is the data layer
export const StateContext = createContext();
//build a provider
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}> 
    { children }
    </StateContext.Provider>
)