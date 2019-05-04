export const allTodos = state => (
  Object.keys(state.todos).map(key => state.todos[key])
);

export const stepsByTodoId = (state, todoId) => {
  let stepsArray = [];
  Object.keys(state.steps).forEach(key => {
    if (state.steps[key].todo_id === todoId){
      stepsArray.push(state.steps[key]);
    }
  })
  return stepsArray;
};
