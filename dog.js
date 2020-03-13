const Discord = require("discord.js");
const botconfig = require("../../botconfig.json");
const randomDog = require('random.dog.js');
const randomDogApi = randomDog.api();

module.exports.run = async (bot, message, args) => {
    message.delete();
    randomDogApi.getDog().then((dog) => message.channel.send(`<@${message.author.id}> here\'s a cute dog :)`, { files: [dog.url] }))
}

module.exports.help = {
    name: "dog",
    name2: "doggo"
}
