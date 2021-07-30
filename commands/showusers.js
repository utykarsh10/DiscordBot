const { Message, Channel } = require("discord.js")


module.exports = async function(msg, args) {

	//get cache from guild object
	let cachedarr = msg.guild.members.cache

	//get user ids from map
	let arr = cachedarr.map(m=>m.user.id)

	//fetch user info from promise
	let promisearr = await msg.guild.members.fetch({ arr, withPresences: true })
	
	//map the usernames taken from the ids
	let testarr = promisearr.map(n=>n.user.username)
	msg.channel.send("Users in server:" )
	msg.channel.send(`${testarr}`)	

};