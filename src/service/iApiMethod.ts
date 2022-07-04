import CommonModel from '../model/CommonModel';
export default interface iApiMethod<T extends CommonModel> {
  getAllDeals(): Promise<T[]>;
  searchDeals(search: String): Promise<T[]>;
  getDealDetailById(dix: String): Promise<T | null>;
};
