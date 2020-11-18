const Discord = require('discord.js');

module.exports = {
    name: 'prefix',
    description: 'Choose a prefix for the bot.',
    usage: 'prefix <string>',
    aliases: [],
    permissions: ['ADMINISTRATOR'],
    botPermissions: [],
    nsfw: false,
    cooldown: 0,
    ownerOnly: false
}

module.exports.execute = async(bot, msg, args, data) => {
    let prefix = !data.guild.prefix ? bot.config.prefix : data.guild.prefix;

    let newPrefix = args.join(' ');
    if(!newPrefix.length) {
        let embed = new Discord.MessageEmbed()
            .setColor(bot.config.color)
            .setDescription('My prefix for this guild is `' + prefix + '`')
        return msg.channel.send(embed);
    }

    if(newPrefix.length > 30) {
        let embed = new Discord.MessageEmbed()
            .setColor(bot.config.color)
            .setDescription('Prefix shouldn\'t be longer than 30 characters. Yours has ' + newPrefix.length + '.')
        return msg.channel.send(embed);
    }

    data.guild.prefix = newPrefix;
    await data.guild.save();

    let embed = new Discord.MessageEmbed()
        .setColor(bot.config.color)
        .setDescription('Prefix changed to `' + newPrefix + '`. If you ever forget it just tag me.')
    return msg.channel.send(embed);
}
