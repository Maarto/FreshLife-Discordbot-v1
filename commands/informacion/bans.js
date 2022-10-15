const discord = require('discord.js')

module.exports = {
    nombre: 'unbans',
    alias:[],
    desc: "Muestra los precios de unban",
    run: async(client, message, args) => {
        const precios = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("RED")
        .setTitle("- Precios Unban -")
        .setDescription("**ʙᴀɴᴇᴏ ᴅᴇ 3 ᴅɪᴀs** `7€` \n\n**ʙᴀɴᴇᴏ ᴅᴇ 7 ᴅɪᴀs** `13€` \n\n**ʙᴀɴᴇᴏ ᴅᴇ  15 ᴅɪᴀs** `20€` \n\n**ʙᴀɴᴇᴏ ᴅᴇ  30 ᴅɪᴀs** `40€` \n\n**ʙᴀɴᴇᴏ ᴘᴇʀᴍᴀ** `50€` \n\n `como amigo y familia únicamente`\n`elmetodo15@gmail.com`")
        const rechazado = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("#EA4FFF")
        .setDescription("🔴 `¡No tienes permisos para utilizar este comando!` 🔴")

        const staff = ["817978346343890964", "829880807799128114", "824356462586363994", "790425188465377280", "799403097687326750", "738215062023438339", "738215061323251722", "738215060115292232", "738215059519438899"]
        if(!staff.some(id => message.member.roles.cache.has(id))){
            message.delete()
            return message.channel.send(rechazado)
        }
        message.delete()
        message.channel.send(precios)
    }
}