import React from 'React';
import merge from 'lodash/merge';


export default class StepListItem extends React.Component{
  constructor(props){
    super(props);
    this.toggleStep = this.toggleStep.bind(this);
  }

  toggleStep(e){
    const { step, receiveStep } = this.props;
    const newStep = merge({}, step, {done: !step.done})
    receiveStep(newStep);
  }
  
  render(){
    const { step, removeStep, receiveStep } = this.props;
    return(
      <li>
        <p className="step-title">{ step.title }</p>
        <p className="step-body">{ step.body }</p>
        <button onClick={removeStep}>Remove Step</button>
        <button onClick={this.toggleStep}>{step.done ? 'Undo' : 'Done'}</button>
      </li>
    )
  }
}
