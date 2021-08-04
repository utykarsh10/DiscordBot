
//import {fetch} from 'node-fetch'
//const { Message } = require("discord.js")

const response = require('./commands/response.js')
const gif = require('./commands/gif.js')
const ping = require('./commands/ping.js')
const user = require('./commands/user')
const showusers = require('./commands/showusers')

const commands = {response, gif, ping, user, showusers};

// let commandlist = () => {
// 	return commands;
// }


module.exports = async function(msg) {
	let tokens = msg.content.split(' ')
	let command = tokens.shift()



	if(command.charAt(0) == '!') {
		command = command.substring(1)
		if(command == 'help') {
			msg.channel.send(
				"Here are the commands you can use:\n" +
				Object.keys(commands))
		}
		else {
			commands[command](msg, tokens) //pass in command, and tokens
		}
	}

};

