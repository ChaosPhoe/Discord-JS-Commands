const Discord = require("discord.js")
const botconfig = require("../../botconfig.json");

module.exports.run = async (bot, message, args) => {
    message.delete();
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Invalid permissions.").then(msg => msg.delete(10000));
    let slowspeed = args.join(" ")
    if (!slowspeed) return message.channel.send('Please select an amount of seconds. If you would like to disable slow please type `.slow 0`').then(msg => msg.delete(10000));
    
	let slowEmbed = new Discord.RichEmbed()
			if(slowspeed == 1) {
		slowEmbed.setDescription(`🐌 Slow Mode has been applied to this channel by ${message.author.username} for 1 second`)
	}
	if(slowspeed < 1) {
		slowEmbed.setDescription(`🐌 Slow Mode has been removed from this channel by ${message.author.username}`)
	}
	if(slowspeed > 1) {
	slowEmbed.setDescription(`🐌 Slow Mode has been applied to this channel by ${message.author.username} for ${slowspeed} seconds`)
	}
	slowEmbed.setAuthor(`Channel Status Updated by ${message.author.username}`, message.author.avatarURL)
	.setColor('#ff7632')
    .setTimestamp()
    .setFooter(`${botconfig["bot_setup"].copyright}`)
	message.channel.send(slowEmbed)
    // message.channel.send(`Slow Mode is now enabled in <#${message.channel.id}> for ${slowspeed} seconds.`)
    message.channel.setRateLimitPerUser(`${slowspeed}`, "Slowspeed set by Bot")
}

module.exports.help = {
    name: "slow"
}