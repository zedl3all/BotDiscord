module.exports = {
    name:'songcm',
    description:"นี่คือคำสั่ง ช่วยเหลือเกี่ยวกับเพลง",
    execute(message,args){
        message.author.send('\nวิธีใช้กรุณาพิมพ์เครื่องหมาย " > " แล้วตามด้วยคำสั่งนะคะ ♥ \n:one:play หรือ p \n:two:leave หรือ dis')
        message.channel.send('ข้อความจะถูกส่งไปยังข้อความส่วนตัวค่ะ♥');
    }
}