module.exports = {
    name:'ps',
    description:"นี่คือคำสั่ง เล่นเสียงนำ",
    async execute(message,args){
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) return message.channel.send('คุณต้องเข้าซักห้องก่อนถึงจะใช้คำสั่งนี้ได้').then(setTimeout(() => {  message.channel.bulkDelete(2) }, 5000));
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if(!permissions.has('CONNECT')) return message.channel.send('ยศของคุณไม่สามารถทำได้').then(setTimeout(() => {  message.channel.bulkDelete(2) }, 5000));
        if(!permissions.has('SPEAK')) return message.channel.send('ยศของคุณไม่สามารถทำได้').then(setTimeout(() => {  message.channel.bulkDelete(2) }, 5000));
        
        const connection = await voiceChannel.join();
        message.channel.send('ขณะนี้กำลังเล่นเสียงใครบางคน:thinking:').then(setTimeout(() => {  message.channel.bulkDelete(2) }, 5000));
        const dispatcher = connection.play('C:/Users/SA090164/Desktop/DB/sound/test.wav',{seek: 0,volume: 1});
        dispatcher.on('finish',finish =>{
            message.channel.send('ได้ทำการออกจากห้องแล้ว :smiling_face_with_3_hearts:').then(setTimeout(() => {  message.channel.bulkDelete(1) }, 5000));
            voiceChannel.leave();
        });
    }
    
}