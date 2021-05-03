let nextTaskId = 0;

export const addTask = name => ({
    type: 'ADD_TASK',
    id: nextTaskId++,
    name
});

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});

export const toggleDone = id => ({
    type: 'TOGGLE_DONE',
    id
});

export const toggleEdit = id => ({
    type: 'TOGGLE_EDIT',
    id
});

export const editTask = (id,name) => ({
    type: 'EDIT_TASK',
    id,
    name
});


export const VisibilityFilters = {
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_ALL: 'SHOW_ALL'
};
