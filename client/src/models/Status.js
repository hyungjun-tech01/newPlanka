import { attr } from 'redux-orm';

import BaseModel from './BaseModel';
import ActionTypes from '../constants/ActionTypes';

export default class extends BaseModel {
  static modelName = 'Status';

  static fields = {
    id: attr(),
    name: attr(),
    color: attr(),
  };

  static reducer({ type, payload }, Status) {
    switch (type) {
      case ActionTypes.LOCATION_CHANGE_HANDLE:
      case ActionTypes.CORE_INITIALIZE:
      case ActionTypes.PROJECT_MANAGER_CREATE_HANDLE:
        break;
      case ActionTypes.LABEL_CREATE:
      case ActionTypes.LABEL_CREATE_HANDLE:
      case ActionTypes.LABEL_UPDATE__SUCCESS:
      case ActionTypes.LABEL_UPDATE_HANDLE:
        Status.upsert(payload.status);
        break;
      default:
    }
  }
}
