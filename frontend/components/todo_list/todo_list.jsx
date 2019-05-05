import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

export default class TodoList extends React.Component{

  componentDidMount(){
    this.props.requestTodos();
  }

  render(){
    const { todos, errors, deleteTodo, createTodo, updateTodo } = this.props;
    const todoItems = todos.map(todo => 
      <TodoListItem
        key={`todo-list-item${todo.id}`}
        todo={todo}
        updateTodo={updateTodo}/>
    );
    const todoForm = <TodoForm createTodo={createTodo} errors={errors}/>;

    return(
      <div>
        <div>
          <ul>
            {todoItems}
          </ul>
        </div>
        <div>
          {todoForm}
        </div>
      </div>
    )
  }
};