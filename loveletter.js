const Discord = require("discord.js")
const botconfig = require("../../botconfig.json");

module.exports.run = async (bot, message, args) => {
message.delete();
let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
let loveMsg = args.join(" ").slice(22);
if(!loveMsg) return message.channel.send("Please provide a message.").then(msg => msg.delete(10000));
	
	let loveEmbed = new Discord.RichEmbed()
	.setTitle('💌 You\'ve Recieved a Love Letter 💌')
	.setColor('#E75A70')
	.setThumbnail('https://cdn.discordapp.com/attachments/544697145664602132/673778637018759168/love-letter.png')
	.setDescription(`You've recieved a love letter from <@${message.author.id}> saying: ${loveMsg}  \n\n You can send them one back by doing \.loveletter <@${message.author.id}> with your own message ;)`)
	.setTimestamp()
	.setFooter(`${botconfig["bot_setup"].copyright}`);
	
	user.send(loveEmbed);
}

module.exports.help = {
    name: "loveletter"
}