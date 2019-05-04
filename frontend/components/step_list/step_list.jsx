import React from 'react';
import StepListItemContainer from './step_list_item_container';
import StepForm from './step_form';

export default class StepList extends React.Component{
  constructor(props){
    super(props);
  }
  
  render(){
    const { steps, receiveStep } = this.props;
    let stepListItemContainers = steps.map(step => (
      <StepListItemContainer 
        key={`step-list-item-container${step.id}}`}
        step={step}/> 
    ));
  
    return(
      <div>
        <ul>
          {stepListItemContainers}
        </ul>
        <StepForm receiveStep={receiveStep} todo_id={this.props.todo_id}/>
      </div>
    )
  }
}
