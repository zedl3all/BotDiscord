module.exports = {
    name:'leave',
    description:"นี่คือคำสั่ง ที่ทำให้บอทออกจากห้อง",
    async execute(message,args){
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) return message.channel.send('คุณต้องอยู่ในห้องถึงจะทำได้!').then(setTimeout(() => {  message.channel.bulkDelete(2) }, 15000));
        await voiceChannel.leave();
        await message.channel.send('ได้ทำการออกจากห้องแล้ว :smiling_face_with_3_hearts:').then(setTimeout(() => {  message.channel.bulkDelete(2) }, 15000));
    }
}