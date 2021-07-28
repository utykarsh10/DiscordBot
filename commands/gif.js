const tenor_token = process.env.TENOR_TOKEN	
const fetch = require('node-fetch')

module.exports = async function(msg, args) {
	let search_term = "coding train"

	if(args.length > 0) {
		search_term = args.join(" ")
	}

	//use contentFilter = high to filter out NSFW gif results
	let url = `https://g.tenor.com/v1/search?q=${search_term}&key=${tenor_token}`

	let response = await fetch(url)
	let json = await response.json()
	//console.log(url)

	let index = Math.floor(Math.random() * json.results.length)

	msg.channel.send(json.results[index].url)
};