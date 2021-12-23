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

client.login('NzYwMTg2ODk0NDc3ODE5OTE0.X3IZNw.LISS16rmOw-hlmNc_Do32Ukfnmk');