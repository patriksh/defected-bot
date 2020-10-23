const Discord = require('discord.js');

module.exports = {
    name: 'botstats',
    description: 'Displays the bot stats.',
    usage: 'botstats',
    aliases: ['stats', 'info'],
    permissions: ['ADMINISTRATOR'],
    botPermissions: ['SEND_MESSAGES'],
    nsfw: false,
    cooldown: 0,
    ownerOnly: false
}

module.exports.execute = async(bot, msg, args, data) => {
    let embed = new Discord.MessageEmbed()
        .setAuthor(bot.user.username + ' stats', bot.user.displayAvatarURL())
        .setThumbnail(bot.user.displayAvatarURL())
        .setFooter(bot.config.credits)
        .setColor(bot.config.color)
        .addFields(
            { name: 'Guilds', value: bot.guilds.cache.size, inline: true},
            { name: 'Users', value: bot.users.cache.size, inline: true },
            { name: 'Latency', value: bot.ws.ping + 'ms', inline: true },
            { name: 'Library', value: 'Discord.js V' + Discord.version }
        );

    return msg.channel.send(embed);
};
