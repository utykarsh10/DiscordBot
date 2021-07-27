const Discord = require('discord.js')
require('dotenv').config()
const client = new Discord.Client()
fjals;fj

const token = process.env.DISCORD_TOKEN;

client.login(token)
client.on('ready', ReadyDiscord)

function ReadyDiscord() {
	console.log();
}

