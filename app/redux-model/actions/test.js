import { createAsyncAction } from 'redux-action-tools';
import request from '../../lib/request';

import * as types from '../actionType';

export const getAreaInfo = createAsyncAction(types.ADD_TODO, async (id) => {
  const { body } = await request.post('/', {
    id,
  });
  return body;
});

export const getData = () => ({ type: types.GET_DATA });
