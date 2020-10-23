# defected-bot
Defected Bot is a Discord.js v12 bot template which features a command &amp; event handler, command cooldown, changeable prefix with MongoDB &amp; more.

## Setup
1. Edit config.json by putting in your information (bot token, MongoDB URI).
2. `npm install`
3. `npm start app.js`

## Commands

- `say` - Repeats the defined message.
- `botstats` - Displays the bot stats.
- `ping` - Displays the bot latency.
- `prefix` - Changes bot's prefix.
- `pussy` - Sends an image of a cat.

## Command arguments

(module.exports)

- `name` - Command name.
- `description` - Command description for help.
- `usage` - How to use the command (needed args).
- `aliases` - Command aliases, more 'strings' that will trigger this same command.
- `permissions` - Permissions user needs to have to execute the command, e.g. 'MANAGE_CHANNELS'.
- `botPermissions` - Permissions bot needs to have to execute the command, e.g. 'EMBED_LINKS'.
- `nsfw` - If set to true, command will work only in NSFW channels.
- `cooldown` - Command cooldown in milliseconds, '0' to disable.
- `ownerOnly` - If set to true, command will work only for owners, whose IDs are listed in config.json.

#### Inspired by

https://github.com/KSJaay/Alita
