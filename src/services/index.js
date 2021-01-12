import models from '../models';
import UserServices from './user';
import EntityServices from './entity';
import cloudinary from '../utils/cloudinary';

const user = new UserServices(models, cloudinary);
const entity = new EntityServices(models);

export default {
  user, entity,
};
