module.exports = function(msg, args) {
	msg.channel.send(`Member Name: ${msg.author.username}`)
	msg.channel.send(`Member ID: ${msg.author.id}`)
};