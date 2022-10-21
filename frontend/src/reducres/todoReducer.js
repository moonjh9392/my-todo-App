import { ADD_TODO, MODIFY_TODO } from '../actions/index';

const initialState = {
  todoList: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todoList: [...state.todoList, action.payload],
      });
    case MODIFY_TODO: {
      return Object.assign({}, state, {
        todoList: state.todoList.map((ele) => {
          if (ele.id === action.payload.id) {
            return Object.assign(ele, action.payload);
          }
          return ele;
        }),
      });
    }
    default:
      return state;
  }
};

export default todoReducer;
