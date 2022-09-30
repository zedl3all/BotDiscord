module.exports = {
    name:'ps4',
    description:"นี่คือคำสั่ง เล่นเพลงก้าวไก่",
    async execute(message,args){
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) return message.channel.send('คุณต้องเข้าซักห้องก่อนถึงจะใช้คำสั่งนี้ได้').then(setTimeout(() => {  message.channel.bulkDelete(2) }, 5000));
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if(!permissions.has('CONNECT')) return message.channel.send('ยศของคุณไม่สามารถทำได้').then(setTimeout(() => {  message.channel.bulkDelete(2) }, 5000));
        if(!permissions.has('SPEAK')) return message.channel.send('ยศของคุณไม่สามารถทำได้').then(setTimeout(() => {  message.channel.bulkDelete(2) }, 5000));
        
        
        const connection = await voiceChannel.join();
        message.channel.send('ขณะนี้กำลังเล่นเสียงเพลง:thinking:').then(setTimeout(() => {  message.channel.bulkDelete(3) }, 5000));
        message.channel.send ({files:["./Image/วิโรจน์-เบอร์1.gif"]});
        const dispatcher = connection.play('C:/Users/SA090164/Desktop/DB/sound/ก้าวไก่.mp3',{seek: 0,volume: 1});
        dispatcher.on('finish',finish =>{
            message.channel.send('ได้ทำการออกจากห้องแล้ว :smiling_face_with_3_hearts:').then(setTimeout(() => {  message.channel.bulkDelete(1) }, 5000));
            voiceChannel.leave();
        });
    }
    
}