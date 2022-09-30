const { MessageReaction, User } = require("discord.js");

module.exports = {
    name:'ตารางเรียน',
    description:"นี่คือคำสั่ง ตารางเรียน",
    async execute(message,args, Discord,client){
        const channel = '850208695597662229';

        const หัวใจวันจันทร์ ='💛';
        const หัวใจวันอังคาร ='💗';
        const หัวใจวันพุธ ='💚';
        const หัวใจวันพฤหัส ='🧡';
        const หัวใจวันศุกร์ ='💙';

        let embed = new Discord.MessageEmbed()
            .setColor('#01FFFF')
            .setTitle('อยากทราบตารางเรียนวันไหนคะ♥')
            .setDescription(message.author.username + 'สามารถเลือกวันที่ได้เลยค่ะ\n\n'
                + `${หัวใจวันจันทร์} สำหรับวันจันทร์\n`
                + `${หัวใจวันอังคาร} สำหรับวันอังคาร\n`
                + `${หัวใจวันพุธ} สำหรับวันพุธ\n`
                + `${หัวใจวันพฤหัส} สำหรับวันพฤหัส\n`
                + `${หัวใจวันศุกร์} สำหรับวันศุกร์`
                );
        let MessageEmbed = await message.channel.send(embed);
        MessageEmbed.react(หัวใจวันจันทร์);
        MessageEmbed.react(หัวใจวันอังคาร);
        MessageEmbed.react(หัวใจวันพุธ);
        MessageEmbed.react(หัวใจวันพฤหัส);
        MessageEmbed.react(หัวใจวันศุกร์);

        client.on('messageReactionAdd', async(reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;

            if(reaction.message.channel.id == channel){
                if(reaction.emoji.name === หัวใจวันจันทร์){
                    await reaction.client.commands.get('วันจันทร์').execute(message,args,Discord,client);
                }
                if(reaction.emoji.name === หัวใจวันอังคาร){
                    await reaction.client.commands.get('วันอังคาร').execute(message,args,Discord,client);
                }
                if(reaction.emoji.name === หัวใจวันพุธ){
                    await reaction.client.commands.get('วันพุธ').execute(message,args,Discord,client);
                }
                if(reaction.emoji.name === หัวใจวันพฤหัส){
                    await reaction.client.commands.get('วันพฤหัส').execute(message,args,Discord,client);
                }
                if(reaction.emoji.name === หัวใจวันศุกร์){
                    await reaction.client.commands.get('วันศุกร์').execute(message,args,Discord,client);
                }
            } else{
                return;
            }
        });
    }
}