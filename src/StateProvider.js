import React, { createContext, useContext, useReducer } from "react";
//Prepare the datalayer

export const StateContext = createContext();

//wrap our app and Provide the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Pull info from data layer
export const useStateValue = () => useContext(StateContext);
