const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');


var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`Bot ${client.user.tag} adı ile giriş yaptı.`);
});

client.on('message', msg => {
if(msg.author.id === ayarlar.id) return;
if(msg.author.bot) return;

if (!msg.content.startsWith(prefix)) {
return}
  if (msg.content === prefix + 'ping') {
    msg.reply( client.ping + 'ms');
  }
  if (msg.content === prefix + 'selam') {
    msg.reply('Selaaam :miafHey:');
  }
  if (msg.content === prefix + 'okul') {
    msg.reply('Gözde İzmir Ekonomi Üniversitesinde okuyor');
  }
  if (msg.content === prefix + 'sevgili') {
    msg.reply('Sevgilisi yok ```Ama sen de olamayacaksın. Nihaha!```');
  }
  if (msg.content === prefix + 'instagram') {
    msg.reply('https://www.instagram.com/gozde.demiral/');
  }
  if (msg.content === prefix + 'twitter') {
    msg.reply('https://twitter.com/gdemiral');
  }
  if (msg.content === prefix + 'twitch') {
    msg.reply('https://www.twitch.tv/miafitz');
  }
});

client.login(process.env.BOT_TOKEN);
