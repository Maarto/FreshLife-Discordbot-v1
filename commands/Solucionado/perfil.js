const discord = require('discord.js')
const db = require('megadb')
const staff_db = new db.crearDB('recuento')

module.exports = {
    nombre: 'perfil',
    alias: ["profile"],
    descripción: 'Observa el perfil del Staff - Reportes atendidos con éxito y reportes antedidos sin éxito',
    run: async (client, message, args) => {

        let noPerms = new discord.MessageEmbed()
        .setColor("RED")
        .setDescription("🔴 ¡No tienes permisos para utilizar este comando! 🔴")
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setTimestamp()

        const staff = ["829880807799128114"]
        if(!staff.some(id => message.member.roles.cache.has(id))){
            message.delete()
            return message.channel.send(noPerms)
        }

        message.delete()
        let cliente = message.mentions.members.first() || message.member

        let contenidoExito = await staff_db.obtener(`${cliente.id}.reportesSolucionados`)
        let contenidoSinExito = await staff_db.obtener(`${cliente.id}.reportesNoSolucionados`)

        let noReports = new discord.MessageEmbed()
        .setDescription(`${cliente}, \`\`\`diff\nEl usuario no tiene ningun reporte en su perfil\`\`\``)
        .setColor("RED")
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setFooter("FreshLifeRP | Staff","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")

        if(!staff_db.has(`${cliente.id}`)){
            return message.channel.send(noReports).then(m = async(m) => {
                m.delete({timeout: 5000})
            })
        }

        let embedTotal = new discord.MessageEmbed()
        .setDescription(`Bienvenido ${message.member} al sistema de reportes.\n\n\`Perfil de ${cliente.user.username}\``)
        .addFields([
            {name: '✅ Reportes solucionados:', value: `${contenidoExito != undefined ? contenidoExito : 'Sin'} reportes.`, inline: true},
            {name: '❌ Reportes sin éxito:', value: `${contenidoSinExito != undefined ? contenidoSinExito : 'Sin'} reportes.`, inline: true}
        ])
        .setFooter("FreshLifeRP | Staff","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setTimestamp()
        .setColor('#D14BF5')
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")

        message.channel.send(embedTotal).then(m = async(m) => {
            m.delete({timeout: 10000})
        })
    }
}