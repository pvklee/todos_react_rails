export const fetchTodos = () => (
  $.ajax({
    method: 'GET',
    url: '/api/todos'
  })
)

export const createTodo = (todo) => (
  $.ajax({
    method: 'POST',
    url: '/api/todos',
    dataType: 'json',
    data: todo
  })
)

export const updateTodo = (todo) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/todos/${todo.id}`,
    data: { todo }
  })
)