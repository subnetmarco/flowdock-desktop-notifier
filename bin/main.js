var exec = require('child_process').exec;
var Session = require('flowdock').Session;

var argv = require('optimist')
    .usage('Usage: $0 -u [username] -p [password] -c [company] -f [flow]')
    .demand(['u', 'p', 'c', 'f'])
	.string('u')
	.string('p')
	.string('c')
	.string('f')
	.alias('u', 'username')
  	.alias('p', 'password')
	.alias('c', 'company')
	.alias('f', 'flow')
    .argv;

var session = new Session(argv.username, argv.password);
var stream = session.stream(argv.company + "/" + argv.flow);
stream.on('clientError', function(error) {
	console.error("An error occurred: " + error);
	process.exit(1);
});
stream.on('connected', function() {
	console.info("Connected");
});
stream.on('message', function(message) {
	if (message.app == "chat") {
		exec('terminal-notifier -message "' + message.content + '" -title "Flowdock Chat" -open https://' + argv.company + '.flowdock.com/flows/' + argv.flow);
	}
});