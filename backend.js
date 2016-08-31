module.exports = function (app, req, res, connection, routeparams, express, functions, basicAuth, callback) {

	functions.chGet(req, res, connection, routeparams, 'passwordprotect_pw', function(password) {

		var username = password;
		var password = password;

	    var user = basicAuth(req);

	    if (!user || user.name !== username || user.pass !== password) {
	      res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
	      return res.send(401);
	    }

	    var handler = function() {
	    	console.log('tset');
	    };

	    callback(handler);

	});

};