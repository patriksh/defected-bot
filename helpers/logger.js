const chalk = require('chalk');
const moment = require('moment');

exports.write = (content, type = 'log') => {
    let timestamp = '[' + moment().format('DD-MM-YY H:m:s') + ']:';
    let typeUpper = type.toUpperCase();
    let typeColor = chalk.blue(typeUpper);
    switch(type) {
        case 'load': typeColor = chalk.magenta(typeUpper); break;
        case 'event': typeColor = chalk.cyan(typeUpper); break;
        case 'cmd': typeColor = chalk.gray(typeUpper); break;
        case 'ready': typeColor = chalk.green(typeUpper); break;
        case 'warn': typeColor = chalk.yellow(typeUpper); break;
        case 'error': typeColor = chalk.red(typeUpper); break;
        case 'debug': typeColor = chalk.green(typeUpper); break;
        case 'log': typeColor = chalk.blue(typeUpper); break;
    }

    return console.log(timestamp + ' ' + typeColor + ' ' + content);
}

exports.load = (...args) => this.write(...args, 'load');
exports.event = (...args) => this.write(...args, 'event');
exports.cmd = (...args) => this.write(...args, 'cmd');
exports.ready = (...args) => this.write(...args, 'ready');
exports.error = (...args) => this.write(...args, 'error');
exports.warn = (...args) => this.write(...args, 'warn');
exports.debug = (...args) => this.write(...args, 'debug');
exports.log = (...args) => this.write(...args, 'log');
