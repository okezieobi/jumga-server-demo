import services from '../services';
import UserController from './user';
import StoreController from './store';

const handleServiceOutput = (data, { locals }, next) => {
  if (data.message) throw data;
  else {
    const resLocal = locals;
    resLocal.data = data;
    next();
  }
};
const user = new UserController(services, handleServiceOutput);
const store = new StoreController(services, handleServiceOutput);

export default {
  user, store, User: UserController,
};
