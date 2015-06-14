/**
 * Created by zennote on 15. 6. 12.
 */

var connect = require('connect'),
	serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic("../05.ProAngular_ch11/src"));

app.use('/bootstrap', serveStatic(__dirname + '/node_modules/bootstrap/dist/css/'));

app.use('/angular', serveStatic(__dirname + '/node_modules/angular/'));

app.listen(5000);

console.log("localhost:5000/directives.html");