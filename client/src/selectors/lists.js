import { createSelector } from 'redux-orm';

import orm from '../orm';
import { isLocalId } from '../utils/local-id';
import { selectPath } from './router';
import { selectCurrentUserId } from './users';

export const makeSelectListById = () =>
  createSelector(
    orm,
    (_, id) => id,
    ({ List }, id) => {
      const listModel = List.withId(id);

      if (!listModel) {
        return listModel;
      }

      return {
        ...listModel.ref,
        isPersisted: !isLocalId(id),
      };
    },
  );

export const selectListById = makeSelectListById();

export const makeSelectCardIdsByListId = () =>
  createSelector(
    orm,
    (_, id) => id,
    ({ List }, id) => {
      const listModel = List.withId(id);

      if (!listModel) {
        return listModel;
      }

      return listModel.getFilteredOrderedCardsModelArray().map((cardModel) => cardModel.id);
    },
  );

export const selectCardIdsByListId = makeSelectCardIdsByListId();

export const selectMembershipsForCurrentList = createSelector(
  orm,
  (state) => selectPath(state).ListId,
  (state) => selectCurrentUserId(state),
  ({ List }, id, currentUserId) => {
    if (!id) {
      return id;
    }

    const listModel = List.withId(id);

    if (!listModel) {
      return listModel;
    }

    return listModel
      .getOrderedMembershipsQuerySet()
      .toModelArray()
      .map((listMembershipModel) => ({
        ...listMembershipModel.ref,
        isPersisted: !isLocalId(listMembershipModel.id),
        user: {
          ...listMembershipModel.user.ref,
          isCurrent: listMembershipModel.user.id === currentUserId,
        },
      }));
  },
);

export default {
  makeSelectListById,
  selectListById,
  makeSelectCardIdsByListId,
  selectCardIdsByListId,
};
