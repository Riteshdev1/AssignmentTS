/**
 * @format
 */
import 'react-native';
import dataSaga from '../src/redux/saga/SagaFactory';
import {takeEvery} from 'redux-saga/effects';
import AppAction from '../src/redux/action/AppAction';
import {findDealByKey, searchDeals} from '../src/redux/saga/AppSaga';
import DealDetailAction from '../src/redux/action/deal/DealDetailAction';

describe('fetchDealsFromApi', () => {
  const genObject = dataSaga();
  it('should wait for getAllDeals and every searchDeals action and call searchDeals ApiRequest', () => {
    expect(genObject.next().value).toEqual(
      takeEvery(AppAction.GET_DEALS, searchDeals),
    );
  });

  it('should be done on next iteration', () => {
    const nextObjectInGenerator = genObject.next();
    expect(nextObjectInGenerator.done).toBeFalsy();
    // expect(genObject.next().value).toEqual(
    //   takeEvery(DealDetailAction.DEAL_FETCH_DETAIL, findDealByKey),
    // );
  });

  // eslint-disable-next-line jest/no-identical-title
  it('should be done on next iteration', () => {
    expect(genObject.next().done).toBeTruthy();
  });
});
