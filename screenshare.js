const Discord = require("discord.js")
const botconfig = require("../../botconfig.json");

module.exports.run = async (bot, message, args) => {
    message.delete();
    if(!message.member.hasPermission("SEND_MESSAGES")) return message.channel.send("Invalid permissions.").then(msg => msg.delete(10000));
	const voiceChannel = message.member.voiceChannel;
	    if (!voiceChannel) return message.channel.send("You must be in a voice channel in order to screenshare.").then(msg => msg.delete(5000));

	
	    let embed = new Discord.RichEmbed()
      .setColor(botconfig["bot_setup"].main_embed_color)
      .setTitle(`Screenshare Link for ${message.member.voiceChannel.name}`)
      .setDescription(`[Click Here for the Screenshare Link to ${message.member.voiceChannel.name}](https://discordapp.com/channels/${message.guild.id}/${message.member.voiceChannel.id})`)
	  .setTimestamp()
	  .setFooter(`${botconfig["bot_setup"].copyright}`)
    message.channel.send(embed);
}

module.exports.help = {
    name: "ss",
    name2: "screenshare",
}