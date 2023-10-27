import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import useGetTodos from "../hooks/useGetTodos";
import ListBar from "./listBar";
import TopBar from "./topBar";
import "./index.css";

const TodoList: React.FC = () => {
	const dispatch = useDispatch();
	const getTodos = useGetTodos();

	useEffect(() => {
		getTodos();
	}, [dispatch, getTodos]);

	return (
		<div className="container">
			<TopBar />
			<ListBar />
		</div>
	);
};

export default TodoList;
