import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import { dotsSlice } from './slices/dots';

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
    dots: dotsSlice.reducer,
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState
    })
}

export const store = setupStore();

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch'];
