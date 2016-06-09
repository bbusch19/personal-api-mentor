'use strict'
const express = require('express'),
bodyParser = require('body-parser'),
middleware = require('./controllers/middleware.js'),
mainCtrl = require('./controllers/mainCtrl.js'),
port = 3000,
app = express();

//----------------------------------------------------------------------------------
// MIDDLEWARE
//----------------------------------------------------------------------------------

app.use(middleware.addHeaders);
app.use(bodyParser.json());

//----------------------------------------------------------------------------------
// READ ONLY ENDPOINTS
//----------------------------------------------------------------------------------

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getLatestOccupation);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobby);
app.get('/skillz', mainCtrl.getSkillz);
app.get('/secrets/:username/:pin', middleware.verifyUser);

//----------------------------------------------------------------------------------
// WRITE ENDPOINTS
//----------------------------------------------------------------------------------

app.put('/name', mainCtrl.changeName);
app.put('/location', mainCtrl.changeLocation);
app.post('/hobbies', mainCtrl.addHobby);
app.post('/occupations', mainCtrl.addOccupation);
app.post('/skillz', mainCtrl.addSkill);


app.listen(port, () => console.log( `listening on port ${port}` ))
