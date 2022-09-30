module.exports = {
    name:'ban',
    description:"นี่คือคำสั่ง Ban",
    execute(message,args){
        const member = message.mentions.members.first();
        if(message.author.id != 307804872408039424)return message.channel.send('คุณไม่ใช่ zedl3all').then(setTimeout(() => {  message.channel.bulkDelete(2) }, 5000));
        try{
            if(member){
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.ban();
                message.channel.send(`${memberTarget} ถูก Ban แล้วค่ะ`).then(setTimeout(() => {  message.channel.bulkDelete(2) }, 5000));
            }
        }catch(err){
            message.channel.send("ขอโทษค่ะ ทำไม่ได้ค่ะ").then(setTimeout(() => {  message.channel.bulkDelete(2) }, 5000));
        }
    }
}