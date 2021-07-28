const { Message } = require("discord.js")

module.exports = function(msg, args) {
	msg.channel.send("Pong!")
};