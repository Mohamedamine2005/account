const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "-"
client.on('ready',async () => {
  client.channels.find(ch => ch.id === "551419457336115213" && ch.type === 'voice').join();
})
;
client.login(process.env.BOT_TOKEN);
