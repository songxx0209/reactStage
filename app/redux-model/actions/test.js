import { createAsyncAction } from 'redux-action-tools';
import request from '../../lib/request';

import * as types from '../actionType';

export const getInfo = createAsyncAction(types.ADD_INFO, async () => {
  const { data } = await request.get('http://localhost:3000/getNormalDishList');
  return data;
});


export const getData = () => ({ type: types.GET_DATA });
