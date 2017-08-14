var moment = require('moment');
moment().format();
const chalk = require('chalk');
const log = console.log;

var date = moment().format("dddd, MMMM-Do-YYYY, HH:mm:ss a");
// var time = moment("DD-MMMM-Do-YYYY", "HH:mm:ss-a");
var day = moment().format("DDDo");
var seconds = (moment().hour()*3600)+(moment().minute()*60)+(moment().second());
var dst = moment().isDST();
var is = "";
if(dst){is="is"}
else{is="is not"}
var leapYear = moment().isLeapYear();
var lY = "";
if(leapYear){lY="is"}
else{lY="is not"}

log("It is "+chalk.blue(date)+".");
log("It is the "+chalk.magenta(day)+" day of the year.");
log("It is "+chalk.green(seconds)+" seconds into the day.");
log("It "+chalk.greenBright(is)+" during DayLight Savings Time.");
log("It "+chalk.red(lY)+" a leap year.");
