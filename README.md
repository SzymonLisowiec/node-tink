# tink
Lightweight helper to logging errors your project in node.js

# Constructor
```javascript
const Tink = require('tink');
var tink = new Tink(options);
```
- __options__ - object of configuration
  - __bright__ - Colors brightening, `true` or `false`
  - __showtime__ - Showing time of write line. Time format (below) or `false`
  - __logfile__ - Saving logs to file. Path or `false`

# Using
```javascript
tink.success('Success!');  //green
tink.warn('Warning!');     //yellow
tink.warn('Error!');       //red
tink.note('Note.');        //white
tink.info('Information.'); //cyan
/*
Example line in console:
[2017-06-09 18:00:00] Success!
Example line in log file:
[success][2017-06-09 18:00:00] Success!
*/

var addons = ['ID#100', 'Mode: 1'];
tink.info('Hello World!', addons); //Show: [2017-06-09 18:00:00][ID#100][Mode: 1] Hello World!
```

# Time formats
- __YYYY__ - Full year, e.g. 2017
- __YY__ - Year in two digits, e.g. 17
- __MM__ - Month, e.g. 07
- __DD__ - Full year, e.g. 20
- __hh__ - Hours, e.g. 17
- __mm__ - Minutes, e.g. 57
- __ss__ - Seconds, e.g. 32
- __ms__ - Milliseconds, e.g. 627
```javascript
var tink = new Tink({
  showtime: 'hh:mm:ss.ms DD-MM-YYYY',
  logfile: 'YYYY-MM-DD hh_mm.log'
});
```
