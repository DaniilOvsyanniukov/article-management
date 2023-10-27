import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTodoStatus } from '../../../redux/features/storeReducer';
import { removeSelectedToComplete, removeSelectedToUndoComplete } from '../../../redux/features/todoReducer';
import { RootState } from '../../../redux/store/store';
import "./index.css";

const TextBoxButtons: React.FC = () => {
	const dispatch = useDispatch();
	const selectedTodo = useSelector((state: RootState) => state.selectedTodo);

	const handleToCompleteSelectedTodos = async () => {
		selectedTodo.todoToComplete.forEach((id) => {
			dispatch(updateTodoStatus({ id, completed: true }));
			dispatch(removeSelectedToComplete(id));
		});;
	};

	const handleToUndoCompleteSelectedTodos = async () => {
		selectedTodo.todoToUndoComplete.forEach((id) => {
			dispatch(updateTodoStatus({ id, completed: false }));
			dispatch(removeSelectedToUndoComplete(id));
		});
	};

	return (
		<div className="button-container">
			<button className="button-complete" onClick={handleToCompleteSelectedTodos}>COMPLETE</button>
			<button className="button-undo" onClick={handleToUndoCompleteSelectedTodos}>UNDO</button>
		</div>
	);
};

export default TextBoxButtons;
