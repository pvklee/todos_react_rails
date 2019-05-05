import React from 'react';
import ErrorList from './error_list';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      done: false,
      tag_names: [],
      newTag: ''
    };
    this.currentTagInputValue;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.addTag = this.addTag.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value })
  }

  addTag(e) {
    this.setState({
      tag_names: [...this.state.tag_names, this.state.newTag],
      newTag: ''
    });
  }

  removeTag(idx) {
    this.setState({
      tag_names: this.state.tag_names.filter((_, index) => index !== idx)
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state);
    this.props.createTodo({ todo }).then(() => {
      this.setState({ title: '', body: '', tag_names: [], newTag: '' });
    });
  }

  render() {
    const tagsList = this.state.tag_names.map((tag, idx) => {
      const clickHandler = () => this.removeTag(idx);
      return <li key={idx} onClick={clickHandler}>{tag} </li>
    })

    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <ErrorList errors={this.props.errors} />
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
        <label>Add tag:
          <input
            className="input"
            onChange={this.update('newTag')}
            value={this.state.newTag}
            placeholder="errands">
          </input>
          <button onClick={this.addTag} type="button">Add Tag</button>
        </label>
        <ul className="tags-list">{tagsList}</ul>
        <button className="create-button">Create Todo!</button>
      </form>
    )
  }
}