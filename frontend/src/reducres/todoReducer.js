import { ADD_TODO } from '../actions/index';

const initialState = {
  todoList: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todoList: [...state.todoList, action.payload],
      });
    default:
      return state;
  }
};

export default todoReducer;
