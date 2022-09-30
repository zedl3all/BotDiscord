const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

module.exports = {
    name:'play',
    description:"นี่คือคำสั่ง เล่นเพลง",
    async execute(message,args){
        const voiceChannel = message.member.voice.channel;
        const permissions = voiceChannel.permissionsFor(message.client.user);

        if(!voiceChannel) return message.channel.send('คุณต้องเข้าซักห้องก่อนถึงจะใช้คำสั่งนี้ได้').then(setTimeout(() => {  message.channel.bulkDelete(2) }, 5000));
        if(!permissions.has('CONNECT')) return message.channel.send('ยศของคุณไม่สามารถทำได้').then(setTimeout(() => {  message.channel.bulkDelete(2) }, 5000));
        if(!permissions.has('SPEAK')) return message.channel.send('ยศของคุณไม่สามารถทำได้').then(setTimeout(() => {  message.channel.bulkDelete(2) }, 5000));
        if(!args.length) return message.channel.send('คุณจำเป็นต้องใส่ชื่อ หรือ url เพลง').then(setTimeout(() => {  message.channel.bulkDelete(2) }, 5000));

        const connection = await voiceChannel.join();

        const videoFinder = async (query) =>{
            const videoResult = await ytSearch(query);

            return(videoResult.videos.length > 1) ? videoResult.videos[0] : null;
        }

        const video = await videoFinder(args.join(' '));
        
        if (video){
            const stream = ytdl(video.url, {filter : 'audioonly'});
            connection.play(stream, {seek: 0,volume: 1})
            .on('finish',() =>{
                message.channel.send('ได้ทำการออกจากห้องแล้ว :smiling_face_with_3_hearts:').then(setTimeout(() => {  message.channel.bulkDelete(1) }, 5000));
                voiceChannel.leave();
            });

            await message.reply(`:wink: กำลังเล่นเพลง ***${video.title}***  ในขณะนี้`).then(setTimeout(() => {  message.channel.bulkDelete(2) }, 15000));
        } else{
            message.channel.send('ไม่พบ').then(setTimeout(() => {  message.channel.bulkDelete(2) }, 5000));
        }
        
    }
}