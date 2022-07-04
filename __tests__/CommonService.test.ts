/**
 * @format
 */
import 'react-native';
import axios from 'axios';
import {commonService} from '../src/service/CommonService';
import {apiHost} from '../src/util/util';

jest.mock('axios', () => {
  return {
    get: jest.fn(),
  };
});

describe('fetchDealsFromApi', () => {
  it('fetches all deals', async () => {
    const dummyGetResponse = {
      key: 'dummyGetResponse',
    };

    const allDeals = commonService.getAllDeals();

    expect(allDeals).resolves.toEqual([dummyGetResponse]);
    expect(axios.get).toHaveBeenCalledWith(`${apiHost}/api/deals`);
    // expect(axios.get).toHaveBeenCalled(1);
  });

  it('fetches the details of a deal for a given deal Id', async () => {
    const dummyGetResponse = {
      key: 'dummyGetResponse',
    };

    const dealDetail = commonService.getDealDetailById('101');

    expect(dealDetail).resolves.toEqual([dummyGetResponse]);
    expect(axios.get).toHaveBeenCalledWith(`${apiHost}/api/deals/101`);
  });

  it('fetches the deals from search', async () => {
    const dummyGetResponse = {
      key: 'dummyGetResponse',
    };

    const searchDeal = commonService.searchDeals('search');

    expect(searchDeal).resolves.toEqual([dummyGetResponse]);
    expect(axios.get).toHaveBeenCalledWith(
      `${apiHost}/api/deals?searchTerm=search`,
    );
  });
});
