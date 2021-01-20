import models from '../models';
import UserServices from './user';
import StoreServices from './store';

const user = new UserServices(models);
const store = new StoreServices(models);

export default {
  user, store,
};
