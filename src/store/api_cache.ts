import { configureStore } from '@reduxjs/toolkit'
import apiCacheReducer from '../api_cache/api_cache_slice'

export const store = configureStore({
  reducer: {
    apiCache: apiCacheReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch