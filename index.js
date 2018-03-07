const Discord = require('discord.js');
const bot = Discord.Client();

const PREFIX = "!";

bot.on('ready', function() {
    console.log("I'm Ready !");
});

bot.on('message', message => {
    if(message.content[0] === PREFIX){
        if(message.content === '!Hello'){
            message.reply('World !');
        }
    }
})
;
bot.login('NDE4MTQ1NzYzNjg0NTE1ODQw.DYGnBg.4wapprKTDPFLc-jvI2okFrXFdKo')

