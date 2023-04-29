import userSlice from "./usersSlice";
import { configureStore } from "@reduxjs/toolkit";
import loaderSlice from "./loaderSlice";

const store = configureStore({
    reducer: {
        users: userSlice,
        loader: loaderSlice
    }
})

export default store;