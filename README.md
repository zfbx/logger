# logger
> A simple node console logger with optional timestamps and color

---

## Highlights

- 100 lines of code
- Highly performant
- Uses Truecolor color if supported
- No dependencies
- Doesn't extend `String.prototype`


## Install

```console
$ npm install zfbx/logger
```

## Usage

```js
const logger = require('zfbx/logger');

var log = logger({
    mode: 'debug'
});
log.debug('A debug message');
log.info('An info message');
log.warn('A warning message');
log.error('An error message');
```

Clean and simple, easy to use with optional settings

```js
var log = logger({
    time: true, // Included timestamp in log? (default: true)
    date: true, // Include datestamps in log? (default: true)
    local: 'EU' // Change date format [US: mm-dd-yyyy, EU: yyyy-mm-dd] (default: 'EU')
    mode: 'DEBUG' // Log Mode ('DEBUG',('INFO',('WARN',('ERROR')))) (default: 'INFO')
});
```

## Windows

If you're on Windows, do yourself a favor and use [`cmder`](http://cmder.net/) instead of `cmd.exe`.


## License

MIT
