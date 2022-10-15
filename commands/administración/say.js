const discord = require('discord.js')
module.exports = {
    nombre: 'say',
    alias: [],
    descripción: "Hablá con el bot",
    run: async(client, message, args) => {
        const staff = ["738215060115292232", "738215059519438899", "738215054004191292","738366811451555941"]
        const rechazado = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("#EA4FFF")
        .setDescription("🔴 `¡No tienes permisos para utilizar este comando!` 🔴")
        const rechazadoT = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("#EA4FFF")
        .setDescription("🔴 `¡No has colocado ningún Texto!` 🔴")


        const texto = args.join(" ")
        if(!staff.some(id => message.member.roles.cache.has(id))){
            message.delete()
            return message.channel.send(rechazado)
        }
        
        if(!texto) return message.channel.send(rechazadoT)

        message.delete()
        message.channel.send(texto)

    }
}