var express = require('express');
var mod = require('./mymodules');
var app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use(express.bodyParser());


app.get('/', mod.getIndex);

app.get('/edit/:modelid', mod.editPage);

app.get('/add', mod.addPage);

app.get('/all', mod.showAll);

app.post('/addManual', mod.addManual);

app.post('/update/:modelid', mod.updatePage);

app.post('/modelSearch', mod.searchResults);

app.listen(8080);
