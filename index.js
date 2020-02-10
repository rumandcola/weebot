const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'Njc1MzcxMjA0MzIzODM1OTQ3.XkF0-g.WzIJfYADRkCLW9UWqR79CEauS_Y';

bot.on('ready', () => {
    console.log('Weebot is online and ready desu!');
})

bot.on('message', message =>
{
    if (message.channel.id === '675186870740713472')
    {
        if (message.content === '!agree')
        {
            if (message.guild.members.get(message.author.id).roles.exists('name', '8-Bit Warrior') ||
                message.guild.members.get(message.author.id).roles.exists('name', '8-Bit Hero') ||
                message.guild.members.get(message.author.id).roles.exists('name', '8-Bit Master') ||
                message.guild.members.get(message.author.id).roles.exists('name', '8-Bit Legend'))
            {
                message.author.send('Sorry, you already have a membership to this server');
                message.delete();
            }
            else
            {
                message.author.send('Thanks for agreeing to the rules and welcome to the server!');
                var role = message.guild.roles.find(role => role.name === '8-Bit Warrior');
                message.member.addRole(role);
                message.delete();
            }
        }
    }
})

bot.login(token);