import React from 'react';

export default class StepForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      done: false,
      todo_id: this.props.todo_id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(property){
    return e => this.setState({[property]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    const step = Object.assign({}, this.state);
    this.props.createStep( {step} ).then(
      ()=>this.setState({
        title: "",
        body: ""
      })
    );
  }

  render() {
    return(
      <form className="step-form" onSubmit={this.handleSubmit}>
        <label>Title:
          <input
            className="input"
            ref="title"
            value={this.state.title}
            onChange={this.update('title')}
            placeholder="drive to grocery store"
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
            placeholder="in a car"
            required>
          </textarea>
        </label>
        <button className="create-button">Create Step!</button>
      </form>
    )
  }
}