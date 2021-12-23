const Dord   = require('./index');
const client = new Dord.Client();

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