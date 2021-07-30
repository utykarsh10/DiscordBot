
//import {fetch} from 'node-fetch'
//const { Message } = require("discord.js")

const response = require('./commands/response.js')
const gif = require('./commands/gif.js')
const ping = require('./commands/ping.js')
const user = require('./commands/user')
const showusers = require('./commands/showusers')

const commands = {response,gif, ping, user, showusers};

module.exports = async function(msg) {
	let tokens = msg.content.split(' ')
	let command = tokens.shift()



	if(command.charAt(0) == '!') {
		command = command.substring(1)
		commands[command](msg, tokens) //pass in command, and tokens
	}

};

