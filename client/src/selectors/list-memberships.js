import { createSelector } from 'redux-orm';

import orm from '../orm';

export const makeSelectListMembershipById = () =>
  createSelector(
    orm,
    (_, id) => id,
    ({ ListMembership }, id) => {
      const listMembershipModel = ListMembership.withId(id);

      if (!listMembershipModel) {
        return listMembershipModel;
      }

      return listMembershipModel.ref;
    },
  );

export const selectListMembershipById = makeSelectListMembershipById();

export default {
  makeSelectListMembershipById,
  selectListMembershipById,
};
