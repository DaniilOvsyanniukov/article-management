import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SelectedTodoIds } from '../../types/types';

const initialState: SelectedTodoIds = {
	searchCompletedTodo: '',
	todoToComplete: [],
	todoToUndoComplete: [],
};

export const todosSlice = createSlice({
	name: 'SelectedTodoIds',
	initialState,
	reducers: {
		setSearchCompletedTodo: (state, action: PayloadAction<string>) => {
			state.searchCompletedTodo = action.payload;
		},
		clearSearchField: (state) => {
			state.searchCompletedTodo = '';
		},
		addToComplete: (state, action: PayloadAction<number>) => {
			state.todoToComplete.push(action.payload);
		},
		addToUndoComplete: (state, action: PayloadAction<number>) => {
			state.todoToUndoComplete.push(action.payload);
		},
		removeSelectedToComplete: (state, action: PayloadAction<number>) => {
			state.todoToComplete = state.todoToComplete.filter((id) => id !== action.payload);
		},
		removeSelectedToUndoComplete: (state, action: PayloadAction<number>) => {
			state.todoToUndoComplete = state.todoToUndoComplete.filter((id) => id !== action.payload);
		},
		resetComplete: (state) => {
			state.todoToComplete = [];
		},
		resetUndoComplete: (state) => {
			state.todoToUndoComplete = [];
		},
	},
});

export const {
	addToComplete,
	addToUndoComplete,
	resetComplete,
	resetUndoComplete,
	removeSelectedToComplete,
	removeSelectedToUndoComplete,
	setSearchCompletedTodo,
	clearSearchField,
} = todosSlice.actions;

export default todosSlice.reducer;
