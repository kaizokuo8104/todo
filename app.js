const express = require('express');
const bodyParser = require('body-parser');

const app = express();

var listItems = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
	var today = new Date();
	var currentDay = today.getDay();

	var day = '';

	var options = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};
	day = today.toLocaleDateString('en-US', options);

	
	res.render('list', { kindOfDay: day, list: listItems });
});

app.post('/', function (req, res) {
	var item = req.body.newItem;
	listItems.push(item);
	res.redirect('/');
});

app.listen(3000, function () {
	console.log('server is running on port 3000.');
});
