const db = require('../../models/warns')
const {
    Message,
    MessageEmbed
} = require('discord.js')
const { i } = require('mathjs')

module.exports = {
    nombre: 'warns',
    alias: [],
    descripcion: "Warnea a un usuario en el Discord.",
    /**
     * @param {Message} message
     */
    run: async (client, message, args) => {

        message.delete()
        let date = new Date()
        let fecha = date.toLocaleString('es-ES', {
            timeZone: "UTC"
        })

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        var numwarn = args[1]

        let noUser = new MessageEmbed()
        .setDescription(`\u200B\n**__NO__ has mencionado a ningun usuario!**\n\u200B`)
        .setColor("RED")
        .setAuthor("FreshLifeRP | Warns", "https://cdn.discordapp.com/attachments/861979891238830083/883126859620040714/sin_gorra_512x512_movimiento.gif")
        .setThumbnail("https://cdn.discordapp.com/attachments/861979891238830083/883126859620040714/sin_gorra_512x512_movimiento.gif")

        if (!user) return message.channel.send(noUser).then(m => m.delete({timeout: 10000}))

        if(!numwarn){
            db.findOne({
                user: user.id
            }, async (err, data) => {
                if (err) throw err;
    
                try {
                    if (data.content.length) {
    
                        let advertencias  = data.content.map(
                            (w, i) =>
                            `\`${i + 1}\``
                        )
    
                        let embedWarn = new MessageEmbed()
                            .setAuthor("FreshLifeRP | Warns", "https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
                            .setTitle(`Advertencias de ${user.user.tag}`)
                            .setThumbnail("https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
                            .setDescription(`\u200B\n**>>**  ` + advertencias.join(" **|** ") ? advertencias.join(" **|** ") : "**¡El usuario no posee advertencias!**" + ` **<<**\n\u200B`)
                            .setColor("#F9CA81")
                        message.channel.send(embedWarn).then(m => m.delete({timeout: 10000}))
                    } else {
                        message.channel.send(
                            new MessageEmbed()
                            .setDescription(`El usuario no posee ninguna advertencia.`)
                            .setColor("RED")
                            .setAuthor("FreshLifeRP | Warns", "https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
                            .setThumbnail("https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
                        ).then(m => m.delete({timeout: 10000}))
                    }
                } catch (err) {
                    console.log(`Error en el modulo warns\n` + err.stack)
                }
            })
        } else {

            db.findOne({
                user: user.id
            }, async(err, data) => {
                if(err) throw err

                var numwarn = parseInt(args[1]) - 1;
                let noWarn = new MessageEmbed()
                .setColor("RED")
                .setAuthor("FreshLifeRP | Warns", "https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
                .setDescription(`\`\`\`${message.member.user.username}, El número que colocaste es inválido o el usuario ${user.user.username} no posee la advertencia > ${args[1]} < en su registro.\`\`\``)

                if(data.content[numwarn] === undefined || null){
                    return message.channel.send(noWarn).then(m => m.delete({timeout: 10000}))
                }
                
                let w = data.content[numwarn]

                let advertenciaEmbed = new MessageEmbed()
                .setColor("#F98B81")
                .setTitle(`Advertencia ${args[1]} de ${user.user.tag}`)
                .setAuthor("FreshLifeRP | Advertencias", "https://cdn.discordapp.com/attachments/861979891238830083/883126859620040714/sin_gorra_512x512_movimiento.gif")
                .setThumbnail("https://cdn.discordapp.com/attachments/861979891238830083/883126859620040714/sin_gorra_512x512_movimiento.gif")
                .setDescription(`\u200B\n\n⚠️ **__RAZÓN__ :** \`\`\`${w.razon}\`\`\`\n\n🕑 **__FECHA__ :**\`\`\`${w.fecha}\`\`\`\n`)
                .addFields([
                    // {name: "☢ Advertencia ☢", value: `  ||Numero: ${args[1]}||`, inline: true},
                    {name: "\u200B",value:"\u200B"},
                    {name: "⚒ Moderador ⚒", value: `<@${w.moderator}>`, inline: true},
                    {name: "🧔 Usuario 🧔", value: `${user}`, inline: true}
                ])

                try {
                    message.channel.send(advertenciaEmbed).then(m => m.delete({timeout: 10000}))
                } catch {
                    console.log('Ha ocurrido un error en mostrar la advertencia.')
                }

                console.log(data.content[numwarn])
            })
        }

    }
}