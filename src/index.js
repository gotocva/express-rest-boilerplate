import http from 'http';

import mongoose from './database/connection';
import { env } from './configs/env';

const app = require('./routes/routes')();

const server = http.createServer(app);

/**
 * TODO node cluster module
 */
server.listen(env.PORT || 3000, () => { console.log(`app running on port ${env.PORT}`); });


