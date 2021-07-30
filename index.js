require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client()


const token = process.env.DISCORD_TOKEN
client.login(token)

client.on("ready", readyDiscord) 

function readyDiscord() {
	console.log("Bot Activated")
}

const commandHandler = require('./commands')

client.on('message', commandHandler)

