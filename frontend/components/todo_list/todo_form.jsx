import React from 'react';
import { uniqueId } from '../../util/util';
import ErrorList from './error_list';

export default class TodoForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      done: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(property){
    return e => this.setState({[property]: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    const todo = Object.assign({}, this.state, { id: uniqueId() });
    this.props.createTodo({todo}).then(()=>{
        this.setState({title: '', body: ''});
    });
  }

  render(){
    return(
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <ErrorList errors={ this.props.errors } />
        <label>Title:
          <input
            className="input"
            ref="title"
            value={this.state.title}
            onChange={this.update('title')}
            placeholder="buy groceries"
            required>
          </input>
        </label>
        <label>Body:
          <textarea
            className="input"
            ref="body"
            cols="20"
            rows="5"
            value={this.state.body}
            onChange={this.update('body')}
            placeholder="oatmeal, avocados, eggs"
            required>
          </textarea>
        </label>
        <button className="create-button">Create Todo!</button>
      </form>
    )
  }
}