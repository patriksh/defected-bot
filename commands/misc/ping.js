const Discord = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Displays the bot latency.',
    usage: 'ping',
    aliases: ['latency'],
    permissions: [],
    botPermissions: ['SEND_MESSAGES'],
    nsfw: false,
    cooldown: 2000,
    ownerOnly: false
}

module.exports.execute = async(bot, msg, args, data) => {
    let embed = new Discord.MessageEmbed()
        .setAuthor(bot.user.username + ' ping', bot.user.displayAvatarURL())
        .setDescription('**' + bot.ws.ping + '** ms')
        .setColor(bot.config.color);

    return msg.channel.send(embed);
}
