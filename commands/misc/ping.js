const Discord = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Displays the bot latency.',
    usage: 'ping',
    aliases: ['latency'],
    permissions: [],
    botPermissions: [],
    nsfw: false,
    cooldown: 0,
    ownerOnly: false
}

module.exports.execute = async(bot, msg, args, data) => {
    let embed = new Discord.MessageEmbed()
        .setDescription('**' + bot.ws.ping + '** ms')
        .setColor(bot.config.color);

    return msg.channel.send(embed);
}
