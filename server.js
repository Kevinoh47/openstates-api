'use strict';
require('dotenv').config();
const app = require('./src/app.js');
app.set( 'port', process.env.PORT);
app.listen(
  app.get('port'),
  () => {
    const port = app.get('port');
    console.log(`GraphQL Server running at http://127.0.0.1:${port}`);
  }
)

// const apiKey = process.env.API_KEY;
// const options = {
//   provider: 'openstates',
//   httpAdapter: 'https',
//   apiKey: apiKey,
//   formatter: null
// };