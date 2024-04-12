require('dotenv').config({path:__dirname + '/.env'});
const express = require('express'),
  serveStatic = require('serve-static'),
  history = require('connect-history-api-fallback'),
  port = process.env.PORT || 4000;
const app = express();

app.use(history());
app.use(serveStatic(__dirname + '/dist'));
app.listen(port, () => {
  console.log('server run on port: ' + port);
});
