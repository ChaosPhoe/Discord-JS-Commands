const Discord = require('discord.js');
const weather = require('weather-js');
const botconfig = require("../../botconfig.json");

module.exports.run = async (bot, message, args) => {
	message.delete()
    let msg = message.content.toUpperCase(); 
    let sender = message.author; 
         weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) { 
				
					if (result === undefined || result.length === 0) {
		   		    return message.channel.send('Please specify a valid location or zip code').then(msg => msg.delete(10000));
					message.delete()
					
						  }
						  
				        var current = result[0].current;
						var location = result[0].location
         
            const weatherEmbed = new Discord.RichEmbed() 
                .setAuthor(`Current Weather Information for ${current.observationpoint}`)			
                .setColor(botconfig["bot_setup"].main_embed_color)
                .addField('Timezone',`UTC${location.timezone}`, true) 
                .addField('Weather Measurement','Fahrenheit', true)
				.addField('Weather Type',`${current.skytext}`, true)
                .addField('Temperature',`${current.temperature}°${location.degreetype}`, true)
                .addField('Feels Like', `${current.feelslike}°${location.degreetype}`, true)
                .addField('Humidity', `${current.humidity}%`, true)
                message.channel.send(weatherEmbed).then(msg => msg.delete(10000));
  }
 )		
}

module.exports.help = {
    name: "weather",
}