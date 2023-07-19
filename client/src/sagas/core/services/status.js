import { call, put, select } from 'redux-saga/effects';

import request from '../request';
import selectors from '../../../selectors';
import actions from '../../../actions';
import api from '../../../api';
import { createLocalId } from '../../../utils/local-id';

export function* addStatusToBoardFilter(id, boardId) {
  yield put(actions.addStatusToBoardFilter(id, boardId));
}

export function* addStatusToFilterInCurrentBoard(id) {
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
