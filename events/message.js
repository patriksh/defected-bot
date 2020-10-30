const Discord = require('discord.js');
const embeds = require('../helpers/embeds.js');
const cooldown = {};

module.exports = async(bot, msg) => {
    try {
        if(msg.author.bot || !msg.guild) return;

        let guildDB = await bot.data.getGuildDB(msg.guild.id)
        let prefix = !guildDB.prefix ? bot.config.prefix : guildDB.prefix;

        if(!msg.content.toLowerCase().startsWith(prefix.toLowerCase())) {
            if(msg.content.trim() == '<@!' + bot.user.id + '>' || msg.content.trim() == '<@' + bot.user.id + '>')
                return embeds.mention(msg, prefix, bot);

            return;
        }

        let args = msg.content.slice(prefix.length).trim().split(/ +/g);
        let command = args.shift().toLowerCase();
        let cmdFile = bot.commands.get(command) || bot.commands.find(cmdFile => cmdFile.aliases && cmdFile.aliases.includes(command));

        if(!cmdFile) return;

        let userDB = await bot.data.getUserDB(msg.author.id);
        let data = {};
        data.user = userDB;
        data.guild = guildDB;
        data.cmdFile = cmdFile;

        if(!msg.channel.nsfw && cmdFile.nsfw)
            return embeds.nsfw(msg);

        let isOwner = bot.config.owners.includes(msg.author.id);
        if(cmdFile.ownerOnly && !isOwner) return;
        if((cmdFile.permissions && !msg.member.permissions.has(cmdFile.permissions)) && !isOwner)
            return embeds.permissions(msg, cmdFile);

        if(cmdFile.botPermissions && !msg.guild.me.permissions.has(cmdFile.botPermissions))
            return embeds.botPermissions(msg, cmdFile);

        if(cmdFile.cooldown) {
            if(!cooldown[msg.author.id])
                cooldown[msg.author.id] = {};

            let time = cooldown[msg.author.id][cmdFile.name] || 0;
            if(time && (time > Date.now())) {
                let wait = Math.ceil((time - Date.now()) / 1000);
                return embeds.cooldown(msg, wait);
            }
            cooldown[msg.author.id][cmdFile.name] = Date.now() + cmdFile.cooldown;
        }

        cmdFile.execute(bot, msg, args, data);
    } catch(err) {
        bot.logger.error('Command execution error - ' + err);
    }
}
