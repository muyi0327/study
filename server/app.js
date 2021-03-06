
/**
 * Module dependencies.
 */
module.exports = function(){
    var express = require('express');
    var routes = require('./routes');
    var http = require('http');
    var path = require('path');
    var app = express();

    // all environments
    app.set('port', process.env.PORT || 5389);
    app.set('views', path.join('./', 'app'));
    app.set('view engine', 'ejs');
    app.engine('html', require('ejs').renderFile);
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.methodOverride());
    app.use(express.cookieParser('your secret here'));
    app.use(express.session());
    app.use(app.router);
    app.use(express.static(path.join('./', 'app')));
    app.use(express.static(path.join('./', 'bower_components')));

    // development only
    if ('development' == app.get('env')) {
        app.use(express.errorHandler());
    }

    routes(app);

    http.createServer(app).listen(app.get('port'), function(){
        console.log('Express server listening on port ' + app.get('port'));
    });
}

