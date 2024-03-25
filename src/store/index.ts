import { configureStore } from '@reduxjs/toolkit'
import { api } from './api'
import pages from './pages'

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        pages,
    },
})
