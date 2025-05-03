import { configureStore } from "@reduxjs/toolkit";
import pageStylesReducer from "./pageStylesSlice";

const pageStore = configureStore({
    reducer: {
        pageStyles: pageStylesReducer
    }
});

export default pageStore;