//this is the bots main file.
//to run this file we simply type node bot.js. (more about this will be included in the readme.
var config = require('./config'); //includes the config file.
var irc = require("irc");
var bot = new irc.Client(config.server, config.botName, config.port, {
        channels: config.channels
});




