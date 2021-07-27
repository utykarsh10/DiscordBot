const Discord = require('discord.js')
require('dotenv').config()
const client = new Discord.Client()

const fetch = require('node-fetch')
const token = process.env.DISCORD_TOKEN
const tenor_token = process.env.TENOR_TOKEN

client.login(token)

client.on('message', gotMessage)

async function gotMessage(msg) {
	if(msg.content == 'garsh') {
		msg.reply("let me tell you the story of garsh")
	}

	if(msg.content == '!gif') {
		let url = 'https://g.tenor.com/v1/search?q=excited&key=${tenor_token}&limit=8'

		let response = await fetch(url)
		let json = await response.json()

		console.log(json)

		const index = Math.floor(Math.random() * json.results.length)

		msg.channel.send(json.results[index].url)
		

	}

}

