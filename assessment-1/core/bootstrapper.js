const express = require('express');
const config = require('./config');
const UncaughtErrorHandler = require('./uncaught.error.handler');
const ShutDownManager = require('./shutdown.manager')

function createApp() {
        const app = express();
        app.use(express.json());
        app.use(UncaughtErrorHandler.handler);

        app.get('/health', (req, res) => {
                res.status(200).send({ message: 'Up and Running' });
        });
        return app;
}



function bootstrap(apiConfig) {
        const app = createApp();
      

        // attach the apis
        app.use(apiConfig.config.ENDPOINT, apiConfig.route);
        const port = process.env.PORT || config.DEFAULT_PORT;
        const server = app.listen(port, () => {
                console.log(`Server is up and running at: ${port}`);
        });

        ShutDownManager.autoManage(server);

}
module.exports = {
        bootstrap
}

