export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "[TODO] Add Todo":
      return [...initialState, action.payload];
    case "[TODO] Remove Todo":
      return initialState.filter((todo) => todo.id !== action.payload);
    case "[TODO] Done Todo":
      return 
    default:
      return initialState;
  }
};
