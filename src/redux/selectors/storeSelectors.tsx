import { RootState } from '../store/store';

export const getTodosByComplete = (isCompleted: boolean) => (state: RootState) => {
	return state.datastore.filter((todo) => todo.completed === isCompleted);
};



