const Discord = require('discord.js');

const client = new Discord.Client({partials:["MESSAGE","CHANNEL","REACTION"]});

const prefix = '>';



const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}



client.once('ready',() => {
    console.log('Aichan is Online!');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'สวัสดี'){
        client.commands.get('สวัสดี').execute(message,args);
    } else if (command == 'ตารางเรียน'){
        client.commands.get('ตารางเรียน').execute(message,args,Discord,client);
    } else if (command == 'help'){
        client.commands.get('help').execute(message,args);
    } else if (command == 'วันจันทร์'){
        client.commands.get('วันจันทร์').execute(message,args);
    } else if (command == 'วันอังคาร'){
        client.commands.get('วันอังคาร').execute(message,args);
    } else if (command == 'วันพุธ'){
        client.commands.get('วันพุธ').execute(message,args);
    } else if (command == 'วันพฤหัส'){
        client.commands.get('วันพฤหัส').execute(message,args);
    } else if (command == 'วันศุกร์'){
        client.commands.get('วันศุกร์').execute(message,args);
    } else if (command == 'จะดูตารางเรียน'){
        message.channel.send (message.author.username+"นี่ค่ะตารางเรียน:pleading_face:",{files:["./Image/ตารางเรียน.png"]});
    } else if (command == 'play' || command == 'p'){
        client.commands.get('play').execute(message,args);
    } else if (command == 'leave' || command == 'dis'){
        client.commands.get('leave').execute(message,args);
    }else if (command == 'คำสั่งเพลง'){
        client.commands.get('songcm').execute(message,args);
    }else if (command == 'num'){
        client.commands.get('ps').execute(message,args);
    }else if (command == 'num2'){
        client.commands.get('ps2').execute(message,args);
    }else if (command == 'bo'){
        client.commands.get('ps3').execute(message,args);
    }else if (command == 'ก้าวไก่'){
        client.commands.get('ps4').execute(message,args);
    }else if (command == 'ban'){
        client.commands.get('ban').execute(message,args);
    }else if (command == 'kick'){
        client.commands.get('kick').execute(message,args);
    }
});

client.login('ODI2NzQ3NTE0MTE5MjU4MTUy.YGQ-nw.A36L4MSosVfLNb-Gzt_a1goDwEk');
