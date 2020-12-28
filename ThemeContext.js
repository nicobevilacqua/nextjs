import React, { createContext, useReducer } from 'react'

function Reducer(state, action) {
    if (action.type === 'set') {
        state.name = action.payload
    }
    return state
}

const initialState = {
    name: 'normal',
}

export const Context = createContext(initialState)

export function ThemeProvider({ children }) {
    const [state, dispatch] = useReducer(Reducer, initialState)
    return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
}
