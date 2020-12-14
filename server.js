const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://prohelper-prime1.glitch.me/`); ///تعديل مهم حط بدل 333م البروجكت
}, 280000);

// كل البكجات الي ممكن تحتجها في اي بوت
const { Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const { TOKEN, YT_API_KEY, prefix, devs } = require("./config");
const client = new Client({ disableEveryone: true });
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss");
const fetchVideoInfo = require("youtube-info");
const botversion = require("./package.json").version;
const simpleytapi = require("simple-youtube-api");
const moment = require("moment");
const fs = require("fs");
const gif = require("gif-search");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat"); //npm i dateformat
const YouTube = require("simple-youtube-api"); 
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const hastebins = require("hastebin-gen");
const getYoutubeID = require("get-youtube-id");
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(TOKEN);
const queue = new Map();
var table = require("table").table;
const Discord = require("discord.js");

const Enmap = require("enmap");
const prefixs = new Enmap({ name: "prefix" });

client.on("message", async message => {
if (message.author.bot) return;
await prefixs.ensure(message.guild.id, {
  prefix: "$"
});
});

client.on("message", message => {
if (message.author.bot) return;
var prefix = set(message);
var command = message.content.split(' ');
if (command[0] == prefix + "set-prefix") {
if (!message.member.hasPermission("ADMINISTRATOR"))
return message.channel.send(new Discord.RichEmbed().setTitle("**You don't have Permissions** ❌"));
if (!command[1]) return message.react("✅");
var db = prefixs.get(message.guild.id);
var nep = command[1]
var dbp = prefixs.get(message.guild.id, "prefix");
prefixs.set(message.guild.id, {
  prefix: nep
});
let set = prefixs.get(message.guild.id, "prefix");
message.channel.send("Done set prefix to " + set.toLocaleString().replace(NaN, ""));
}});

function set(m) {
  let l = prefixs.get(m.guild.id, "prefix");
  return l;
}

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
console.log("==================================");
console.log("1");
console.log("2");
console.log("3");
console.log("=========> Bot Online <=========");
console.log("=======> Token Bot **** <=======");
console.log("3");
console.log("2");
console.log("1");
console.log("====================================");
console.log("Bot Online 24/7");



client.login(TOKEN);






////allbots

////ping
client.on('message', message =>{
            var prefix = set(message);
  if(message.content === prefix + 'ping'){
let start = Date.now(); message.channel.send('Ok').then(message => { 
message.edit(`\`\`\`js
Time taken: ${Date.now() - start} ms
Discord API: ${client.ping.toFixed(0)} ms\`\`\``);
  });
  }
});
////avatar
client.on("message", message => {
  let args = message.content.split(" ");
              var prefix = set(message);
 if (args[0].toLowerCase() === `${prefix}avatar`) {
  let member = message.mentions.users.first(); 
  if(args[0] && !args[1]) {
    const emb = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setColor("RANDOM")
    .setTitle("Link Avatar")
    .setURL(`${message.author.avatarURL}`)
    .setImage(`${message.author.avatarURL}`)
.setFooter("Posted by" + message.author.tag, message.author.avatarURL)
     message.channel.sendEmbed(emb);
  }
  if(member) {
      const embed = new Discord.RichEmbed()
      .setAuthor(member.tag, member.avatarURL)
      .setColor("RANDOM")
      .setTitle("Link Avatar")
      .setURL(`${member.avatarURL}`)
      .setImage(`${member.avatarURL}`)
      .setFooter("Posted by" + message.author.tag, message.author.avatarURL);
     message.channel.sendEmbed(embed);
     }else if(args[1] && !member) {
          client.fetchUser(args[1]).then(user => {
    const embed = new Discord.RichEmbed()
      .setAuthor(user.tag, user.avatarURL)
      .setColor("RANDOM")
      .setTitle("Link Avatar")
      .setURL(`${user.avatarURL}`)
      .setImage(`${user.avatarURL}`)
      .setFooter("Posted by" + message.author.tag, message.author.avatarURL);
     message.channel.sendEmbed(embed);
  })
    }
  }
});
 
  ////warn
   client.on('message',  async  message  =>  {
  let  user  =  message.mentions.users.first();
  let  reason  =  message.content.split(' ').slice(2).join(' ');
                   var prefix = set(message);
if(message.content.startsWith(prefix  +  'warn'))  {
  message.delete();
  if(!message.member.hasPermission('MUTE_MEMBERS')) return      message.channel.send('**You do not have permission**' );
  if(!user)  return  message.channel.send("**mention the user**")//by  OrochiX
  if(!reason)  return  message.channel.send("**Write down the reason**")//by  OrochiX
  let  reportembed  =  new  Discord.RichEmbed()
  .setTitle(`**New  Warned User !**`)
.addField("**-Administrator:**",  `[${user}  ايديه  ${user.id}]`)//by  OrochiX
.addField('**- His warning:**',`[${message.author.tag} ايديه ${message.author.id}]`)//by  OrochiX
.addField('**- Reason:**',  `[${reason}]`,  true)
.addField("**-  In chat:**",`[${message.channel.name}]`)
.addField("**-  Date & time:**",`[${message.createdAt}]`)
.setFooter("prohelper")
.setColor('RED')
let incidentchannel = message.guild.channels.find(`name`, "warns");
if(!incidentchannel) return message.channel.send("I couldn't find `Warns` Channel, please create it");
incidentchannel.send(reportembed);
message.reply(`**:warning: ${user}Been warned!:warning:**`).then(msg  =>  msg.delete(3000));
user.send(`**:warning: ${message.guild.name}You have been warned about why: ${reason} :warning:**`)
}

//coding  by  OrochiX  !

})
////kick
client["on"]("message", message => {
if(message["author"]["bot"]) return undefined;
let args = message["content"]["split"](" ")
if(message["content"]["startsWith"](prefix + "kick")) {
if (!message["member"]["hasPermission"]('MANAGE_GUILD')) return message["channel"].send(`**:x:\`| You Not Have Permission\`**`)
let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
if(!user) return message["channel"]["send"](`**Usage | ${prefix}kick \`[User/UserID]\`**`)
let Reason = message["content"]["split"](" ").slice(2).join(" ");
if(!Reason) return message["channel"]["send"](`:x:| **Please Type Reason**`)
message.guild.member(user).kick(Reason);
message["channel"]["send"](`**✅ | Done Has Kicked <@${user.id}> Reason: \`${Reason}\`**`)
}
})
/////bot
client.on('message', message => {
   var prefix = set(message);
  if(message.content.startsWith(prefix + "bot")) {
  var msg = `${Date.now() - message.createdTimestamp}`
  var api = `${Math.round(client.ping)}`
    let botembed = new Discord.RichEmbed()
       .setColor("#36393e")
    .addField("Bot Name",` \`${client.user.username}\``)
    .addField("Created On",` \`${client.user.createdAt}\``)
    .addField("Servers", `\`${client.guilds.size}\``)
    .addField("Users", `\`${client.users.size}\``)
    .addField("Channels", `\`${client.channels.size}\``)
    .addField("Devs Bot",`\ <@!596452873748086787>\``)
    .addField("Ping Bot",`\`${msg}ms.\``)
    .addField("Api Bot",`\`${api}ms.\``)
    .setTitle('Click here to invite')
    .setURL('https://discord.com/oauth2/authorize?client_id=729297126512918538&permissions=8&scope=bot')
    .setTimestamp();
    message.channel.send(botembed);
  }
});
  ////seerver

////user
client.on("message", pixelbot => {
  var prefix = set(pixelbot);

  if (pixelbot.content.startsWith(prefix + "user")) {

    if (pixelbot.author.bot) return;
    if (!pixelbot.guild)
      return pixelbot.reply("**ممنوع ترسل في خاص البوت ي قلبي❌**");
    pixelbot.guild.fetchInvites().then(invites => {

      let personalInvites = invites.filter(
        i => i.inviter.id === pixelbot.author.id
      );
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var roles = pixelbot.member.roles
        .map(roles => `**__${roles.name}__ |**`)
        .join(` `);
      let pixeluser = new Discord.RichEmbed() 
        .setColor("#36393e")
        .setTitle("** ✨🎉   | your information**") 
        .setAuthor(pixelbot.author.username, pixelbot.author.avatarURL)
        .addField("**👤 Your Name :**   ", pixelbot.author.username, true)
        .addField("** :1234: Tag :**   ", pixelbot.author.discriminator, true)
        .addField("**🎰 Id :** ", pixelbot.author.id, true) 
        .addField(
          "**🛬 Server login in:**   ",
          moment(pixelbot.joinedAt).format("D/M/YYYY h:mm a "),
          true
        )
        .addField(
          "**🐱‍🏍 Making your account on :**    ",
          moment(pixelbot.author.createdAt).format("D/M/YYYY h:mm a "),
          true
        )
        .addField("**💬 Your invitations :**    ", inviteCount, true)
        .setTimestamp(); 
      

      pixelbot.channel.sendEmbed(pixeluser).then(c => {}); 
    });
  }
}); 
////ban
client.on('message', message => {
           var prefix = set(message);
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

if (command === "ban" || command === "b" || command === "شلع") {
               if(!message.channel.guild) return message.reply('** ممنوع ترسل في خاص البوت ي قلبي❌**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You do not have permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I do not have enough privileges, please give me permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**mention the member**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**The rank of the bot must be higher than the rank of the person to be adopted**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**:white_check_mark: ${user.tag} تم تبنيده بنجاح :airplane: **  `)

}
});
////اضهار واخفاء
client.on('message', message => {
      var prefix = set(message);
        if(message.content === prefix + "اخفاء") {
        if(!message.channel.guild) return;
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You do not have permission');
               message.channel.overwritePermissions(message.guild.id, {
               READ_MESSAGES: false
   })
                message.channel.send('**تـم أخفـاء الشـات**')
   }
  });
  
  
  client.on('message', message => {
                  var prefix = set(message);
        if(message.content === prefix + "اظهار") {
        if(!message.channel.guild) return;
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You do not have permission');
               message.channel.overwritePermissions(message.guild.id, {
               READ_MESSAGES: true
   })
                message.channel.send('**تـم أظهـار الشـات**')
   }
  });
  ////lock and unlock
  client.on('message', message => {
                  var prefix = set(message);
if(message.content === `${prefix}lock`) {
  
                      if(!message.channel.guild) return message.reply('** ممنوع ترسل في خاص البوت ي قلبي❌ **');

if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(' **You do not have permission **');
         message.channel.overwritePermissions(message.guild.id, {
       SEND_MESSAGES: false

         }).then(() => {
             message.reply("** ✅ | تـم قفـل الشـات  **")
         });
           }

if(message.content === `${prefix}unlock`) {
                   if(!message.channel.guild) return message.reply('** ممنوع ترسل في خاص البوت ي قلبي❌ **');

if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('** You do not have permission**');
         message.channel.overwritePermissions(message.guild.id, {
       SEND_MESSAGES: true

         }).then(() => {
             message.reply("**✅ | تـم فتـح الشـات **")
         });
           }
           
    
  
});
////mute

 ////clear
 
////role

////// ------------ = [Voice Commands] = ------------
 client.on('message', message => {
      var prefix = set(message);

 if (message.content.toLowerCase() === prefix + "moveall") {
     message.delete(4000)
 if(!message.channel.guild) return;
 if (!message.member.hasPermission("MOVE_MEMBERS")) return;
 if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return;
if (message.member.voiceChannel == null) return;
 var author = message.member.voiceChannelID;
 var m = message.guild.members.filter(m=>m.voiceChannel)
 message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
 m.setVoiceChannel(author)
 })
 message.channel.send('\`All audio members have been moved to your ROM\`').then(m => m.delete(4000))
 }
   });





client.on ('message', async (message) => {
  if (!message.guild || message.author.bot) return null;
                    var prefix = set(message);
  if (message.content.split(' ') [0] == prefix + 'edit') {
    
    if (message.author.id !== '596452873748086787') return null;
    message.delete ().catch ();
    var msgid = message.content.split (' ') [1];
    var newmsg = message.content.split (' ').slice (2).join (' ');
    if ( (!msgid) || (!newmsg)) return message.reply ('Usage: '+prefix+'edit <message id> <new message>').then (m => m.delete (3000));
    message.channel.fetchMessage (msgid).then (msg => {
      if (msg.author.id !== client.user.id) return message.rpely ('This message is not sent by me.').then (m => m.delete (3000));
      msg.edit (newmsg);
      message.reply ('Done').then (m => m.delete (3000));
    }).catch (() => {message.channel.send('I cant find any message with the specifed id.').then (m => m.delete (3000));})
  }
})
////help

  ////nekname
  client.on("message", message => {
                var prefix = set(message);
if(message.content.startsWith(prefix + "setnick")){
if(message.author.bot || message.channel.type == "dm" || !message.member.hasPermission("MANAGE_NICKNAMES") || !message.guild.member(client.user).hasPermission("MANAGE_NICKNAMES")) return;
var user = message.mentions.members.first();
var args = message.content.split(" ").slice(2);
var nick = args.join(" ");
if(!user || !args) return message.channel.send(`**• | إستعمال:** ${prefix}setnick \`\`@Name\`\` nickname`);
message.guild.member(user.user).setNickname(`${nick}`);
message.channel.send(`تغيرت بنجاح **${user}** nickname to **${nick}**`);
}
});

////معلومات الرتبه

////عدد المبندين 
client.on('message', message => {
                var prefix = set(message);
    if (message.content.startsWith(prefix + "bans")) {
      if (!message.channel.guild) return;
    message.channel
        message.guild.fetchBans()
        .then(bans => message.channel.send(`:small_orange_diamond: **The number of blocked server :** ${bans.size} `))
  .catch(console.error);
}
});
////حاله
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(client.guilds.map(c => `${c.name} : ${c.me.hasPermission(8)}`));
  client.user.setStatus("online");

  client.user.setActivity(`$help | $support | users ${client.users.size}`, { type: "playing" });
});
////top

////ticket

////owner
client.on('message', message => {
                  var prefix = set(message);
    if (message.content.startsWith(prefix + "dev")) {
    message.channel.send({
    embed: new Discord.RichEmbed()

       .setThumbnail('https://cdn.discordapp.com/avatars/596452873748086787/a_b9e722c8ed644008b677cbbe0b1643de.gif')

       .setColor('BLACK')
       .setTitle('``Owner Information`` ')
       .addField('**الاسم**' ,`<@596452873748086787>` , true)
       .addField('**Age**' ,`N/A` , true)
       .addField('**Country**' ,`SA` , true)

    })
    }
    });
////top invites
client.on('message',message =>{
                  var prefix = set(message);
    if(message.content.startsWith(prefix + 'topinvites')) {
     
  message.guild.fetchInvites().then(i =>{
  var invites = [];
   
  i.forEach(inv =>{
    var [invs,i]=[{},null];
     
    if(inv.maxUses){
        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
    }else{
        invs[inv.code] =+ inv.uses;
    }
        invites.push(`invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`;`);
   
  });
  var embed = new Discord.RichEmbed()
  .setColor("BLACK")
  .setDescription(`${invites.join(`\n`)+'\n\n**بطلب من:** '+message.author}`)
           message.channel.send({ embed: embed });
   
  });
   
    }
  }); 
////info
client.on('message', async message => {
                  var prefix = set(message);
if(message.content.startsWith( prefix + 'info')) { //// وهون الامر طبعا
        let oi = message.mentions.users.first() ? message.mentions.users.first().id : message.author.id;
        let Tag = message.mentions.users.first() ? message.mentions.users.first().tag : message.author.tag;
        let Username = message.mentions.users.first() ? message.mentions.users.first().username : message.author.username;
        let Avatar = message.mentions.users.first() ? message.mentions.users.first().avatarURL : message.author.avatarURL;
       
        message.guild.fetchInvites().then(invs => {
            let member = client.guilds.get(message.guild.id).members.get(oi);
            let personalInvites = invs.filter(i => i.inviter.id === oi);
            let urll = invs.filter(i => i.inviter.id === oi);
            let link = urll.reduce((p , v) => v.url +` , Total de membros recrutados no convite: ${v.uses}.\n`+ p, `\nServidor: ${message.guild.name} \n `);
            let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
            let inviteCode = personalInvites.reduce((p, v) => v.code);
            let possibleInvites = [['Total de membros recrutados:']];
            possibleInvites.push([inviteCount, inviteCode]);
            let user = message.mentions.users.first() || message.author;
            let mem = message.guild.member(user);
            let millisJoined = new Date().getTime() - mem.joinedAt.getTime();
            let daysJoined = millisJoined / 1000 / 60 / 60 / 24;
           
            var inviteInfo = new Discord.RichEmbed()
            .setTitle(`:incoming_envelope: **[معلومات الدعوة]** ${Username}`)
            .setThumbnail(client.user.avatarURL)
            .addField('**عدد الدعوات للسيرفر**', `**➥** [ شخص **${Number(inviteCount)}** ]`)
            .addField('**تاريخ انضمامك لسيرفرنا **', `**➥** [ منذ  **${daysJoined.toFixed(0)}** يوم ]`)
            .addField('**رابط الدعوة الذي دخلت منه**', `**➥** [ **https://discord.gg/${inviteCode || 'Zm2U6we'}** ]`)
            .setColor('RANDOM')
            .setTimestamp()
            .setFooter(Tag, Avatar)
           
            message.channel.send(inviteInfo);
            });
    };
});
////


////حمايه
   
 


////اقتراح

////

////log
client.on("message", salm=>{
        var prefix = set(salm);
  if(salm.content === prefix + 'help1') {
    const embed = new Discord.RichEmbed()
    .setAuthor('ProHelper',)
    .setColor('#8400cd')
    .setTitle(`ProHelper Support | الدعم الفني`)
    .setURL('https://discord.gg/bJK5yg5cqy')
     .setDescription(`
${prefix} | server
${prefix} | bot
${prefix} | invite
${prefix} | user
${prefix} | id
${prefix} | support
${prefix} | 
${prefix} | الامر
${prefix} | الامر`)
    
    .setFooter(`${salm.author.username}`,`${salm.author.avatarURL}`)
    salm.author.sendEmbed(embed)
  }
});

////


////

 client.on("message", message => {
if(message.author.bot) return;
   var prefix = set(message);
if(message.content.startsWith(prefix + "support")) {
message.author.send(`https://discord.gg/5R289uWc64`)///link server
message.author.send(`https://discord.com/oauth2/authorize?client_id=729297126512918538&permissions=8&scope=bot`)///link bot
message.channel.send(`**chek to Dm**`)
message.react("✅")
}
})
  ////اختصار
  
////

  ////قيف

////color
client.on("message", message => {
  let args = message.content.split(" ").slice(1);
                                                        var prefix = set(message);
  if (message.content.split(" ")[0] == prefix + "color") {
    const embedd = new Discord.RichEmbed()
      .setFooter(
        "Requested by " + message.author.username,
        message.author.avatarURL
      )
      .setDescription(`**There's No Color With This Number ** :x: `)
      .setColor(`ff0000`);
    if (!args[0]) return message.channel.sendEmbed(embedd);
    if (isNaN(args[0]))
      return message.channel.sendEmbed(
        embedd.setDescription("Please select a number :x:")
      );
    if (!message.guild.roles.find("name", `${args[0]}`))
      return message.channel.sendEmbed(embedd);

    var a = message.guild.roles.find("name", `${args[0]}`);
    if (!a) return;
    if (a.hasPermission(8))
      return message.channel.send(
        embedd.setDescription("This color has administrator!")
      );
    const embed = new Discord.RichEmbed()

      .setFooter(
        "Requested by " + message.author.username,
        message.author.avatarURL
      )
      .setDescription(`**Color Changed To Successfully** :white_check_mark: `)

      .setColor(`${a.hexColor}`);
    message.channel.sendEmbed(embed);
    if (!args[0]) return;
    setInterval(function() {});
    let count = 0;
    let ecount = 0;
    for (let x = 1; x < 201; x++) {
      message.member.removeRole(message.guild.roles.find("name", `${x}`));
    }
    message.member.addRole(message.guild.roles.find("name", `${args[0]}`));
  }
});
////قيف

////صنع رد تلقائي



////لوق طرد ودخول
client.on("guildCreate", guild => {
  const embed = new Discord.RichEmbed()
   .setColor("GREEN")
   .setTitle(`** Server Added ProHelper.**`)
   .setDescription(`**  
    __Server Name__ → ${guild.name}
    __Server Owner__ → ${guild.owner}
    __Server ID__ → ${guild.id}
    __Mebmers Count__ → ${guild.memberCount}
    __Server Count__ → ${client.guilds.size}**`);
client.channels.get("765075786553884672").sendEmbed(embed)
});
client.on("guildDelete", guild => {
  const embed = new Discord.RichEmbed()
   .setColor("RED")
   .setTitle(` Server Kicked ProHelper.`)
   .setDescription(`**
     __Server Name__ → ${guild.name}
     __Server Owner__ → ${guild.owner}
     __Server ID__ → ${guild.id}
     __Mebmers Count__ → ${guild.memberCount}
     __Server Count__ → ${client.guilds.size}**`);
client.channels.get("765075786553884672").sendEmbed(embed)
}); 
////roles
client.on('message', message => {
  let args = message.content.split(" ")
  var prefix = set(message);
  if (args[0].toLowerCase().startsWith(prefix+'roles')) {
    let str = "";
    var role = message.guild.roles.forEach(role => {
      str +=" "+role.name+'\n'
    })
    message.channel.send(`\`\`\`${str}\`\`\``)
  }
})
////رد
  ////كريديت
  
////مانع السب

////xp



client.on('message', message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;

    var messages = message.content.split(" ").slice(1);

    let args = messages.slice(1); 

  var prefix = set(message);
    if(message.content.startsWith(prefix + 'report')){
        let msg = message;


        if(message.guild.member(message.author).roles.get(msg.guild.roles.find(role => role.name === `banned_report`))) return message.reply('**لقد تم حظرك لا يمكنك ابلاغ احد**').then(m => {m.delete(3000)}); //لو حد عنده هل رتبة ما رح يقدر يسوي ريبورت 

        var reports_channel = message.guild.channels.find('name', 'reports') // اسم الروم الي تجيه الريبورتات

        if(!reports_channel) return message.reply('**I cant find reports room.**').then(m => {m.delete(3000)});
        
        var mention = message.mentions.users.first();
        
        if(!mention) return message.reply('**Please, mention a member.**').then(m => {m.delete(3000)});

        if(mention.id == message.author.id) return message.reply('**You cant report yourself**').then(m => {m.delete(3000)});
        
        if(message.guild.member(mention).hasPermission("MANAGE_MESSAGES")) return message.reply('**You cant report this user.**').then(m => {m.delete(3000)}) //لو شخص عنده هل برمشن ماحد رح يقدر يسويله ريبورت
        
        if(mention.id == message.guild.owner.id) return message.reply('**You cant report the owner.**').then(m => {m.delete(3000)});


        var reason = args.join(" ");

        if(!reason) return message.reply('**Please, specify a reason.**').then(m => {m.delete(3000)});
        var embed = new Discord.RichEmbed()
        .setColor('RED')
        .setTitle(`NEW REPORT`)
        .setThumbnail(message.author.avatarURL)
        .addField('**Reporter Name: **', `<@${message.author.id}> ID [ ${message.author.id} ]`, true)
        .addField('**ReportedUser Name: **', `${mention} ID [ ${mention.id} ]`, true)
        .addField('**Time** ', `[ ${moment(message.createdAt).format('D/MM/YYYY h:mm a')} ]`, true)
        .addField('**reason: **', `[ ${reason} ]`, true)
        .addField('**Channel: **', `${message.channel}`, true)
        reports_channel.send(embed)
        message.channel.send('**تم البلاغ, نشكرك على  مساعدتنا**').then(message => {message.delete(3000)});
    }
});
////

////

////
client.on('message', message => {
  var prefix = set(message);
         if (message.content === prefix + "time") {
    
         if (!message.channel.guild) return message.reply('** This command only for servers **');  
         var currentTime = new Date(),
            hours = currentTime.getHours() + 4 ,
            hours2 = currentTime.getHours() + 3 ,
            hours3 = currentTime.getHours() + 2 ,
            hours4 = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
             var h = hours
  if(hours > 12) {
               hours -= 12;
            } else if(hours == 0) {
                hours = "12";
            }  
             if(hours2 > 12) {
               hours2 -= 12;
            } else if(hours2 == 0) {
                hours2 = "12";
 
            }  
                         if(hours3 > 12) {
               hours3 -= 12;
            } else if(hours3 == 0) {
                hours3 = "12";
            } 
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            var suffix = 'صباحاَ';
            if (hours >= 12) {
                suffix = 'مساء';
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }
 
 
                var Date15= new Discord.RichEmbed()
                .setThumbnail("https://i.imgur.com/ib3n4Hq.png") 
                .setTitle( "『التاريخ  والوقت』")
                .setColor('RANDOM')
                .setFooter(message.author.username, message.author.avatarURL)
                .addField('الامارات',
                "『"+ hours + ":" + minutes +":"+ seconds + "』")
                 .addField('السعودية',
                "『"+ hours2 + ":" + minutes +":"+ seconds  + "』") 
                .addField('مصر',
                "『"+ hours3 + ":" + minutes +":"+ seconds  + "』") 
 
                .addField('Date',
                "『"+ Day + "-" + Month + "-" + Year +  "』")
 
                 message.channel.sendEmbed(Date15);
        }
    });
////

//// 



////


////

////


//// 

////
 client.on('message', function(msg) {
    var prefix = set(msg);
  if(msg.content.startsWith (prefix + 'server')) {

    if(!msg.channel.guild) return msg.reply('**❌ اسف لكن هذا الامر للسيرفرات فقط **');
    let embed = new Discord.RichEmbed()
    .setColor('#000000')
    .setTitle(`ProHelper Support`)
    .setURL('https://discord.gg/5R289uWc64')
    .setThumbnail(msg.guild.iconURL)
    .setTitle(`${msg.guild.name}`,true)
    .addField(':id: **ايدي السيرفر:**',`${msg.guild.id}`,true)
    .addField('📅** تم انشاء السيرفر في**',msg.guild.createdAt.toLocaleString())
    .addField('👑** صاحب السيرفر**',`${msg.guild.owner}`,true)
    .addField(':busts_in_silhouette:  **الاعضاء **' + `[ ${msg.guild.memberCount} ]`,`**${msg.guild.members.filter(m=>m.presence.status == 'online').size}**` + ' المتصلين')
    .addField(':speech_balloon: الرومات ' + `[ ${msg.guild.channels.size} ]`,`**${msg.guild.channels.filter(m => m.type === 'text').size}**` + ' كتابي | ' + `**${msg.guild.channels.filter(m => m.type === 'voice').size}**` + ' صوتي')//tt
    .addField(':earth_africa: نوع الخادم','**المنطقه: **' + `${msg.guild.region}` + ' **مستوى التحقق:** ' + `${msg.guild.verificationLevel}`)
    .addField(':closed_lock_with_key:** الرتب **' + `[ ${msg.guild.roles.size} ]`,'لرؤية قائمة مع استخدام جميع الرتب **$roles**');
    msg.channel.send({embed:embed});
  }
});
////

/////










////

client.on("message", salm=>{
        var prefix = set(salm);
  if(salm.content === prefix + 'invite') {
    const embed = new Discord.RichEmbed()
    .setAuthor('ProHelper Support', 'https://images-ext-2.discordapp.net/external/Hemrlbfwd0V2bcCFPuQ-e1esdZoL8bNtbZi17qCy24I/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/729297126512918538/328d4a6f4f094078b1878da869f82c44.png?width=427&height=427','https://discord.gg/bJK5yg5cqy')
    .setColor('#8400cd')
    .setTitle(`Invite The Bot!`)
    .setURL('https://discord.com/oauth2/authorize?client_id=729297126512918538&permissions=8&scope=bot')
    .setFooter(`${salm.author.username}`,`${salm.author.avatarURL}`)
    salm.channel.sendEmbed(embed)
  }
});
////
 const points = JSON.parse(fs.readFileSync("./points.json"));
var agin2 = false;
client.on("message", message => {//By Shadi Alhakimi
if(message.author.bot) return;
  var prefix = set(message);
if(message.content.startsWith(prefix + "اعلام")){
var images=[
`https://new3.co/wp-content/uploads/2018/01/1686.png`,
`https://v.3bir.net/3bir/2014/01/SaudiArabia-1.jpg`,
`https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Flag_of_Syria.svg/1200px-Flag_of_Syria.svg.png`,
`https://photozil.com/wp-content/uploads/2018/03/%D8%B5%D9%88%D8%B1-%D8%B9%D9%84%D9%85-%D9%85%D8%B5%D8%B1-%D8%B1%D9%85%D8%B2%D9%8A%D8%A7%D8%AA-%D9%88-%D8%AE%D9%84%D9%81%D9%8A%D8%A7%D8%AA-%D8%A7%D9%84%D8%B9%D9%84%D9%85-%D8%A7%D9%84%D9%85%D8%B5%D8%B1%D9%8A-16.jpg`,
`https://alamphoto.com/wp-content/uploads/2018/01/Iraq-Flag-9.png`,
`https://3ezh.net/wp-content/uploads/2019/07/201.png`,
`https://www.almrsal.com/wp-content/uploads/2016/09/%D8%B9%D9%84%D9%85-%D9%84%D8%A8%D9%86%D8%A7%D9%86.jpg`,
`http://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Hopkinson_Flag.svg/2000px-Hopkinson_Flag.svg.png`,
`https://alamphoto.com/wp-content/uploads/2018/01/Palestine-flag-1.jpg`,
`http://alamphoto.com/wp-content/uploads/2018/01/Morocco-Flag-8.jpg`,
 `https://upload.sqorebda3.com/uploads/153133543357278.jpg`,
`https://i0.wp.com/ar-wiki.com/wp-content/uploads/2015/06/%D8%B9%D9%84%D9%85-%D8%AC%D8%B2%D8%B1-%D8%A7%D9%84%D9%82%D9%85%D8%B1.png?resize=750%2C430&ssl=1`,
`http://mz-mz.net/wp-content/up/eb61c3ca-d286-40c1-8a68-e7a4a882fb18.jpg`,
  `https://st2.depositphotos.com/1325352/9273/v/450/depositphotos_92737404-stock-illustration-algeria-national-flag-country-flag.jpg`,
  `https://photos1.blogger.com/blogger/7540/2604/1600/QatarF.jpg`,
  `https://cdn.allwallpaper.in/wallpapers/1440x960/2832/canada-canadian-flag-flags-leaves-maple-leaf-1440x960-wallpaper.jpg`,
  `https://3.bp.blogspot.com/-65Bp1pBZB3g/WCFDBXqpoFI/AAAAAAAAAQQ/M8nT28IfysA4lTVZxgPw7psOKlFsS2kYQCLcB/s1600/Flag_of_Sudan.png`,
  `https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png`,
  `https://www.saaih.com/files/travel/%D8%A7%D9%84%D8%A7%D8%B1%D8%AF%D9%86/Flag_of_Jordan.svg_.png`,
  `https://www.marefa.org/images/thumb/2/2c/Flag_of_Bahrain.svg/1200px-Flag_of_Bahrain.svg.png`,
  `https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/1200px-Flag_of_the_United_Arab_Emirates.svg.png`,
  `https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Flag_of_Pakistan_%28bordered%29.svg/1280px-Flag_of_Pakistan_%28bordered%29.svg.png`,
  `https://www.now-time.com/flags/2560/ly.png`,
  `https://www.siteawy.com/mediafiles/images/country-flags/mv.png`,
  `http://www.lahona.com/gallery/lahona_008/2010_file430650_16_1120_1958_20.jpg`,
  `https://i.ytimg.com/vi/HerLspJT_Wg/maxresdefault.jpg`,

];
var so =[
"اليمن",
"السعودية",
 "سوريا",
 "مصر",
 "العراق",
 "الكويت",
 "لبنان",
 "امريكا",
 "فلسطين",
  "المغرب",
  "تونس",
  "جزر القمر",
  "بريطانيا", 
  "الجزائر",
  "قطر",
  "كندا",
  "السودان",
  "الهند",
  "الاردن",
  "البحرين",
  "الامارات",
  "باكستان",
  "ليبيا",
  "جزر المالديف",
  "كوريا",
  "تركيا",
  
];
var image= Math.random()*images.length;
let embed = new Discord.RichEmbed()
.setColor('RANDOM') 
.setDescription(`> **لديك 15 ثواني فقط !**`)
.setAuthor(`أعلام`)
.setImage(images[parseInt(image)])
.setFooter("")
.setTimestamp(message.createdAt);
if(agin2) return message.channel.send(`> **الرجاء الانتظار اللعبة قيد التشغيل !**`).then(message => {message.delete(5000)});
message.channel.sendEmbed(embed).then(
msg1 => {
agin2 = true;
var r = message.channel.awaitMessages(msg => msg.content == so[parseInt(image)], {
maxMatches: 1,
time: 15000,
errors: ["time"]
});
r.catch(() => {
let em1 = new Discord.RichEmbed()
.setColor('RANDOM') 
.setDescription("> لم يستطع أحد الاجابة بشكل صحيح \n الاجابة الصحيحة هي : "+` __${so[parseInt(image)]}__`)
.setAuthor(`أنتهى الوقت`)
.setFooter("")
.setTimestamp(message.createdAt);
message.channel.sendEmbed(em1).then(
agin2 = false);
});
r.then(collected => {

if (!points[collected.first().author.id]){
points[collected.first().author.id] = {
point: 0
}}; 
points[collected.first().author.id].point += +1;
fs.writeFileSync("./points.json", JSON.stringify(points));
let em2 = new Discord.RichEmbed()
.setColor('RANDOM') 
.setDescription(""+"أنت هو الافضل 🔥 \n لقد تمكنت من فعلها في وقت قياسي !"+`\n ${collected.first().author}`+"\n\n"+"نقاطك الحالية :"+"``"+`${points[collected.first().author.id].point}`+"``"+" 🎉" )
.setAuthor(`لقد ربحت`)
.setFooter("")
.setTimestamp(message.createdAt);
message.channel.sendEmbed(em2).then(
agin2 = false);
})})}});
////

 const pointss = JSON.parse(fs.readFileSync("./pointss.json"));
var agin2 = false;
client.on("message", message => {//By Shadi Alhakimi
if(message.author.bot) return;
  var prefix = set(message);
if(message.content.startsWith(prefix + "شعار")){
var images=[
`https://cdn.mosoah.com/wp-content/uploads/2019/09/22153539/5ca45cbdefe85.jpg`,
  `https://ezzat.info/wp-content/uploads/2016/09/careem-logo-3.jpg`,
  `https://log-logo.com/wp-content/uploads/2019/09/cropped-w1.png`,
  `https://i.ytimg.com/vi/XTlDFwspZVU/maxresdefault.jpg`,
  `https://i.ytimg.com/vi/cZ2W7iZDOUs/maxresdefault.jpg`,
  `https://upload.wikimedia.org/wikipedia/ar/thumb/d/df/AltaawounFC_Logo.svg/1200px-AltaawounFC_Logo.svg.png`,
  `https://cdn.mosoah.com/wp-content/uploads/2019/09/16160706/image-3-e1568639314259.jpg`,
  `https://ajel.sa/uploads/material-file/5de35fb677d7db656e19b887/5de35fc83abce.png`,
  `https://yt3.ggpht.com/a-/AAuE7mC8qq7EvU0oXBDSleNzwk6RUI9D28jUbfSP4Q=s900-mo-c-c0xffffffff-rj-k-no`,
  `https://i.ytimg.com/vi/aNT8qrN_qVU/maxresdefault.jpg`,
  `https://cdn.mosoah.com/wp-content/uploads/2019/10/24163654/%D8%B5%D9%88%D8%B1-%D8%B4%D8%B9%D8%A7%D8%B1-%D8%A7%D9%84%D8%A8%D9%8A%D9%83-%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9.jpg`,
  `https://ma3loma.com/wp-content/uploads/2019/12/%D8%B4%D8%B9%D8%A7%D8%B1-%D9%88%D8%B2%D8%A7%D8%B1%D8%A9-%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85.png`,

];
var so =[
"الحرس الوطني",
  "كريم",
  "واتساب",
  "فيراري",
  "الهلال",
  "التعاون",
  "تويوتا",
  "G20",
  "الاتحاد",
  "سامسونج",
  "البيك",
  "وزارة التعليم",
];
var image= Math.random()*images.length;
let embed = new Discord.RichEmbed()
.setColor('RANDOM') 
.setDescription(`> **لديك 10 ثواني فقط !**`)
.setAuthor(`شعار`)
.setImage(images[parseInt(image)])
.setFooter("")
.setTimestamp(message.createdAt);
if(agin2) return message.channel.send(`> **الرجاء الانتظار اللعبة قيد التشغيل !**`).then(message => {message.delete(5000)});
message.channel.sendEmbed(embed).then(
msg1 => {
agin2 = true;
var r = message.channel.awaitMessages(msg => msg.content == so[parseInt(image)], {
maxMatches: 1,
time: 10000,
errors: ["time"]
});
r.catch(() => {
let em1 = new Discord.RichEmbed()
.setColor('RANDOM') 
.setDescription("> لم يستطع أحد الاجابة بشكل صحيح \n الاجابة الصحيحة هي : "+` __${so[parseInt(image)]}__`)
.setAuthor(`أنتهى الوقت`)
.setFooter("")
.setTimestamp(message.createdAt);
message.channel.sendEmbed(em1).then(
agin2 = false);
});
r.then(collected => {

if (!points[collected.first().author.id]){
points[collected.first().author.id] = {
point: 0
}}; 
points[collected.first().author.id].point += +1;
fs.writeFileSync("./pointss.json", JSON.stringify(points));
let em2 = new Discord.RichEmbed()
.setColor('RANDOM') 
.setDescription(""+"أنت هو الافضل 🔥 \n لقد تمكنت من فعلها في وقت قياسي !"+`\n ${collected.first().author}`+"\n\n"+"نقاطك الحالية :"+"``"+`${points[collected.first().author.id].point}`+"``"+" 🎉" )
.setAuthor(`لقد ربحت`)
.setFooter("")
.setTimestamp(message.createdAt);
message.channel.sendEmbed(em2).then(
agin2 = false);
})})}});
////


client.on('message', msg => {
    var prefix = set(msg);
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command == "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("**```ضع عدد عدد الرسائال المراد حذفها```**").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});
////
client.on("message", message => {
    var prefix = set(message);
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "savatar"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(` Avatar Server: ${message.guild.name}`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });
////
client.on("message", message => {
  let command = message.content.split(" ")[0];
      var prefix = set(message);
  if (command == prefix + "unban") {
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (args == "allllll") {
      message.guild.fetchBans().then(zg => {
        zg.forEach(Saad => {
          message.guild.unban(Saad);
        });
      });
      return message.channel.send("**✅ Unbanned all members **");
    }
    if (!args) return message.channel.send("**Please Type the member ID**");
    message.guild
      .unban(args)
      .then(m => {
        message.channel.send(
          `<a:x13:712913365508292610> **-** **Done Unbanned ${m.username}**`
        );
      })
      .catch(stry => {
        message.channel.send(
          `<a:x30:714394016883540031> **-** **I can't find \`${args}\` in the ban list**`
        );
      });
  }
});
////

client.on('message', message =>{
  let args = message.content.split(' ');
if(args[0] === `${prefix}emoji`){
let findEmoji = args[1];

if(!findEmoji || findEmoji === '') return  message.reply(`**أدخل الايموجي**`);

let EmojiId = findEmoji.slice(findEmoji.length - 19,findEmoji.length -1);

if(isNaN(EmojiId)) return message.reply(`**لم استطع العثور على الايموجي المطلوب**`);

let EmojiURL = `https://cdn.discordapp.com/emojis/${EmojiId}.png`;

let EmojiEmbed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle(`Link Emoji ${findEmoji}`)
.setURL(`${EmojiURL}`)
.setImage(`${EmojiURL}`)

message.channel.send({ embed  : EmojiEmbed });

};
});



////
client.on('message', message => {
        var prefix = set(message);
    if (message.content.startsWith(prefix + "id")) {
var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
        moment.locale('ar-TN');
var id = new  Discord.RichEmbed()
.setColor("RANDOM")
.addField(': الانضمام للسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
.addField(': تأسيس الحساب في', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true)
.addField(": الاسم المستعار",`${h.nickname}`, true) .addField(": التاق",heg.discriminator, true)
.addField(`: playing`,`${h.presence.game && h.presence.game.name || '-'}`,true) .addField(': الحالة',`${h.presence.status}`,true)
.addField(`: الرتب`, `${message.guild.members.get(h.id).roles.map(r => `\`${r.name}\``).slice(1).join('\n') || 'لايوجد رتب'}`,true)                                                    
.setThumbnail(heg.avatarURL);
message.channel.send(id)
}       });
////
client.on("message", james => {
        var prefix = set(james);
if(james.content.startsWith(prefix + `send`)) {
if(james.author.id !== '596452873748086787')
james.delete(4000);
if(james.author.bot || james.channel.type == 'dm') return;
var args = james.content.split(" ").slice(2).join(" ")
let member = james.mentions.members.first()
if(!member) return james.reply('Please specify member')
if(!args) return james.reply("يجب كتابة الرسالة");
const embed = new Discord.RichEmbed()
.setDescription(`Message: ${args}
by ${james.author.tag}`)
.setFooter(james.guild.name)
.setTimestamp()
member.send(embed).then(() =>{
    let e = '**Sending Message**'
      james.reply(e).then(m => m.delete(3000))
})
}
});
////


 
 
////

////


////
client.on("message", message =>{
             var prefix = set(message);
  if(message.content.startsWith(prefix + 'topservers')){ // الامر (topserver)
    let count = message.content.split(" ")[1];
    const top = client.guilds.sort((a,b)=>a.memberCount-b.memberCount).array().reverse()
    if(!count) count = 10;
    if(isNaN(count)) count = 10;
    if(count <= 0) count = 10;
    if(count > top.length) count = top.length;
    let embed = new Discord.RichEmbed();
    for(let i = 0; i < count; i++){
    embed.addField(`**${top[i].name}** : ${top[i].memberCount}`," ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎");
    }
    embed.setTitle(`**Top ${count} Servers**`);
    embed.setThumbnail(message.author.displayAvatarURL);
    embed.setTimestamp();
    embed.setFooter(client.user.username,client.user.displayAvatarURL);
    message.channel.send(embed);
  }});
////


////
 
let profile = require('./profile.json');
client.on('message', message => {
              var prefix = set(message);
    let user = message.mentions.users.first() || message.author;
    let mention = message.mentions.users.first();
    let args = message.content.split(" ");
    if(!message.guild) return;
    if(user.bot) return;
    if(!profile[user.id])
    profile[user.id] = {
        credits: 0,
        cdaily: 0,
        rep: 0,
        rdaily: 0
    }
    fs.writeFileSync('profile.json', JSON.stringify(profile));
   if(message.content.toLowerCase().startsWith(prefix + "credits")) {
      if(!args[2]) {
          message.channel.send(`${user.username}, Credits balance is \`$${profile[user.id].credits}\``);
      }
      if(args[2]) {
      const balance = args[2]
      if(isNaN(balance)) return message.channel.send(`:x: Only numbers are allowed.`);
      if(balance.includes(".")) return message.channel.send(`:x: No dicimal numbers allowed`);
      if(user.bot) return message.channel.send(`:x: Bots are not allowed.`);
      if(mention.id === message.author.id) return message.channel.send(`You can't transfer credits to yourself.`);
      if(balance > profile[message.author.id].credits) return message.channel.send(`Your Credits balance is not enough for that.`)
 
      let a1 = Math.floor(Math.random() * 9);
      let a2 = Math.floor(Math.random() * 9);
      let a3 = Math.floor(Math.random() * 9);
      let a4 = Math.floor(Math.random() * 9);
      let confirm = `${a1}${a2}${a3}${a4}`
      const bal = Math.floor(balance * 1);
 
      message.channel.send(`**transferring $${balance} credits to ${user.username}**
      ${message.author.username}, Please type this number to proceed:
      > \`${confirm}\``).then(c => {
          message.channel.awaitMessages(r => r.author.id === message.author.id, {
              max: 1,
              time: 500000,
              errors: ['time'],
          }).then(collected => {
              if(collected.first().content === confirm) {
                  collected.first().delete()
                  c.delete()
                  message.channel.send(`${message.author.username} Transferred $${balance} credits to ${user}`);
 
                  profile[mention.id].credits += bal;
                  profile[message.author.id].credits -= bal;
                  fs.writeFileSync("profile.json", JSON.stringify(profile));
              } else {
                  c.delete()
                  collected.first().delete()
              }
          })
      })
    }
   }
   if (message.content.toLowerCase().startsWith(prefix + 'daily')) {
      var prefix = set(message);
    if(!message.guild) return;
    if(message.author.bot) return;
    let cooldown = 8.64e7;
    let Daily = profile[message.author.id].cdaily;
    if (Daily !== null && cooldown - (Date.now() - Daily) > 0) {
      let times = cooldown - (Date.now() - Daily);
      message.channel.send(
        `**:rolling_eyes: | ${
          message.author.username
        }, your daily credits refreshes in ${pretty(times, {
          verbose: true
        })}.**`
      );
      fs.writeFileSync("profile.json", JSON.stringify(profile));
    } else {
      const daily = Math.floor(Math.random() * 1000) + 150;
      profile[message.author.id].credits += daily;
      profile[message.author.id].cdaily = Date.now();
      message.channel.send(
        `**:moneybag: ${message.author.username}, you got :dollar: ${daily} daily credits!**`
      );
      fs.writeFileSync("profile.json", JSON.stringify(profile));
    }
  }
})
 
client.on('message', message => {
    if(!message.guild) return;
         var prefix = set(message);
    if(message.content.toLowerCase().startsWith(prefix + "profile")) {
        let user = message.mentions.users.first() || message.author;
        if(user.bot) return message.channel.send(`:x: Bots are not allowed.`);
 
        let p = new Discord.RichEmbed()
        .setTitle(`${user.username}'s Profile`)
        .setThumbnail(user.avatarURL)
        .setColor("PURPLE")
        .setDescription(`**Credits:** \`$${profile[user.id].credits}\`
        **Reputations:** \`${profile[user.id].rep}\``)
        .setFooter(`Requested by ${message.author.username}`)
 
        message.channel.sendEmbed(p);
    }
})
 
client.on("message", message => {
      let user = message.mentions.users.first() || message.author;
      let boom = message.mentions.users.first() || message.author;    
    let args = message.content.split(" ");
         var prefix = set(message);
    if (message.content.startsWith(prefix + "rep")) {
      var mem = message.mentions.users.first();
      if(!message.guild) return;
      if (!message.channel.guild) return;
      moment.locale("en");
      if (!mem)
        return message.channel.send(
          `**:mag: |  ${message.author.username}, Mention a user**`
        );
      if (mem.bot)
        return message.channel.send(
          `:x: **Bots are not allowed**`
        );
      if (mem.id == message.author.id)
        return message.channel.send(
          `**:x: ${message.author.username}, You can't rep yourself**`
        );
      if (profile[message.author.id].rdaily != moment().format("L")) {
        profile[message.author.id].rdaily = moment().format("L");
        profile[mem.id].rep = Math.floor(profile[mem.id].rep + 1);
        message.channel.send(
          `** :up:  |  ${message.author.username} has given ${mem} a reputation point!**`
        );
      } else {
        message.channel.send(
          `${
            message.author.username
          }, **You can rep again** **${moment()
            .endOf("day")
            .fromNow()} **`
        );
      }
    }
        fs.writeFileSync("profile.json", JSON.stringify(profile));
  });
////
