module.exports = function(app){
	app.get('/', function(req, res) {
	fs.createReadStream(__dirname + './views/index.html', function(error){
		console.log(error);
	}).pipe(res);
});
}