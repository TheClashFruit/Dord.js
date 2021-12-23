

class Client {
  constructor(intents) {
    this.intents = intents;

    this.onMessage = () => {};
    this.onReady = () => {};
  }

  /**
   * Logs the client in, establishing a WebSocket connection to Discord.
   * @param {string} [token=this.token] Token of the account to log in with
   * @example
   * client.login('my token');
   */
  login(token) {
    if (!token || typeof token !== 'string') throw new Error('TOKEN_INVALID');

    const WebSocket = require('websocket').client;

    const wss = new WebSocket();

    wss.on('connect', (connection) => {
      console.log('WebSocket Client Connected');

      connection.sendUTF(JSON.stringify({
        'op': 2,
        'd': {
          'token': token,
          'intents': 513,
          'properties': {
            '$os': 'linux',
            '$browser': 'dort.js',
            '$device': 'dort.js'
          }
        }
      }));

      connection.on('message', function (data, flags) {
        console.log(JSON.parse(data.utf8Data));

        const jsonData = JSON.parse(data.utf8Data);

        if(jsonData.t == 'MESSAGE_CREATE') {
          this.onMessage(jsonData.d);
        }
      });
    });

    wss.connect('wss://gateway.discord.gg/?v=9&encoding=json');
  }

  on(state, callback) {
    if (state == 'ready') {
      this.onReady = callback;
    } else if (state == 'message') {
      this.onMessage = callback;
    }
  }
}

module.exports = Client;