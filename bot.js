const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$' ; 


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//////////////////////////////////////////////////
client.on('message', msg => {
  if (msg.content === '..') {
    msg.reply('جعل ماينقط غيرك :kissing_heart: ');
  }
});


  //////////////////////يثبت البوت داخل روم/////////////////////////////////////


client.on('ready', () => {
var x = client.channels.get("502793546370252808");
if (x) x.join();
});



/////////////////////////////////كود حالة البةت/////////////////////////////////



client.on('ready', function(){    
    var ms = 40000 ;    
    var setGame = ['شغل خالد الرشيدي','صلو على النبي  '];    
    var i = -1;    
    var j = 0;    
    setInterval(function (){    
        if( i == -1 ){    
j = 1;    
       }    
        if( i == (setGame.length)-1 ){    
            j = -1;    
      }    
       i = i+j;    
        client.user.setGame(setGame[i],`http://www.youtube.com/gg`);    
}, ms);    
    
});



//////////////////////////كود عرض البنق/////////////////////////////////////////
	  

client.on('message', message => {
    if (message.author.id === client.user.id) return;
            if (message.content.startsWith(prefix + "ping")) {
        message.channel.sendMessage(':ping_pong: Pong! In `' + `${client.ping}` + ' ms`');
    }
});

	  

////////////////////////////////كود لون متغير//////////////////////////////////



client.on('ready',async () => {
  console.log(client.user.username);
  try {
    const config = {
      name: "VIP 4", // اسم الرتبة
      guildid: "502793545841901579", // اي دي السيرفر
      sec: 0.1 // عدد الثواني
    };
    let guild = client.guilds.get(config.guildid);
    let role = guild.roles.find(role => role.name === config.name);
    let sec = config.sec * 1000;
    if(!guild) return console.warn("Unkown guild.");
    if(!role) return console.warn("Unkown role");
    if(role.position >= guild.members.get(client.user.id).highestRole.position) return console.warn("Bot highest role must be above rainbow role");
    setInterval(() => {
      role.edit({ 
      color: "RANDOM"
    });
    }, sec);
  } catch(e) {
    console.error(e);
  }
});	

///////////////////////////////////تغيير لون ASH////////////////////////////////
	  


client.on('ready',async () => {
  console.log(client.user.username);
  try {
    const config = {
      name: "VIP", // اسم الرتبة
      guildid: "502793545841901579", // اي دي السيرفر
      sec: 0.1 // عدد الثواني
    };
    let guild = client.guilds.get(config.guildid);
    let role = guild.roles.find(role => role.name === config.name);
    let sec = config.sec * 1000;
    if(!guild) return console.warn("Unkown guild.");
    if(!role) return console.warn("Unkown role");
    if(role.position >= guild.members.get(client.user.id).highestRole.position) return console.warn("Bot highest role must be above rainbow role");
    setInterval(() => {
      role.edit({ 
      color: "RANDOM"
    });
    }, sec);
  } catch(e) {
    console.error(e);
  }
});	  


////////////////////////////////تغيير لون ASH///////////////////////////////////
	  


client.on('ready',async () => {
  console.log(client.user.username);
  try {
    const config = {
      name: "VIP 1", // اسم الرتبة
      guildid: "502793545841901579", // اي دي السيرفر
      sec: 0.1 // عدد الثواني
    };
    let guild = client.guilds.get(config.guildid);
    let role = guild.roles.find(role => role.name === config.name);
    let sec = config.sec * 1000;
    if(!guild) return console.warn("Unkown guild.");
    if(!role) return console.warn("Unkown role");
    if(role.position >= guild.members.get(client.user.id).highestRole.position) return console.warn("Bot highest role must be above rainbow role");
    setInterval(() => {
      role.edit({ 
      color: "RANDOM"
    });
    }, sec);
  } catch(e) {
    console.error(e);
  }
});	  


////////////////////////////////تغيير لون ASH///////////////////////////////////
	  


client.on('ready',async () => {
  console.log(client.user.username);
  try {
    const config = {
      name: "VIP 2", // اسم الرتبة
      guildid: "502793545841901579", // اي دي السيرفر
      sec: 0.1 // عدد الثواني
    };
    let guild = client.guilds.get(config.guildid);
    let role = guild.roles.find(role => role.name === config.name);
    let sec = config.sec * 1000;
    if(!guild) return console.warn("Unkown guild.");
    if(!role) return console.warn("Unkown role");
    if(role.position >= guild.members.get(client.user.id).highestRole.position) return console.warn("Bot highest role must be above rainbow role");
    setInterval(() => {
      role.edit({ 
      color: "RANDOM"
    });
    }, sec);
  } catch(e) {
    console.error(e);
  }
});	  


/////////////////////////////////تغيير لون ASH//////////////////////////////////
	  


client.on('ready',async () => {
  console.log(client.user.username);
  try {
    const config = {
      name: "VIP 3", // اسم الرتبة
      guildid: "502793545841901579", // اي دي السيرفر
      sec: 0.1 // عدد الثواني
    };
    let guild = client.guilds.get(config.guildid);
    let role = guild.roles.find(role => role.name === config.name);
    let sec = config.sec * 1000;
    if(!guild) return console.warn("Unkown guild.");
    if(!role) return console.warn("Unkown role");
    if(role.position >= guild.members.get(client.user.id).highestRole.position) return console.warn("Bot highest role must be above rainbow role");
    setInterval(() => {
      role.edit({ 
      color: "RANDOM"
    });
    }, sec);
  } catch(e) {
    console.error(e);
  }
});	  


////////////////////////////////تغيير لون ASH///////////////////////////////////
	  


client.on('ready',async () => {
  console.log(client.user.username);
  try {
    const config = {
      name: "VIP 4", // اسم الرتبة
      guildid: "502793545841901579", // اي دي السيرفر
      sec: 0.1 // عدد الثواني
    };
    let guild = client.guilds.get(config.guildid);
    let role = guild.roles.find(role => role.name === config.name);
    let sec = config.sec * 1000;
    if(!guild) return console.warn("Unkown guild.");
    if(!role) return console.warn("Unkown role");
    if(role.position >= guild.members.get(client.user.id).highestRole.position) return console.warn("Bot highest role must be above rainbow role");
    setInterval(() => {
      role.edit({ 
      color: "RANDOM"
    });
    }, sec);
  } catch(e) {
    console.error(e);
  }
});	  


///////////////////////////////تغيير لون ASH////////////////////////////////////
	  


client.on('ready',async () => {
  console.log(client.user.username);
  try {
    const config = {
      name: "VIP 5", // اسم الرتبة
      guildid: "502793545841901579", // اي دي السيرفر
      sec: 0.1 // عدد الثواني
    };
    let guild = client.guilds.get(config.guildid);
    let role = guild.roles.find(role => role.name === config.name);
    let sec = config.sec * 1000;
    if(!guild) return console.warn("Unkown guild.");
    if(!role) return console.warn("Unkown role");
    if(role.position >= guild.members.get(client.user.id).highestRole.position) return console.warn("Bot highest role must be above rainbow role");
    setInterval(() => {
      role.edit({ 
      color: "RANDOM"
    });
    }, sec);
  } catch(e) {
    console.error(e);
  }
});	  


///////////////////////////////تغيير لون ASH////////////////////////////////////
	  


client.on('ready',async () => {
  console.log(client.user.username);
  try {
    const config = {
      name: "VIP 6", // اسم الرتبة
      guildid: "502793545841901579", // اي دي السيرفر
      sec: 0.1 // عدد الثواني
    };
    let guild = client.guilds.get(config.guildid);
    let role = guild.roles.find(role => role.name === config.name);
    let sec = config.sec * 1000;
    if(!guild) return console.warn("Unkown guild.");
    if(!role) return console.warn("Unkown role");
    if(role.position >= guild.members.get(client.user.id).highestRole.position) return console.warn("Bot highest role must be above rainbow role");
    setInterval(() => {
      role.edit({ 
      color: "RANDOM"
    });
    }, sec);
  } catch(e) {
    console.error(e);
  }
});	  


///////////////////////////////تغيير لون ASH////////////////////////////////////
	  


client.on('ready',async () => {
  console.log(client.user.username);
  try {
    const config = {
      name: "VIP 7", // اسم الرتبة
      guildid: "502793545841901579", // اي دي السيرفر
      sec: 0.1 // عدد الثواني
    };
    let guild = client.guilds.get(config.guildid);
    let role = guild.roles.find(role => role.name === config.name);
    let sec = config.sec * 1000;
    if(!guild) return console.warn("Unkown guild.");
    if(!role) return console.warn("Unkown role");
    if(role.position >= guild.members.get(client.user.id).highestRole.position) return console.warn("Bot highest role must be above rainbow role");
    setInterval(() => {
      role.edit({ 
      color: "RANDOM"
    });
    }, sec);
  } catch(e) {
    console.error(e);
  }
});	  


////////////////////////////////تغيير لون ASH///////////////////////////////////
	  


client.on('ready',async () => {
  console.log(client.user.username);
  try {
    const config = {
      name: "VIP 8", // اسم الرتبة
      guildid: "502793545841901579", // اي دي السيرفر
      sec: 0.1 // عدد الثواني
    };
    let guild = client.guilds.get(config.guildid);
    let role = guild.roles.find(role => role.name === config.name);
    let sec = config.sec * 1000;
    if(!guild) return console.warn("Unkown guild.");
    if(!role) return console.warn("Unkown role");
    if(role.position >= guild.members.get(client.user.id).highestRole.position) return console.warn("Bot highest role must be above rainbow role");
    setInterval(() => {
      role.edit({ 
      color: "RANDOM"
    });
    }, sec);
  } catch(e) {
    console.error(e);
  }
});	  


///////////////////////////////تغيير لون ASH////////////////////////////////////
	  


client.on('ready',async () => {
  console.log(client.user.username);
  try {
    const config = {
      name: "VIP 9", // اسم الرتبة
      guildid: "502793545841901579", // اي دي السيرفر
      sec: 0.1 // عدد الثواني
    };
    let guild = client.guilds.get(config.guildid);
    let role = guild.roles.find(role => role.name === config.name);
    let sec = config.sec * 1000;
    if(!guild) return console.warn("Unkown guild.");
    if(!role) return console.warn("Unkown role");
    if(role.position >= guild.members.get(client.user.id).highestRole.position) return console.warn("Bot highest role must be above rainbow role");
    setInterval(() => {
      role.edit({ 
      color: "RANDOM"
    });
    }, sec);
  } catch(e) {
    console.error(e);
  }
});	  


////////////////////////////////تغيير لون ASH///////////////////////////////////
	  


client.on('ready',async () => {
  console.log(client.user.username);
  try {
    const config = {
      name: "VIP 0", // اسم الرتبة
      guildid: "502793545841901579", // اي دي السيرفر
      sec: 0.1 // عدد الثواني
    };
    let guild = client.guilds.get(config.guildid);
    let role = guild.roles.find(role => role.name === config.name);
    let sec = config.sec * 1000;
    if(!guild) return console.warn("Unkown guild.");
    if(!role) return console.warn("Unkown role");
    if(role.position >= guild.members.get(client.user.id).highestRole.position) return console.warn("Bot highest role must be above rainbow role");
    setInterval(() => {
      role.edit({ 
      color: "RANDOM"
    });
    }, sec);
  } catch(e) {
    console.error(e);
  }
});	  





/////////////////////////////BOT MUSIC//////////////////////////////////////



client.on('ready',async () => {
  console.log(client.user.username);
  try {
    const config = {
      name: "BOT MUSIC", // اسم الرتبة
      guildid: "502793545841901579", // اي دي السيرفر
      sec: 0.01 // عدد الثواني
    };
    let guild = client.guilds.get(config.guildid);
    let role = guild.roles.find(role => role.name === config.name);
    let sec = config.sec * 1000;
    if(!guild) return console.warn("Unkown guild.");
    if(!role) return console.warn("Unkown role");
    if(role.position >= guild.members.get(client.user.id).highestRole.position) return console.warn("Bot highest role must be above rainbow role");
    setInterval(() => {
      role.edit({ 
      color: "RANDOM"
    });
    }, sec);
  } catch(e) {
    console.error(e);
  }
});	  




/////////////////////////////BOT//////////////////////////////////////



client.on('ready',async () => {
  console.log(client.user.username);
  try {
    const config = {
      name: "BOT", // اسم الرتبة
      guildid: "502793545841901579", // اي دي السيرفر
      sec: 0.02 // عدد الثواني
    };
    let guild = client.guilds.get(config.guildid);
    let role = guild.roles.find(role => role.name === config.name);
    let sec = config.sec * 1000;
    if(!guild) return console.warn("Unkown guild.");
    if(!role) return console.warn("Unkown role");
    if(role.position >= guild.members.get(client.user.id).highestRole.position) return console.warn("Bot highest role must be above rainbow role");
    setInterval(() => {
      role.edit({ 
      color: "RANDOM"
    });
    }, sec);
  } catch(e) {
    console.error(e);
  }
});	  



/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////











client.login(process.env.BOT_TOKEN);  //لا تحط التوكن حقك هنا
