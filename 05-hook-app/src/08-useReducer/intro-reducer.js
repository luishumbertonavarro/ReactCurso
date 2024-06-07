const initialState = [
  {
    id: 1,
    todo: "Recolectar la piedra del Alma",
    done: false,
  },
];
const todosReducer = (state = initialState, action = {}) => {
  if (action.type === "[TODO] add todo") {
    return [...state, action.payload];
  }

  return state;
};

let todos = todosReducer();

const newTodo = {
  id: 2,
  todo: "Recolectar la piedra del poder",
  done: false,
};

const addTodoAction = {
  type: "[TODO] add todo",
  payload: newTodo,
};

todos = todosReducer(todos, addTodoAction);

console.log({ state: todos });
