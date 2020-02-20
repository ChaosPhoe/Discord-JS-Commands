const Discord = require("discord.js")
const botconfig = require("../../botconfig.json");

module.exports.run = async (bot, message, args) => {
message.delete();
let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
let dreason = args.join(" ").slice(22);
if(!dreason) return message.channel.send("Please provide a reason.").then(msg => msg.delete(10000));
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Invalid permissions.").then(msg => msg.delete(10000));
    let sayEmbed = new Discord.RichEmbed()
	    .setTitle(`${message.guild.name} Applications Department`)
		.setAuthor(`Application Status Updated By ${message.author.username}`, message.author.avatarURL)
        .setColor(botconfig["bot_setup"].main_embed_color)
		.setThumbnail(' ') // Your server logo goes here.
		.setDescription(`Hello ${user}! \nFirst off, I would like to thank you for your interest in our server. Next, I regret to inform you that your staff application on **${message.guild.name}** has been **denied**.`)
		.addField('Denial Reason', `${dreason}`)
		.addField('Your application was denied by', `**${message.author.username}**`)
		.addField('Also,', `The ${message.guild.name} Applications Department thanks you for all of the effort you put into your application.`)
        .setTimestamp()
        .setFooter(`${message.guild.name}`, message.guild.iconURL);
		
        try{
            await user.send(sayEmbed);
            return
        }catch(e){
            // console.log(e.stack);
            console.log('\x1b[33m%s\x1b[0m', "Say Embed Error Occurred. Crash Prevented.");
            return
        }
}

module.exports.help = {
    name: "deny"
}