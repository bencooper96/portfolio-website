import { configureStore } from "@reduxjs/toolkit";
import { myWorkSlice } from "./workSlice";
import { weatherSlice, weatherApi } from "./weather/weatherSlice";

export const store = configureStore({
  reducer: {
    myWork: myWorkSlice.reducer,
    weather: weatherSlice.reducer,

    [weatherApi.reducerPath]: weatherApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
