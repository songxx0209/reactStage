import { createAsyncAction } from 'redux-action-tools';
import request from '../../lib/request';

import * as types from '../actionType';

export const getInfo = createAsyncAction(types.ADD_INFO, async () => {
  const { data } = await request.get('http://120.77.33.107:8000/web/get_datas/');
  return data;
});


export const getData = () => ({ type: types.GET_DATA });
