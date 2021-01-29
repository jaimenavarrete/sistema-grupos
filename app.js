const express = require('express');
const app = express();

// Set express variables
app.set('port', 3001);

// Import and called routes
const routes = require('./routes/routes');
app.use('/', routes());

app.listen(app.get('port'), () => 
    console.log(`Server listen on port ${app.get('port')}`)
);