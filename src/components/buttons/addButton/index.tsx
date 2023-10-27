import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../../redux/features/storeReducer';
import { RootState } from '../../../redux/store/store';
import { AddButtonProps } from '../../../types/types'
import "./index.css";

const AddButton: React.FC<AddButtonProps> = ({ todoTitle }) => {
	const dispatch = useDispatch();
	const todos = useSelector((state: RootState) => state.datastore);

	const getNextTodoId = () => {
		if (todos.length === 0) {
			return 1;
		}
		const maxId = Math.max(...todos.map((todo) => todo.id));
		return maxId + 1;
	};

	const addTodoHandler = () => {
		const nextTodoId = getNextTodoId();
		dispatch(
			addTodo({
				userId: 1,
				id: nextTodoId,
				title: todoTitle,
				completed: false,
			})
		);
	};

	return (
		<button className="addButton" onClick={addTodoHandler}>Add</button>
	);
};

export default AddButton;