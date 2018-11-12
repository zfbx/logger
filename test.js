var logger = require("./logger");

console.log('[Defaults]');
var log = logger();
log.debug('A simple debug message');
log.info('A simple info message');
log.warn('A simple warning message');
log.error('A simple error message');


console.log('\n[No Time + US Locale]');
var log = logger({
    time: false,
    locale: 'US'
});
log.debug('A simple debug message');
log.info('A simple info message');
log.warn('A simple warning message');
log.error('A simple error message');


console.log('\n[Debug mode + No Date]');
var log = logger({
    date: false,
    mode: 'debug'
});
log.debug('A simple debug message');
log.info('A simple info message');
log.warn('A simple warning message');
log.error('A simple error message');


console.log('\n[Warn mode]');
var log = logger({
    mode: 'warn'
});
log.debug('A simple debug message');
log.info('A simple info message');
log.warn('A simple warning message');
log.error('A simple error message');


console.log('\n[Error mode]');
var log = logger({
    mode: 'error'
});
log.debug('A simple debug message');
log.info('A simple info message');
log.warn('A simple warning message');
log.error('A simple error message');