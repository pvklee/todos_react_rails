import React from 'react';
import StepListContainer from '../step_list/step_list_container';

class TodoDetailView extends React.Component {

  componentDidMount(){
    this.props.requestSteps();
  }

  render() {
    const { todo, deleteTodo } = this.props;
    return(
      <div>
        <p className="todo-body">{ todo.body }</p>
        <StepListContainer todo_id={ todo.id } />
        <button
          className="delete-button"
          onClick={ deleteTodo }>Delete Todo</button>
      </div>
    );
  }
}

export default TodoDetailView;
