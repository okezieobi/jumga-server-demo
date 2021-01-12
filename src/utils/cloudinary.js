import { v2 } from 'cloudinary';

import env from './env';

v2.config(env.cloudinary);

export default v2;
