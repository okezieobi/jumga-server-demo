import { validationResult, checkSchema } from 'express-validator';

import UserSchema from './user';
import StoreSchema from './store';
import fileUpload from '../utils/fileUpload';

const handleValidationErr = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) next();
  else next({ messages: errors.array(), status: 400 });
};

/*
const handleFileUploadErr = ({ file }, res, next) => {
  if (file) next();
  else next({ message: 'File upload is required', status: 400 });
};
*/

const userSchema = new UserSchema(checkSchema);
const storeSchema = new StoreSchema(checkSchema);

export default {
  user: {
    signup: [fileUpload.image.single('avatar'), userSchema.validateSignup, handleValidationErr],
    login: [userSchema.validateLogin, handleValidationErr],
    jwt: [userSchema.validateJWT, handleValidationErr],
  },
  store: {
    create: [fileUpload.image.single('picture'), storeSchema.validateInput, handleValidationErr],
    id: [storeSchema.validateEntryId, handleValidationErr],
  },
};
