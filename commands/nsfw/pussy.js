const Discord = require('discord.js');
const axios = require('axios');

module.exports = {
    name: 'pussy',
    description: 'Sends an image of a pussy.',
    usage: 'pussy',
    aliases: ['kitten', 'cat'],
    permissions: [],
    botPermissions: ['SEND_MESSAGES'],
    nsfw: true,
    cooldown: 1000,
    ownerOnly: false
}

module.exports.execute = async(bot, msg, args, data) => {
    axios.get('https://api.thecatapi.com/v1/images/search').then(response => {
        let embed = new Discord.MessageEmbed()
            .setTitle('Here\'s your random pussy')
            .setImage(response.data[0].url)
            .setColor(bot.config.color);

        return msg.channel.send(embed);
    });
}
