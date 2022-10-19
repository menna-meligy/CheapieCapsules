const express = require('express');

const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth');
const { ErrorCode } = require('@angular/compiler-cli/src/ngtsc/diagnostics');
const errorController = requre('./controllers/erros');
const app = express();

const ports = process.env.PORT || 3000;
app.use(bodyParser.json());

app.use ((req, res ,next) =>{
res.setHeader('Access-control-Allow-Origin' , '*');
res.setHeader('Access-control-Allow-Method' , 'GET , POST , PUT , DELETE');
res.setHeader('Access-control-Allow-Headers' , 'Content-Type , Authorization');
next();
});

app.use('/auth' , authRoutes);

app.use(ErrorController.get404);

app.use(ErrorController.get500);

app.listen(ports , () => console.log(`Listening on port ${ports}`));
