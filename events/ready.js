module.exports = async(bot) => {
    try {
        bot.user.setPresence({ activity: { name: 'tag me for info.', type: 'PLAYING' }, status: 'online' });
        bot.logger.ready(bot.user.tag + ' initialized.');
    } catch (err) {
        bot.logger.error('Ready event error - ' + err);
    }
};
