import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodosByComplete } from '../../../redux/selectors/storeSelectors';
import { RootState } from '../../../redux/store/store';
import { addToComplete, addToUndoComplete, removeSelectedToComplete, removeSelectedToUndoComplete } from '../../../redux/features/todoReducer';
import { TodoState } from '../../../types/types'
import './index.css';

const TextBox: React.FC<{ isCompleted: boolean }> = ({ isCompleted }) => {
	const storedTodos = useSelector(getTodosByComplete(isCompleted));
	const todoToComplete = useSelector((state: RootState) => state.selectedTodo.todoToComplete);
	const todoToUndoComplete = useSelector((state: RootState) => state.selectedTodo.todoToUndoComplete);
	const searchCompletedTodo = useSelector((state: RootState) => state.selectedTodo.searchCompletedTodo);
	const [prevTodos, setPrevTodos] = useState<TodoState>([]);

	const dispatch = useDispatch();

	function areArraysEqual(array1: TodoState, array2: TodoState) {
		if (array1.length !== array2.length) {
			return false;
		}
		for (let i = 0; i < array1.length; i++) {
			if (array1[i].id !== array2[i].id || array1[i].title !== array2[i].title) {
				return false;
			}
		}
		return true;
	}

	const handleToggleTodo = (id: number) => {
		if (!isCompleted) {
			if (todoToComplete.includes(id)) {
				dispatch(removeSelectedToComplete(id));
			} else {
				dispatch(addToComplete(id));
			}
		} else {
			if (todoToUndoComplete.includes(id)) {
				dispatch(removeSelectedToUndoComplete(id));
			} else {
				dispatch(addToUndoComplete(id));
			}
		}

	};

	useEffect(() => {
		if (searchCompletedTodo) {
			const filteredTodos = storedTodos.filter((todo) =>
				todo.title.toLowerCase().includes(searchCompletedTodo.toLowerCase())
			);
			if (!areArraysEqual(filteredTodos, prevTodos)) {
				setPrevTodos(filteredTodos);
			}
		} else if (!areArraysEqual(storedTodos, prevTodos)) {
			setPrevTodos(storedTodos);
		}
	}, [storedTodos, searchCompletedTodo, prevTodos]);


	return (
		<div className="textBox-container">
			<ul>
				{prevTodos.map((todo) => (
					<li key={todo.id}>
						<label>
							<input
								type="checkbox"
								onChange={() => handleToggleTodo(todo.id)}
							/>
							{todo.title}
						</label>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TextBox;
