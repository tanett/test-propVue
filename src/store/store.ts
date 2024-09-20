import { configureStore } from '@reduxjs/toolkit'
import { dataFromXlsxSlice } from '../entety-project/dataFromXlsx/dataFromXlsxSlice.ts';

export const store = configureStore({
                                  reducer: {
                                      dataFromXlsxSlice: dataFromXlsxSlice.reducer,
                                  },
                              })
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
