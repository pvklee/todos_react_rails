import React from 'React';
import merge from 'lodash/merge';


export default class StepListItem extends React.Component{
  constructor(props){
    super(props);
    this.toggleStep = this.toggleStep.bind(this);
  }

  toggleStep(e){
    const { step, updateStep } = this.props;
    const newStep = merge({}, step, {done: !step.done})
    updateStep(newStep);
  }
  
  render(){
    const { step, deleteStep } = this.props;
    return(
      <li>
        <p className="step-title">{ step.title }</p>
        <p className="step-body">{ step.body }</p>
        <button onClick={deleteStep}>Remove Step</button>
        <button onClick={this.toggleStep}>{step.done ? 'Undo' : 'Done'}</button>
      </li>
    )
  }
}
