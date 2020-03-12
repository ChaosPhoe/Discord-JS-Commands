const Discord = require('discord.js');
const botconfig = require("../../botconfig.json");

module.exports.run = async (bot, message, args) => {
    message.delete();
    
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Invalid permissions.").then(msg => msg.delete(10000));
    let memberrole = message.guild.roles.find(role => role.name === "» Member");
    let reason = args.join(" ")
    if(!reason) return message.channel.send('Please provide a reason for locking this channel.').then(msg => msg.delete(5000));
    
    
    let lockEmbed = new Discord.RichEmbed()
    .setAuthor(`Channel Status Updated by ${message.author.username}`, message.author.avatarURL)
    .setColor('#ff0000')
    .setDescription(`🔒 This channel has been locked by ${message.author.username} for ${reason}`)
    .setTimestamp()
    .setFooter(`${botconfig["bot_setup"].copyright}`)
    
    message.channel.send(lockEmbed)
    
        message.channel.overwritePermissions(memberrole, {
        SEND_MESSAGES: false
 }); 
}

module.exports.help = {
    name: "lock"
}