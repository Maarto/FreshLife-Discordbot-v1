const { MessageActionRow } = require('discord-buttons')
let { Message, MessageEmbed } = require('discord.js')
let db = require('../../models/warns')

module.exports = {
    nombre: 'removewarn',
    alias: [],
    descripcion: "Quita un warn a un usuario.",
    /**
     * @param {Message} message
     */
    run: async(client, message, args) => {
        message.delete()

        function msg(argumentos) {
            message.channel.send(argumentos).then(m => m.delete({timeout: 10000}))
        }

        const staff = ["829880807799128114","817978346343890964","738215060115292232", "738215059519438899", "738215054004191292","738366811451555941", "824356462586363994", "790425188465377280", "799403097687326750", "738215062023438339", "738215061323251722"]
        if(!staff.some(id => message.member.roles.cache.has(id))){
            message.delete()
            return message.channel.send("No tenes permisos para usar este comando.")
        }


        let noUser = new MessageEmbed()
        .setDescription(`\u200B\n**__NO__ has mencionado a ningun usuario!**\n\u200B`)
        .setColor("RED")
        .setAuthor("FreshLifeRP | Warns", "https://cdn.discordapp.com/attachments/861979891238830083/883126859620040714/sin_gorra_512x512_movimiento.gif")
        .setThumbnail("https://cdn.discordapp.com/attachments/861979891238830083/883126859620040714/sin_gorra_512x512_movimiento.gif")

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!user) return msg(noUser)

        let noWarn = new MessageEmbed()
        .setColor("RED")
        .setAuthor("FreshLifeRP | Warns", "https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setDescription(`\`\`\`El usuario ${user.user.username} no posee la advertencia ${args[1]} en su registro.\`\`\``)

        let removeWarn = new MessageEmbed()
        .setColor("RED")
        .setAuthor("FreshLifeRP | Warns", "https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setDescription(`\`\`\`Se ha eliminado la advertencia ${args[1]} al usuario ${user.user.username} de su registro.\`\`\``)

        let removeWarnLogs = new MessageEmbed()
        .setColor("RED")
        .setAuthor("FreshLifeRP | Warns", "https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setDescription(`\`\`\`El Staff ${message.member.user.username} Le ha quitado la advertencia ${args[1]} al usuario ${user.user.username}\`\`\``)

        let canalLogs = client.channels.resolve("870085706041659483")

        db.findOne({user: user.id}, async(err, data) => {
            if(err) throw err;
            let numero = args[1]
            let noNumber = new MessageEmbed()
            .setDescription(`\u200B\n**El __Número__ que has colocado no es válido!**\n\u200B`)
            .setColor("RED")
            .setAuthor("FreshLifeRP | Warns", "https://cdn.discordapp.com/attachments/861979891238830083/883126859620040714/sin_gorra_512x512_movimiento.gif")
            .setThumbnail("https://cdn.discordapp.com/attachments/861979891238830083/883126859620040714/sin_gorra_512x512_movimiento.gif")

            if(!numero || isNaN(numero)){
                return msg(noNumber)
            }

            numero = parseInt(args[1]) - 1

            if(data) {
                data.content.splice(numero, 1)
                message.channel.send(removeWarn)
                canalLogs.send(removeWarnLogs)
                data.save()
            } else {
                msg(noWarn)
            }
        })

    }
}