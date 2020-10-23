const Discord = require('discord.js');

module.exports = {
    name: 'say',
    description: 'Repeats the defined message.',
    usage: 'say <message>',
    aliases: ['repeat'],
    permissions: [],
    botPermissions: ['SEND_MESSAGES'],
    nsfw: false,
    cooldown: 0,
    ownerOnly: true
}

module.exports.execute = async(bot, msg, args, data) => {
    return msg.channel.send(args.join(' '));
}
