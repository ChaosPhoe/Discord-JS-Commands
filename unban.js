const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
const botconfig = require("../../botconfig.json");

module.exports.run = async (bot, message, args) => {
    message.delete();
    let ubUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
		if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Invalid Permissions.").then(msg => msg.delete(10000));
		
		let bannedUser = await bot.fetchUser(args[0])
			if(!bannedUser) return message.channel.send("Please provide a name.")	
				let reason = args.slice(1).join(" ")
			if(!reason) reason = "No reason given"
			
		message.guild.unban(bannedUser, {reason: reason})
			message.channel.send(`:white_check_mark: ${bannedUser} has been successfully unbanned from the Elevated Modifications Discord by <@${message.author.id}> for the following reason(s): **${reason}**`)
        
		let unbanEmbed = new Discord.RichEmbed()
            .setTitle("Elevated Modifications | User Unbanned")
            .setColor("#67E365")
            .addField("Unbanned User", `${bannedUser} - ID: ${bannedUser.id}`)
            .addField("Unbanned By", `<@${message.author.id}> - ID: ${message.author.id}`)
            .addField("Unbanned In", message.channel)
            .addField("Time", message.createdAt)
            .addField("Reason", `${reason}`)
			.setTimestamp()
			.setFooter(`${botconfig["bot_setup"].copyright}`);
			
            let unbanChannel = message.guild.channels.find(channel => channel.id === botconfig["channel_setup"].ban_logs_channel);
			if(!unbanChannel) return console.log("Channel not found (Config: 'ban_logs_channel')");
			unbanChannel.send(unbanEmbed)
}

module.exports.help = {
    name: "unban"
}