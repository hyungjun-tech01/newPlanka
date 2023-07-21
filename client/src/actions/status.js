import ActionTypes from '../constants/ActionTypes';

const createStatus = (status) => ({
  type: ActionTypes.STATUS_CREATE,
  payload: {
    status,
  },
});

createStatus.success = (localId, status) => ({
  type: ActionTypes.STATUS_CREATE__SUCCESS,
  payload: {
    localId,
    status,
  },
});

createStatus.failure = (localId, error) => ({
  type: ActionTypes.STATUS_CREATE__FAILURE,
  payload: {
    localId,
    error,
  },
});

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
  createStatus,
  addStatusToBoardFilter,
  removeStatusFromBoardFilter,
};
