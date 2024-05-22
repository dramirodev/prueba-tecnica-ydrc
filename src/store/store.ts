import {configureStore} from '@reduxjs/toolkit';
import postReducer from './post/reducer';
import {postApi} from "../api/post.ts";
import {setupListeners} from "@reduxjs/toolkit/query";

const store = configureStore({
    reducer: {
        [postApi.reducerPath]: postApi.reducer,
        post: postReducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch)

export default store;
