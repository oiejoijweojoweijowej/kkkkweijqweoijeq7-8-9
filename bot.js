const Discord = require('discord.js');
const bot1 = new Discord.Client();


bot1.on('ready', () => {
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${bot1.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${bot1.guilds.size} " ]`);
  console.log(`Users! [ " ${bot1.users.size} " ]`);
  console.log(`channels! [ " ${bot1.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
 

 bot1.on('message', message => {
  
  if (message.content === 'Do your Daily') {

message.channel.send('#daily')
}
});


 bot1.on('message', message => {
  
  if (message.content === 'do rep') {

message.channel.send('#rep <@474573718967025665>')
}
});


bot1.on('message', message => {
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send('kareem is my dad')
          .then(m => {
            count++;
          })

        }
      }
});


bot1.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
  if(!args) return message.channel.send(`say1 <words>`);
if (command == "say7") {
message.channel.send(args.join("  "))
    message.delete();
  }
});



bot1.login("NTA4MzQxNjAxNTg5MDAyMjUw.DsBugw.DPNsWfM1qssIlkoaaMwPyClgtJ8"
)



///////////////////////////////////////////////////////////////////////////////////




const bot2 = new Discord.Client();
 bot2.on('message', message => {
  
  if (message.content === 'Do your Daily') {

message.channel.send('#daily')
}
});

 bot2.on('message', message => {
  
  if (message.content === 'do rep') {

message.channel.send('#rep <@474573718967025665>')
}
});

bot2.on('message', message => {
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send('kef 7alk ya spam??')
          .then(m => {
            count++;
          })

        }
      }
});


bot2.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
  if(!args) return message.channel.send(`say1 <words>`);
if (command == "say8") {
message.channel.send(args.join("  "))
    message.delete();
  }
});



bot2.login("NTA4NjA5NzQyMjY5MDU0OTg3.DsCwKg.cFOp2XL_ffPddmrNmJi9ZhARGXI"
)

/////////////////////////////////////////////////////////////////////////////////////////


const bot3 = new Discord.Client();
 bot3.on('message', message => {
  
  if (message.content === 'Do your Daily') {

message.channel.send('#daily')
}
});

 bot3.on('message', message => {
  
  if (message.content === 'do rep') {

message.channel.send('#rep <@474573718967025665>')
}
});

bot3.on('message', message => {
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send('i love credits')
          .then(m => {
            count++;
          })

        }
      }
});




bot3.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
  if(!args) return message.channel.send(`say1 <words>`);
if (command == "say9") {
message.channel.send(args.join("  "))
    message.delete();
  }
});


bot3.login("NTA4Njc5ODUwNjc3MjM5ODI4.DsCxDQ._Gv0a5JD2uu8tdu_zVxRUPfYdFs"
)
