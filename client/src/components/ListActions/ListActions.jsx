import React from 'react';
import PropTypes from 'prop-types';

import Filters from './Filters';
import Memberships from '../Memberships';
import BoardMembershipPermissionsSelectStep from '../BoardMembershipPermissionsSelectStep';

import styles from './ListActions.module.scss';

const ListActions = React.memo(
  ({
    memberships,
    labels,
    filterUsers,
    filterLabels,
    allUsers,
    canEdit,
    canEditMemberships,
    onMembershipCreate,
    onMembershipUpdate,
    onMembershipDelete,
    onUserToFilterAdd,
    onUserFromFilterRemove,
    onLabelToFilterAdd,
    onLabelFromFilterRemove,
    onLabelCreate,
    onLabelUpdate,
    onLabelMove,
    onLabelDelete,
  }) => {
    return (
      <div className={styles.wrapper}>
        <div className={styles.actions}>
          <div className={styles.action}>
            <Memberships
              items={memberships}
              allUsers={allUsers}
              permissionsSelectStep={BoardMembershipPermissionsSelectStep}
              canEdit={canEditMemberships}
              onCreate={onMembershipCreate}
              onUpdate={onMembershipUpdate}
              onDelete={onMembershipDelete}
            />
          </div>
        </div>
      </div>
    );
  },
);

ListActions.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  memberships: PropTypes.array.isRequired,
  labels: PropTypes.array.isRequired,
  filterUsers: PropTypes.array.isRequired,
  filterLabels: PropTypes.array.isRequired,
  allUsers: PropTypes.array.isRequired,
  /* eslint-enable react/forbid-prop-types */
  canEdit: PropTypes.bool.isRequired,
  canEditMemberships: PropTypes.bool.isRequired,
  onMembershipCreate: PropTypes.func.isRequired,
  onMembershipUpdate: PropTypes.func.isRequired,
  onMembershipDelete: PropTypes.func.isRequired,
  onUserToFilterAdd: PropTypes.func.isRequired,
  onUserFromFilterRemove: PropTypes.func.isRequired,
  onLabelToFilterAdd: PropTypes.func.isRequired,
  onLabelFromFilterRemove: PropTypes.func.isRequired,
  onLabelCreate: PropTypes.func.isRequired,
  onLabelUpdate: PropTypes.func.isRequired,
  onLabelMove: PropTypes.func.isRequired,
  onLabelDelete: PropTypes.func.isRequired,
};

export default ListActions;
