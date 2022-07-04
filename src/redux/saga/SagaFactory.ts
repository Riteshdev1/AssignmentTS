import AppAction from '../action/AppAction';
import DealDetailAction from '../action/deal/DealDetailAction';
import {takeEvery} from 'redux-saga/effects';
import {searchDeals, findDealByKey} from './AppSaga';

function* dataSaga() {
  yield takeEvery(AppAction.GET_DEALS, searchDeals);
  yield takeEvery(DealDetailAction.DEAL_FETCH_DETAIL, findDealByKey);
}

export default dataSaga;
