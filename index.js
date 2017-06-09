module.exports = Tink;

const fs = require('fs');

const config = {
	logfile: false,
	showtime: 'YYYY-MM-DD hh:mm:ss.ms',
	showline: true,
	bright: false
};
const styles = {
	note: '\x1b[37m',
	success: '\x1b[32m',
	warning: '\x1b[33m',
	error: '\x1b[31m',
	info: '\x1b[36m'
};

function Tink(options){
	
	for(var option in options){
		
		if(typeof config[option] != 'undefined')
			config[option] = options[option];
		
	}
	
}

Tink.prototype.note = function(message, addons){ println(message, 'note', addons); };
Tink.prototype.success = function(message, addons){ println(message, 'success', addons); };
Tink.prototype.warn = function(message, addons){ println(message, 'warning', addons); };
Tink.prototype.error = function(message, addons){ println(message, 'error', addons); };
Tink.prototype.info = function(message, addons){ println(message, 'info', addons); };

function println(message, style, addons){
	
	style = (typeof style == 'string' && typeof styles[style] == 'string')?style:'none';
	addons = (typeof addons == 'object')?addons:[];
	
	var msg = '';
	var time = (config.showtime)?'['+currentTime(config.showtime)+']':'';
	
	msg = time;
	for(var addon in addons)
		msg += '['+addons[addon]+']';
	msg += ' '+message+'\n';
	
	if(config.logfile){
		fs.appendFile(currentTime(config.logfile), '['+style+']'+msg, {});
	}
	
	msg = styles[style]+msg;
	
	if(config.bright){
		msg = '\x1b[1m'+msg;
	}
	
	msg += '\x1b[0m';
	process.stdout.write(msg);
	
	first = false;
	
}

function currentTime(message){
	
	var date = new Date();
	
	date = {
		
		YYYY: date.getFullYear(),
		YY: String(date.getFullYear()).slice(-2),
		MM: ('0'+(date.getMonth()+1)).slice(-2),
		DD: ('0'+date.getDate()).slice(-2),
		
		hh: ('0'+date.getHours()).slice(-2),
		mm: ('0'+date.getMinutes()).slice(-2),
		ss: ('0'+date.getSeconds()).slice(-2),
		ms: ('00'+date.getMilliseconds()).slice(-3)
		
	};
	
	if(typeof message == 'string'){
		
		for(var f in date){
			
			message = message.replace(new RegExp(f, 'g'), date[f]);
			
		}
		
		return message;
		
	}else{
		
		return date;
		
	}
	
}