import EntryActionTypes from '../constants/EntryActionTypes';

const addStatusToFilterInCurrentBoard = (id) => ({
  type: EntryActionTypes.STATUS_TO_FILTER_IN_CURRENT_BOARD_ADD,
  payload: {
    id,
  },
});

const removeStatusFromFilterInCurrentBoard = (id) => ({
  type: EntryActionTypes.STATUS_FROM_FILTER_IN_CURRENT_BOARD_REMOVE,
  payload: {
    id,
  },
});

export default {
  addStatusToFilterInCurrentBoard,
  removeStatusFromFilterInCurrentBoard,
};
