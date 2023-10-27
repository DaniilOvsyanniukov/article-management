export interface Todo {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

export type TodoState = Todo[];

export type SelectedTodoIds = {
	searchCompletedTodo: string;
	todoToComplete: number[];
	todoToUndoComplete: number[];
};

export interface AddButtonProps {
	todoTitle: string;
}
