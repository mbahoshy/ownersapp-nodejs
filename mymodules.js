var mysql = require('mysql');

var connection = mysql.createConnection({
   user: "root",
   password: "test",
   database: "nodedb"
});

function getIndex (req, res){
	console.log("Request handler 'start' was called." + __dirname);
	res.render('index');
	res.end();
}

function editPage (req, res){
	console.log(req.params.modelid);
	var modelquery = req.params.modelid;
	console.log("You're query is " + modelquery);

	connection.query('SELECT * FROM manuals where manualid like ' + modelquery + ';', function (error, rows, fields) {
		res.render('edit', {result: rows});
		console.log(rows);
		res.end();
	});
}

function updatePage (req, res){
	var manualid = req.params.modelid;
	console.log(manualid);
	
	connection.query('UPDATE manuals SET modelNumber="' + req.body.modelnumber + '", category="' + req.body.category + '", subcategory="' + req.body.subcategory + '", link="' + req.body.link + '" WHERE manualid=' + manualid + ';', function (error, rows, fields) {
		res.render('index');
		console.log(error);
		res.end();
	});
}

function searchResults (req, res){
	var modelquery = req.body.model;
	var searchtype = req.body.searchtype;

	console.log("You're search is " + searchtype);

	connection.query('SELECT * FROM manuals where ' + searchtype + ' like "' + modelquery + '";', function (error, rows, fields) {
		//res.writeHead(200, {'Content-Type': 'x-application/json'});
		//rowsF = JSON.stringify(rows);
		res.render('searchresults', {result: rows, squery: modelquery});
		// Send data as JSON string.
		// Rows variable holds the result of the query.
		console.log(rows);
		res.end();
	});

}

function addPage (req, res) {
	res.render('add');
	res.end();
}

function addManual (req, res) {
	connection.query('INSERT into manuals (modelNumber, category, subcategory, link) VALUES ("' + req.body.modelnumber + '", "' + req.body.category + '", "' + req.body.subcategory +'", "' + req.body.link +'")', function (error, rows, fields) {
		res.render('index');
		console.log(error);
		res.end();
	});
}

function showAll (req, res) {
	connection.query('SELECT * FROM manuals;', function (error, rows, fields) {
		res.render('searchresults', {result: rows});
		res.end();
	});	
}

exports.getIndex = getIndex;
exports.editPage = editPage;
exports.updatePage = updatePage;
exports.searchResults = searchResults;
exports.addPage = addPage;
exports.addManual = addManual;
exports.showAll = showAll;
 