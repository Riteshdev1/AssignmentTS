import axios from 'axios';
import Deal from '../model/deal/Deal';
import {apiHost} from '../util/util';
import iApiMethod from './iApiMethod';

class CommonService<T extends Deal> implements iApiMethod<T> {
  rootURL: string = apiHost + '/api/deals';

  async searchDeals(search: String): Promise<[]> {
    try {
      return await axios.get(this.rootURL + '?searchTerm=' + search);
    } catch (error) {
      console.log('searchDeals', error);
      throw error;
    }
  }

  async getAllDeals(): Promise<T[]> {
    try {
      return await axios.get(this.rootURL);
    } catch (error) {
      console.log('getAllDeals', error);
      throw error;
    }
  }

  async getDealDetailById(dix: String): Promise<T | null> {
    try {
      return await axios.get(this.rootURL + '/' + dix);
    } catch (error) {
      console.log('getDealDetailById', error);
      throw error;
    }
  }
}

export const commonService = new CommonService();
