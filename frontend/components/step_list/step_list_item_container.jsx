import { connect } from 'react-redux';
import StepListItem from './step_list_item';
import {updateStep, deleteStep} from '../../actions/step_actions';


const mapDispatchToProps = (dispatch, {step}) => ({
  updateStep: (step) => dispatch(updateStep(step)),
  deleteStep: () => dispatch(deleteStep(step)),
});

export default connect(
  null,
  mapDispatchToProps
)(StepListItem);