import { configureStore } from '@reduxjs/toolkit';
import storeReducer from '../features/storeReducer';
import todoReducer from '../features/todoReducer';

const store = configureStore({
	reducer: {
		datastore: storeReducer,
		selectedTodo: todoReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
