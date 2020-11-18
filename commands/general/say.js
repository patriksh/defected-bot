const Discord = require('discord.js');

module.exports = {
    name: 'say',
    description: 'Repeats the defined message.',
    usage: 'say <message>',
    aliases: ['repeat'],
    permissions: [],
    botPermissions: [],
    nsfw: false,
    cooldown: 0,
    ownerOnly: true
}

module.exports.execute = async(bot, msg, args, data) => {
    let text = args.join(' ');
    if(text == '')
        text = 'imagine sending an empty message';

    return msg.channel.send(text);
}
