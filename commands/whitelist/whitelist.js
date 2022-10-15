const discord = require('discord.js')

module.exports = {
    nombre: 'whitelist',
    alias: ["wl","listablanca","examen","entrevista"],
    desc: "Solicita un entrevistador para tu WhiteList",
    run: async(client, message,args) => {
        
        const canallogs = client.channels.resolve('852570871410720788')

        const mensajeWL = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("#fffff")
        .setTitle("- WhiteList -")
        .setDescription(`\nEl usuario **<@${message.author.id}>** está solicitando un <@&824972575011766272>!`)
        const mensajePrivado = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("#fffff")
        .setDescription(`¡<@${message.author.id}>, ya has solicitado un Entrevistador, ingresa a sala de esperando Examen y espera a ser atendido!`)

        const rechazado = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("#EA4FFF")
        .setDescription("🔴 `¡No tienes permisos para utilizar este comando!` 🔴")

        const perms = ["841030560948158540"]
        if(perms.some(id => message.member.roles.cache.has(id))){
            message.delete()
            return message.channel.send(rechazado)
        }

        message.delete()
        canallogs.send(mensajeWL)
        message.author.send(mensajePrivado)
    }
}