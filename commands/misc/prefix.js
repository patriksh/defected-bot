const Discord = require('discord.js');

module.exports = {
    name: 'prefix',
    description: 'Choose a prefix for the bot.',
    usage: 'prefix <string>',
    aliases: [],
    permissions: ['ADMINISTRATOR'],
    botPermissions: ['SEND_MESSAGES'],
    nsfw: false,
    cooldown: 1000,
    ownerOnly: false
}

module.exports.execute = async(bot, msg, args, data) => {
    let prefix = !data.guild.prefix ? bot.config.prefix : data.guild.prefix;

    let newPrefix = args.join(' ');
    if(!newPrefix.length)
        return msg.channel.send('My prefix for this guild is `' + prefix + '`');

    if(prefix.length > 5)
        return msg.channel.send('Prefix shouldn\'t be longer than 5 characters.');

    data.guild.prefix = newPrefix;
    await data.guild.save();

    return msg.channel.send('Prefix changed to `' + newPrefix + '`.');
}
