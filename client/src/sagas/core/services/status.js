import { call, put, select } from 'redux-saga/effects';

import request from '../request';
import selectors from '../../../selectors';
import actions from '../../../actions';
import api from '../../../api';
import { createLocalId } from '../../../utils/local-id';

export function* createStatus(boardId, data) {
  const nextData = {
    ...data,
    position: yield select(selectors.selectNextLabelPosition, boardId),
  };

  const localId = yield call(createLocalId);

  yield put(
    actions.createStatus({
      ...nextData,
      boardId,
      id: localId,
    }),
  );

  let label;
  try {
    ({ item: label } = yield call(request, api.createLabel, boardId, nextData));
  } catch (error) {
    yield put(actions.createLabel.failure(localId, error));
    return;
  }

  yield put(actions.createLabel.success(localId, label));
}

export function* addStatusToBoardFilter(id, boardId) {
  console.log('addStatusToBoardFilter', id, boardId);
  yield put(actions.addStatusToBoardFilter(id, boardId));
}

export function* addStatusToFilterInCurrentBoard(id) {
  console.log('addStatusToFilterInCurretBoard', id);
  const { boardId } = yield select(selectors.selectPath);

  yield call(addStatusToBoardFilter, id, boardId);
}

export function* removeStatusFromBoardFilter(id, boardId) {
  yield put(actions.removeStatusFromBoardFilter(id, boardId));
}

export function* removeStatusFromFilterInCurrentBoard(id) {
  const { boardId } = yield select(selectors.selectPath);

  yield call(removeStatusFromBoardFilter, id, boardId);
}

export default {
  addStatusToFilterInCurrentBoard,
  removeStatusFromFilterInCurrentBoard,
};
