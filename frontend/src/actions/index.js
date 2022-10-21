// action types
export const ADD_TODO = 'ADD_TODO';
export const MODIFY_TODO = 'MODIFY_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const ALL_CHANGE_TODO = 'ALL_CHANGE_TODO';

// actions creator functions
export const AddTodo = (id, title) => {
  return {
    type: ADD_TODO,
    payload: {
      id,
      title,
      check: false,
      memo: '',
    },
  };
};
export const ModifyTodo = (id, check, memo) => {
  return {
    //TODO
    type: MODIFY_TODO,
    payload: {
      id,
      memo,
      check,
    },
  };
};

export const RemoveTodo = (id) => {
  return {
    //TODO
    type: REMOVE_TODO,
    payload: {
      id,
    },
  };
};

export const AllChangeTodo = (check) => {
  return {
    //TODO
    type: ALL_CHANGE_TODO,
    payload: {
      check,
    },
  };
};
