export const fetchSteps = (todo_id) => (
  $.ajax({
    method: 'GET',
    url: `/api/todos/${todo_id}/steps`
  })
)

export const createStep = (step,  todo_id) => (
  $.ajax({
    method: 'POST',
    url: `/api/todos/${todo_id}/steps`,
    dataType: 'json',
    data: step
  })
)

export const updateStep = (step) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/steps/${step.id}`,
    data: { step }
  })
)

export const deleteStep = (step) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/steps/${step.id}`,
  })
)