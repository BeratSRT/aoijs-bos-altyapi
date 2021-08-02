const aoi = require('aoi.js');
const fs = require('fs');
const bot = new aoi.Bot({
	token: process.env.TOKEN,
        prefix: 'f!'
})
bot.onMessage();
var reader = fs.readdirSync('./komutlar/').filter(file => file.endsWith('.js'));
for (const file of reader) {
	const command = require(`./komutlar/${file}`);
	bot.command({
		name: command.name,
		aliases: command.aliases,
		code: command.code
});
}
