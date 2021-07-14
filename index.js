const Discord = require('discord.js');
const client = new Discord.Client();
let embed = new Discord.MessageEmbed();
const fs = require('fs');

client.on('ready', () => {
    console.log('Started');
    client.user.setPresence({activity: {name: ';speak',}});
});

client.on('message', msg => {
    if ((msg.content === ";speak")  && (msg.author.id !== "775229682743902260")) {
      fs.readFile(`./information.json`, 'utf8', function (err,data) {
        data = JSON.parse(data);
        let rand = Math.floor(Math.random() * data.length)
        embed
          .setColor('#0099ff')
          .setTitle(`Random message | not generated`)
          .setDescription(data[rand])
          .setFooter(`Message ${rand}/${data.length}`)
        msg.channel.send(embed)
      })
    }
})

client.login('token');
