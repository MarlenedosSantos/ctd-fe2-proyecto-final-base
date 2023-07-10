import React from "react";
import citaReducer from "./features/quote/citaSlice";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { RootState } from "./app/store";
import { render } from "@testing-library/react";

const customRender = (
    ui: React.ReactElement,
    {
        preloadedState,
        store =configureStore({
            reducer:{
                cita : citaReducer,
            },
            preloadedState,
        }),
        ...renderOpcions
    }:{
        preloadedState?: RootState;
        store?: ReturnType<typeof configureStore>;
    } = {}
) => {
    const Wrapper: React.FC<{
        children: React.ReactNode;
    }> = ({ children }) => <Provider store={store}>{children}</Provider>;

    render(ui, {
        wrapper:Wrapper,
        ...renderOpcions,
    });
};

export * from "@testing-library/react";

export { customRender as render};