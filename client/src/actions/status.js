import ActionTypes from '../constants/ActionTypes';

const addStatusToBoardFilter = (id, boardId) => ({
  type: ActionTypes.STATUS_TO_BOARD_FILTER_ADD,
  payload: {
    id,
    boardId,
  },
});

const removeStatusFromBoardFilter = (id, boardId) => ({
  type: ActionTypes.STATUS_FROM_BOARD_FILTER_REMOVE,
  payload: {
    id,
    boardId,
  },
});

export default {
  addStatusToBoardFilter,
  removeStatusFromBoardFilter,
};
