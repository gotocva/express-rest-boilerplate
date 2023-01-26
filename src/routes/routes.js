
import { app } from '../configs/express';
import { v1Router } from './v1/api';

module.exports = () => {

    app.get('/', (req, res) => { res.send('Application working'); });

    app.use('/api/v1', v1Router);
    return app;
}