import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo, TodoState } from '../../types/types';

const initialState: TodoState = [];

export const todosSlice = createSlice({
	name: 'Todos',
	initialState,
	reducers: {
		setTodos: (state, action: PayloadAction<Todo[]>) => {
			return action.payload;
		},
		updateTodoStatus: (state, action: PayloadAction<{ id: number; completed: boolean }>) => {
			const { id, completed } = action.payload;
			const todo = state.find((todo) => todo.id === id);
			if (todo) {
				todo.completed = completed;
			}
		},
		addTodo: (state, action: PayloadAction<Todo>) => {
			state.push(action.payload);
		},
		deleteTodo: (state, action: PayloadAction<number>) => {
			return state.filter((todo) => todo.id !== action.payload);
		},
	},
});

export const { setTodos, updateTodoStatus, addTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;
