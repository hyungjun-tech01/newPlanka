import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import entryActions from '../entry-actions';
import SignIn from '../components/SignIn';

const mapStateToProps = ({
  ui: {
    userCreateForm: { data: defaultData, isSubmitting, error },
  },
}) => ({
  defaultData,
  isSubmitting,
  error,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      onCreate: entryActions.createUser,
      onMessageDismiss: entryActions.clearUserCreateError,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
