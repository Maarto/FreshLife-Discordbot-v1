const db = require('../../models/warns')
const { Message, MessageEmbed } = require('discord.js')

module.exports = {
    nombre: 'warn',
    alias: [],
    descripcion: "Warnea a un usuario en el Discord.",
    /**
     * @param {Message} message
     */
    run: async(client, message, args) => {

        message.delete()
        let date = new Date()
        let fecha = date.toLocaleString('es-ES',{timeZone: "UTC"})

        function msg(argumentos) {
            message.channel.send(argumentos).then(m => m.delete({timeout:10000}))
        }

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        let moderador = message.author;
        let reason = args.slice(1).join(" ")

        let embedWarn = new MessageEmbed()
        .setAuthor("FreshLifeRP | Warns", "https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setDescription(`Se ha dado una advertencia con éxito a ${user}\n\n\`\`\`\n${reason}\n\`\`\``)
        .setColor("#F98B81")
        .addFields([
            {name: `🔨 Moderador:`, value: moderador, inline: true},
            {name: `👦 Ciudadano:`, value: user, inline: true},
            {name: `🕐 Fecha:`, value: fecha, inline: false}
        ])

        let noUser = new MessageEmbed()
        .setDescription(`\u200B\n**__NO__ has mencionado a ningun usuario!**\n\u200B`)
        .setColor("RED")
        .setAuthor("FreshLifeRP | Warns", "https://cdn.discordapp.com/attachments/861979891238830083/883126859620040714/sin_gorra_512x512_movimiento.gif")
        .setThumbnail("https://cdn.discordapp.com/attachments/861979891238830083/883126859620040714/sin_gorra_512x512_movimiento.gif")

        if(!user) return msg(noUser)


        let canalLogs = client.channels.resolve("870085706041659483")

        try{
            db.findOne({user: user.id}, async(err, data) => {
                if(err) throw err;
                if(!data) {
                    data = new db({
                        user : user.id,
                        content : [
                            {
                                moderator : message.author.id,
                                razon : reason,
                                fecha : fecha
                            }
                        ]
                    })
                } else {
                    const obj = {
                        moderator : message.author.id,
                        razon: reason,
                        fecha : fecha
                    }
                    data.content.push(obj)
                }
                data.save()
            })
    
            message.channel.send(embedWarn)
            canalLogs.send(embedWarn)
        } catch (err) {
            console.log(err.stack)
        }
    }
}