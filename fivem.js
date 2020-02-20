const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    message.delete();
	let search = args.join(" ")
	.replace(/ /g,"%20");
	
    let forumsSearch = new Discord.RichEmbed()
	.setAuthor(`Search Result(s) on the FiveM Forums for ${message.content.slice(7)}`)
	.setDescription(`Here is your search results for **${message.content.slice(7)}** on the FiveM Forums.`)
	.setColor('#0D8CED')
	.setThumbnail('https://i.imgur.com/oHouJ74.jpg')
	.addField(`Search Results`, `https://forum.fivem.net/search?q=${search}`)
	
		message.channel.send(forumsSearch).then(msg => msg.delete(50000));
		
}

module.exports.help = {
    name: "fivem"
}