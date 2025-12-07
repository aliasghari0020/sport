export interface todo {
    id: string,
    text: string,
    completed: boolean,
}

export type TodoAction =
    | { type: "ADD_TODO"; payload: { text: string } }
    | { type: "EDIT_TODO"; payload: { text: string, id: string } }
    | { type: "TOGGLE_TODO"; payload: { id: string } }
    | { type: "DELETE_TODO"; payload: { id: string } }
    | { type: "CLEAR_COMPLETED" };
export const initialTodos: todo[] = [];
export const todoReducer = (state: todo[], action: TodoAction): todo[] => {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state, {
                    id: crypto.randomUUID(),
                    text: action.payload.text,
                    completed: false,
                }
            ];
        case "EDIT_TODO":
            return state.map(todo => todo.id === action.payload.id ?
                {...todo, text: action.payload.text} : todo)
        case "TOGGLE_TODO":
            return state.map(todo => todo.id === action.payload.id ?
                {...todo, completed: !todo.completed} : todo);

        case "DELETE_TODO":
            return state.filter(todo => todo.id !== action.payload.id);
        case "CLEAR_COMPLETED":
            return state.filter(todo => !todo.completed);
        default:
                return state;

    }
}