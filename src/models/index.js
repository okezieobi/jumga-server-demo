/* eslint-disable no-console */
import mongoose, { Schema, model } from 'mongoose';

import userSchema from './user';
import storeSchema from './store';
import env from '../utils/env';

const models = {
  User: model('User', userSchema(Schema, env)),
  Store: model('Store', storeSchema(Schema, env)),
};
mongoose.connect(env.databaseURL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
const db = mongoose.connection;

const databaseSetup = async () => {
  await db.once('open', () => console.log('connected to database'));
};

if (process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'production') {
  databaseSetup();
} else {
  databaseSetup();
  Object.values(models).forEach(async (modelProp) => { await modelProp.deleteMany(); });
}

export default {
  ...models, db,
};
