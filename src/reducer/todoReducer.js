export const initialTodos = [];
export const todoReducer = (state, action) => {
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
                { ...todo, text: action.payload.text } : todo);
        case "TOGGLE_TODO":
            return state.map(todo => todo.id === action.payload.id ?
                { ...todo, completed: !todo.completed } : todo);
        case "DELETE_TODO":
            return state.filter(todo => todo.id !== action.payload.id);
        case "CLEAR_COMPLETED":
            return state.filter(todo => !todo.completed);
        default:
            return state;
    }
};
