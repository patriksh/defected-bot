const Discord = require('discord.js');
const util = require('util');
const fs = require('fs');
const readdir = util.promisify(fs.readdir);

module.exports = {
    name: 'help',
    description: 'Lists bot commands.',
    usage: 'help',
    aliases: ['commands', 'cmds'],
    permissions: [],
    botPermissions: [],
    nsfw: false,
    cooldown: 0,
    ownerOnly: false
}

module.exports.execute = async(bot, msg, args, data) => {
    let prefix = !data.guild.prefix ? bot.config.prefix : data.guild.prefix;
    let embed = new Discord.MessageEmbed()
        .setAuthor('Command list')
        .setFooter(bot.config.credits)
        .setColor(bot.config.color);

    // Personally I would hardcode the help command, it gives much more flexibility than any of the automated options.

    let categories = await readdir('./commands/');
    categories.forEach(c => {
        let commands = fs.readdirSync('./commands/' + c + '/').filter(file => file.endsWith('.js'))
        if(commands.length > 0) {
            let files = commands.map(cmd => '`' + cmd.replace('.js', '') + '`').join(', ');
            embed.addField(c.toUpperCase(), files);
        }
    });

    return msg.channel.send(embed);
}
