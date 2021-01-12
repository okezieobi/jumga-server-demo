import { config } from 'dotenv';

config();

const databaseURL = process.env.NODE_ENV === 'test' ? process.env.TEST_DATABASE_URL : process.env.DATABASE_URL || process.env.DEV_DATABASE_URL;

export default {
  databaseURL,
  jwtSecret: process.env.JWT_SECRET,
  cloudinary: {
    cloud_name: process.env.ClOUDINARY_CLOUD_NAME,
    api_key: process.env.ClOUDINARY_API_KEY,
    api_secret: process.env.ClOUDINARY_API_SECRET,
  },
};
