const discord = require('discord.js')

module.exports = {
    nombre: 'removerol',
    alias: [],
    descripción: "Quita un rol a un usuario",
    run: async(client, message, args) => {

        const rechazado = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("#EA4FFF")
        .setDescription("🔴 `¡No tienes permisos para utilizar este comando!` 🔴")

        const staff = ["818174058222714951"]
        if(!staff.some(id => message.member.roles.cache.has(id))){
            message.delete()
            return message.channel.send(rechazado)
        }
        
        let canalLogs = client.channel.resolve('818002374059753472')
        let date2 = new Date()
        let usuario = message.mentions.members.first()
        let rol = message.mentions.roles.first()

        const error = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("RED")
        .setDescription("**¡Ha ocurrido un error!** \n\n`Modo de uso:` **removerol @usuario @rol**")
        const error2 = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("RED")
        .setDescription("**¡Ha ocurrido un error!** \n\n¡**NO** puedes quitar un rol igual o superior al tuyo!")
        const error3 = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("RED")
        .setDescription("**¡Ha ocurrido un error!** \n\n¡El usuario no posee ese rol!")
        const exito = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("Yellow")
        .setDescription(`**El rol ${rol} ha sido quitado con éxito por el Calificado ${message.member}** \n\n**Fecha:** \`${date2.toLocaleString('es-ES',{timeZone: "UTC"})}\``)

        if(!usuario){
            message.delete()
            message.channel.send(error).then(async (m) => m.delete({timeout:10000}))
            return;
        }

        if(!rol){
            message.delete()
            message.channel.send(error).then(async (m) => m.delete({timeout:10000}))
            return;
        }

        if(!usuario.roles.cache.has(rol.id)){
            message.delete()
            message.channel.send(error3).then(async (m) => m.delete({timeout:10000}))
            return;
        }

        if(rol.comparePositionTo(message.member.roles.highest)>=0){
            message.delete()
            message.channel.send(error2).then(async (m) => m.delete({timeout:10000}))
            return;
        }

        message.delete()
        await usuario.roles.remove(rol.id)
        message.channel.send(exito)
        canalLogs.send(exito)

    }
}