const discord = require('discord.js')
module.exports = {
    nombre: 'anunciar',
    alias: [],
    descripción: "Hablá con el bot",
    run: async(client, message, args) => {

        const staff = ["738215060115292232", "738215059519438899", "738215054004191292","738366811451555941"]

        const rechazado = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("#EA4FFF")
        .setDescription("🔴 `¡No tienes permisos para utilizar este comando!` 🔴")
        const rechazadoC = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("#EA4FFF")
        .setDescription("🔴 `¡No seleccionaste ningún canal!` 🔴")
        const rechazadoT = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("#EA4FFF")
        .setDescription("🔴 `¡No has colocado ningún Texto!` 🔴")

        const texto = args.slice(1).join(" ");
        let ids = ["199330117128945664", "455873993904488451", "823029797381865523", "729180225719500834", "392904909231489024"]
        message.delete()
        if(!staff.some(id => message.member.roles.cache.has(id))){
            message.delete()
            return message.channel.send(rechazado)
        }
        //if(!ids.some(id => message.author.id == id)) return message.channel.send(rechazado);
        

        const embed = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("#EA4FFF")
        .setDescription(texto)

        const canal = message.mentions.channels.first()
        const mensage_enviar = message.guild.channels.cache.find(channel => channel.name === `${canal}`)
        
        if(!canal) return message.channel.send(rechazadoC)
        if(!texto) return message.channel.send(rechazadoT)
        canal.send(embed)
    }
}