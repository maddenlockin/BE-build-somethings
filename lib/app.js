const express = require ('express');
const notFoundMiddleware = require ('./middleware/not-found.js');
const errorMiddleware = require ('./middleware/error.js');
const addressController = require ('./controllers/address.js');
const accessController = require ('./controllers/accessibility.js');
const directionController = require ('./controllers/direction.js');
const app = express();

app.use(express.json());

app.use('/api/v1/restrooms', addressController);
app.use('/api/v1/restrooms/access', accessController);
app.use('/api/v1/restrooms/directions', directionController);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

module.exports = app;
