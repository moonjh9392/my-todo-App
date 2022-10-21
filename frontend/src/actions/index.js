// action types
export const ADD_TODO = 'ADD_TODO';
export const MODIFY_TODO = 'MODIFY_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

// actions creator functions
export const AddTodo = (id, title) => {
  return {
    type: ADD_TODO,
    payload: {
      id,
      title,
    },
  };
};
export const ModifyTodo = (itemId, data) => {
  return {
    //TODO
    type: MODIFY_TODO,
    payload: {
      itemId,
      data,
    },
  };
};

export const RemoveTodo = (itemId) => {
  return {
    //TODO
    type: REMOVE_TODO,
    payload: {
      itemId,
    },
  };
};
