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
    case MODIFY_TODO:
      return Object.assign({}, state, {
        todoList: assignTodoList(state, action),
      });
    default:
      return state;
  }
};
const assignTodoList = (state, action) => {
  const copyState = state.todoList.map((ele) => {
    if (ele.id === action.payload.id) {
      return Object.assign(ele, action.payload);
    }
    return ele;
  });
  return copyState;
};

export default todoReducer;
