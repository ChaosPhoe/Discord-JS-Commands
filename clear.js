const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	message.delete();
	
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Invalid permissions.").then(msg => msg.delete(10000));
    if(!args[0]) return message.channel.send("Please provide the amount of messages to bulk delete.").then(msg => msg.delete(5000));
	if(args[0] > 100) return message.channel.send("Please provide an amount of messages lower then 100 to delete.").then(msg => msg.delete(5000));
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`${args[0]} messages have been Bulk Deleted in <#${message.channel.id}>.`).then(msg => msg.delete(10000));
    });
}

module.exports.help = {
    name: "clear"
}
