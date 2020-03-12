const Discord = require('discord.js');
const botconfig = require("../../botconfig.json");

module.exports.run = async (bot, message, args) => {
    message.delete();
    
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Invalid permissions.").then(msg => msg.delete(10000));
    let memberrole = message.guild.roles.find(role => role.name === "» Member");    
    
    let lockEmbed = new Discord.RichEmbed()
    .setAuthor(`Channel Status Updated by ${message.author.username}`, message.author.avatarURL)
    .setColor('#00ff00')
    .setDescription(`🔓 This channel has been unlocked by ${message.author.username}`)
    .setTimestamp()
    .setFooter(`${botconfig["bot_setup"].copyright}`)
    
    message.channel.send(lockEmbed)
    
        message.channel.overwritePermissions(memberrole, {
        SEND_MESSAGES: true
 }); 
}

module.exports.help = {
    name: "unlock"
}