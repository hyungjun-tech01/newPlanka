import { all, takeEvery } from 'redux-saga/effects';
import services from '../services';
import EntryActionTypes from '../../../constants/EntryActionTypes';

export default function* labelsWatchers() {
  yield all([
    takeEvery(EntryActionTypes.STATUS_TO_FILTER_IN_CURRENT_BOARD_ADD, ({ payload: { id } }) =>
      services.addStatusToFilterInCurrentBoard(id),
    ),
    takeEvery(EntryActionTypes.STATUS_FROM_FILTER_IN_CURRENT_BOARD_REMOVE, ({ payload: { id } }) =>
      services.removeStatusFromFilterInCurrentBoard(id),
    ),
  ]);
}
