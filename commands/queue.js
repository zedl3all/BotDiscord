const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

module.exports = {
    name:'queue',
    description:"นี่คือคำสั่ง ดูคิว",
    async execute(message,args){
        if (video){
            const stream = ytdl(video.url, {filter : 'audioonly'});
        await message.reply(`:wink: ตอนนี้กำลังเล่นเพลง ***${video.title}*** `).then(setTimeout(() => {  message.channel.bulkDelete(2) }, 20000));
        }
    }
}