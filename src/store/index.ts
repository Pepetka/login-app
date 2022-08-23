import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./slices/userSlice"

export const store = configureStore({
	reducer: {
		user: userReducer,
	},
	devTools: process.env.NODE_ENV !== "production",
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>