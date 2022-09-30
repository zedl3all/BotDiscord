module.exports = {
    name:'help',
    description:"นี่คือคำสั่ง ช่วยเหลือ",
    execute(message,args){
        message.author.send('\nวิธีใช้กรุณาพิมพ์เครื่องหมาย " > " แล้วตามด้วยคำสั่งนะคะ ♥ \n:one:สวัสดี \n:two:ตารางเรียน \n:three:คำสั่งเพลง' )
        message.channel.send('ข้อความจะถูกส่งไปยังข้อความส่วนตัวค่ะ♥');
    }
}