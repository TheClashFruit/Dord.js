const { Client, Intents } = require('./index');
const client = new Client([ Intents.FLAGS.GUILDS ]);

client.on('ready', () => {
  console.log('bot is ready');
});

client.on('message', (msg) => {
  console.log(msg);
});

client.on('interaction', (type, interaction) => {
  console.log('type: ' + type + ', interaction: ' + interaction);
});

client.login('token');