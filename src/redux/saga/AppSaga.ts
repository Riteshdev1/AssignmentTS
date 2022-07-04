import {put} from 'redux-saga/effects';
import AppAction from '../action/AppAction';
import UtilAction from '../action/UtilAction';
import IAction from '../action/IAction';
import DealDetailAction from '../action/deal/DealDetailAction';
import {commonService} from '../../service/CommonService';

export function* findDealByKey(action: IAction<string, any>) {
  try {
    const {data} = yield commonService.getDealDetailById(action.payload!);
    console.log('findDealByKey', JSON.stringify(data));
    yield put({type: DealDetailAction.DEAL_FETCHED, data: data});
  } catch (e) {
    yield put({type: UtilAction.ERROR, error: 'Cannot process data'});
  }
}

export function* searchDeals(action: IAction<string, any>) {
  try {
    if (action.payload !== undefined && action.payload!.length > 0) {
      const {data} = yield commonService.searchDeals(action.payload!);
      console.log('if data', JSON.stringify(data));
      yield put({type: AppAction.DEALS_LOADED, data: data});
    } else {
      const {data} = yield commonService.getAllDeals();
      console.log('else data', JSON.stringify(data));
      yield put({type: AppAction.DEALS_LOADED, data: data});
    }
  } catch (e) {
    yield put({type: UtilAction.ERROR, error: 'Cannot load deals'});
  }
}
