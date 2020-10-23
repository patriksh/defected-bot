const Discord = require('discord.js');
const usersDB = require('./Schematics/User.js');
const guildsDB = require('./Schematics/Guild.js');
const membersDB = require('./Schematics/Member.js');

module.exports.getUserDB = async function(userID) {
    let userDB = await usersDB.findOne({ id: userID });
    if(userDB) {
        return userDB;
    } else {
        userDB = new usersDB({ id: userID });
        await userDB.save().catch(err => bot.logger.error('MongoDB user DB error - ' + err));
        return userDB;
    }
}

module.exports.getGuildDB = async function (guildID) {
    let guildDB = await guildsDB.findOne({ id: guildID });
    if(guildDB) {
        return guildDB;
    } else {
        guildDB = new guildsDB({ id: guildID });
        await guildDB.save().catch(err => bot.logger.error('MongoDB guild DB error - ' + err));
        return guildDB;
    }
}

module.exports.getMemberDB = async function (userID, guildID) {
    let memberDB = await membersDB.findOne({ id: userID, guildID: guildID });
    if(memberDB) {
        return memberDB;
    } else {
        memberDB = new membersDB({ id: userID, guildID: guildID });
        await memberDB.save().catch(err => bot.logger.error('MongoDB member DB error - ' + err));
        return memberDB;
    }
}
