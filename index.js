const Token = "";
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

client.on('ready', () => {
    console.log('Started');
    client.user.setPresence({activity: {name: ';speak',}});
});

client.on('message', msg => {
    if ((msg.content === ";speak")  && (msg.author.id !== client.id)) {
      fs.readFile(`./information.json`, 'utf8', function (err,data) {
        if (err) console.log(err);
        data = JSON.parse(data);
        let rand = Math.floor(Math.random() * data.length);
        msg.channel.send(data[rand][0].replace((/<@.?[0-9]*?>/g, "")).replace("undefined", ""));
      })
    }
})

client.login(Token);
