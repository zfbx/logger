"use strict";
var os = require('os');
var colorReset = "\x1b[0m", colorDebug = "\x1b[37m", colorInfo = "\x1b[36m", colorWarn = "\x1b[33m", colorError = "\x1b[31m";
if (process.platform === 'win32' && Number(os.release().split('.')[2]) >= 14931 && Number(process.versions.node.split('.')[0]) >= 8)
    colorDebug = "\x1b[38;2;164;249;166m", colorInfo = "\x1b[38;2;122;211;204m", colorWarn = "\x1b[38;2;255;176;91m", colorError = "\x1b[38;2;255;94;91m"; // \x1b[38;2;R;G;Bm RGB
/**
 * Options:
 *      `time`      [Boolean] Included timestamp in log? (default: true);
 *      `date`      [Boolean] Include datestamps in log? (default: true);
 *      `mode`      [String] Log Mode ('DEBUG',('INFO',('WARN',('ERROR')))) (default: 'INFO');
 *      `locale`    [String] Date format [US: mm-dd-yyyy, EU: yyyy-mm-dd] (default: 'EU')
 * @param {Object} options
 * @api public
 */
module.exports = function (options) {
    options = options || {};
    if (typeof options.time == 'undefined')
        options.time = true;
    if (typeof options.date == 'undefined')
        options.date = true;
    options.mode = options.mode || 'INFO';
    options.mode = options.mode.toUpperCase();
    options.locale = options.locale || 'EU';
    options.locale = options.locale.toUpperCase();
    /**
     * @param {String} message
     * @api public
     */
    function debug(message) {
        if (!(options.mode == 'DEBUG'))
            return;
        return log('DEBUG', message, options);
    }
    /**
     * @param {String} message
     * @api public
     */
    function info(message) {
        if (!(options.mode == 'DEBUG' || options.mode == 'INFO'))
            return;
            return log('INFO', message, options);
    }
    /**
     * @param {String} message
     * @api public
     */
    function warn(message) {
        if (!(options.mode == 'DEBUG' || options.mode == 'INFO' || options.mode == 'WARN'))
            return;
            return log('WARN', message, options);
    }
    /**
     * @param {String} message
     * @api public
     */
    function error(message) {
        if (!(options.mode == 'DEBUG' || options.mode == 'INFO' || options.mode == 'WARN' || options.mode == 'ERROR'))
            return;
        return log('ERROR', message, options);
    }
    return {debug, info, warn, error}
};

function log(type, message, options) {
    var msg = "";
    var date = new Date();
    if (type === 'DEBUG')
        msg += colorDebug;
    if (type === 'INFO')
        msg += colorInfo;
    if (type === 'WARN')
        msg += colorWarn;
    if (type === 'ERROR')
        msg += colorError;
    if (options.date)
        msg += formatDate(date, options.locale);
    if (options.time)
        msg += formatTime(date);
    msg += `[${type}] ${message}${colorReset}`;
    return console.log(msg);
}

function formatDate(date, locale) {
    var d = "-" //delimiter/seperator
    var year = date.getFullYear();
    var month = `0${date.getMonth() + 1}`.substr(-2);
    var day = `0${date.getDate()}`.substr(-2);
    if (locale === 'US')
        return `${month}${d}${day}${d}${year} `;
    if (locale === 'EU')
        return `${year}${d}${month}${d}${day} `;
}

function formatTime(date, locale) {
    var d = ":" //delimiter/seperator
    var hours = `0${date.getHours()}`.substr(-2);
    var minutes = `0${date.getMinutes()}`.substr(-2);
    var seconds = `0${date.getSeconds()}`.substr(-2);
    return `${hours}${d}${minutes}${d}${seconds} `;
}