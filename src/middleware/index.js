import controllers from '../controllers';
import validations from '../validations';
import UserMiddleware from './user';
import StoreMiddleware from './store';

const user = new UserMiddleware(validations, controllers);
const store = new StoreMiddleware(validations, controllers);

export default {
  user, store,
};
