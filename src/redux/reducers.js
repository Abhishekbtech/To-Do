import { ADD_TASK, DELETE_TASK, SET_SEARCH_TERM } from './actions';

const initialState = {
    tasks: [
        { id: 1, description: 'Task 1', deadline: new Date().toISOString(), pending: true },
        { id: 2, description: 'Task 2', deadline: new Date().toISOString(), pending: true },
        { id: 3, description: 'Task 3', deadline: new Date().toISOString(), pending: true },
    ],
    searchTerm: '',
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            };
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload),
            };
        case SET_SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.payload,
            };
        default:
            return state;
    }
};

export default taskReducer;
