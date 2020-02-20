const Discord = require("discord.js")
const botconfig = require("../../botconfig.json");

module.exports.run = async (bot, message, args) => {
    message.delete();
	let user = message.mentions.users.first() || message.author;
	
	    let avatarembed = new Discord.RichEmbed()
      .setColor(botconfig["bot_setup"].main_embed_color)
      .setAuthor(`${user.username}'s Avatar`)
      .setImage(user.avatarURL)
    message.channel.send(avatarembed).then(msg => msg.delete(10000));
		
}

module.exports.help = {
    name: "avatar",
    name2: "pfp",
}