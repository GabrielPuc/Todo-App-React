const tasks = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    done: false,
                    isEditing:false
                }
            ];
        case 'TOGGLE_DONE':
            return state.map(task =>
                (task.id === action.id)
                    ? {...task, done: !task.done}
                    : task
            ); 
        case 'TOGGLE_EDIT':
            return state.map(task =>
                (task.id === action.id)
                    ? {...task, isEditing: !task.isEditing}
                    : task
            ); 

        case 'EDIT_TASK':
            return state.map(task =>
                (task.id === action.id)
                    ? {...task, name: action.name, isEditing: false}
                    : task
            ); 
        default:
            return state
    }
};

export default tasks