import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import selectors from '../selectors';
import entryActions from '../entry-actions';
import { BoardMembershipRoles } from '../constants/Enums';
import BoardActions from '../components/BoardActions';

const mapStateToProps = (state) => {
  const allUsers = selectors.selectUsers(state);
  const isCurrentUserManager = selectors.selectIsCurrentUserManagerForCurrentProject(state);
  const memberships = selectors.selectMembershipsForCurrentBoard(state);
  const labels = selectors.selectLabelsForCurrentBoard(state);
  const filterUsers = selectors.selectFilterUsersForCurrentBoard(state);
  const filterLabels = selectors.selectFilterLabelsForCurrentBoard(state);
  const currentUserMembership = selectors.selectCurrentUserMembershipForCurrentBoard(state);
  // hjkim add status 추가 '대기','진행','완료'
  const allStatus = [
    { id: '1', name: '대기', color: 'morning-sky', isPersisted: true },
    { id: '2', name: '진행', color: 'berry-red', isPersisted: true },
    { id: '3', name: '완료', color: 'pumpkin-orange', isPersisted: true },
  ];
  const filterStatus = selectors.selectFilterStausForCurrentBoard(state);

  const isCurrentUserEditor =
    !!currentUserMembership && currentUserMembership.role === BoardMembershipRoles.EDITOR;

  return {
    memberships,
    labels,
    filterUsers,
    filterLabels,
    filterStatus,
    allUsers,
    allStatus,
    canEdit: isCurrentUserEditor,
    canEditMemberships: isCurrentUserManager,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      onMembershipCreate: entryActions.createMembershipInCurrentBoard,
      onMembershipUpdate: entryActions.updateBoardMembership,
      onMembershipDelete: entryActions.deleteBoardMembership,
      onUserToFilterAdd: entryActions.addUserToFilterInCurrentBoard,
      onUserFromFilterRemove: entryActions.removeUserFromFilterInCurrentBoard,
      onLabelToFilterAdd: entryActions.addLabelToFilterInCurrentBoard,
      onLabelFromFilterRemove: entryActions.removeLabelFromFilterInCurrentBoard,
      onStatusToFilterAdd: entryActions.addStatusToFilterInCurrentBoard,
      onStatusFromFilterRemove: entryActions.removeStatusFromFilterInCurrentBoard,
      onLabelCreate: entryActions.createLabelInCurrentBoard,
      onLabelUpdate: entryActions.updateLabel,
      onLabelMove: entryActions.moveLabel,
      onLabelDelete: entryActions.deleteLabel,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(BoardActions);
