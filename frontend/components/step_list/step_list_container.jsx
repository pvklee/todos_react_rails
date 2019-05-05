import { connect } from 'react-redux';
import { stepsByTodoId } from '../../reducers/selectors';
import {  createStep, updateStep, deleteStep } from '../../actions/step_actions'
import StepList from './step_list';

const mapStateToProps = (state, {todo_id}) => ({
  steps: stepsByTodoId(state, todo_id),
  todo_id
});

const mapDispatchToProps = (dispatch, {todo_id}) => ({
  createStep: (step) => dispatch(createStep(step, todo_id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepList);