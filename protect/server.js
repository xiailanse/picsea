var express = require('express');
var path = require('path');
var app = express();
app.listen(8000);

var protectDir = __dirname;

app.use(express.static(path.resolve(__dirname, '../static')));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var picController = require(path.resolve(protectDir, 'controllers/piccontroller'));

//注册路由
app.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname, '../static/html/index.html'));
});

var apiRouter = express.Router();
apiRouter.post('/getPic', picController.getPic);

app.use('/api', apiRouter);


app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.status(500).send('500 Error');
});