const { Message } = require("discord.js")

module.exports = function(msg, args) {
	msg.channel.send("Pong!")
	msg.channel.send(msg.guild.members)
};