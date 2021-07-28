//const { Message } = require("discord.js")


const replies = ["soemthing", "jkl;j", "3jkl;jj"]


module.exports = function(msg, args) {
	let index = Math.floor(Math.random() * replies.length)
	msg.channel.send(replies[index])
};