import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setTodos } from '../redux/features/storeReducer';

function useGetTodos() {
	const dispatch = useDispatch();

	function getTodos() {
		try {
			axios.get("https://jsonplaceholder.typicode.com/todos")
				.then((response) => {
					dispatch(setTodos(response.data));
				});
		} catch (error) {
			console.error("Помилка при завантаженні", error);
		}
	}

	return getTodos;
}

export default useGetTodos;
