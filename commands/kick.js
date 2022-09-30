module.exports = {
    name:'kick',
    description:"นี่คือคำสั่ง kick",
    execute(message,args){
        
        const member = message.mentions.members.first();
        if(message.author.id != 307804872408039424)return message.channel.send('คุณไม่ใช่ zedl3all').then(setTimeout(() => {  message.channel.bulkDelete(2) }, 5000));
        try{
            if(member){
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.kick();
                message.channel.send(`${memberTarget} ถูก kick แล้วค่ะ`).then(setTimeout(() => {  message.channel.bulkDelete(2) }, 5000));
            }
        }catch(err){
            message.channel.send("ขอโทษค่ะ ทำไม่ได้ค่ะ").then(setTimeout(() => {  message.channel.bulkDelete(2) }, 5000));
        }
    }
}