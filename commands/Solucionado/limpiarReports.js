let discord = require('discord.js')
let db = require('megadb')
let totalReports = new db.crearDB('recuento')

module.exports = {
    nombre: 'purgeallreports',
    alias: [],
    descripcion: "Limpia TODA la base de datos de los Reportes",
    run: async(client, message, args) => {

        message.delete() // Borra el mensaje del comando

        let noPerms = new discord.MessageEmbed()
        .setColor("RED")
        .setDescription("🔴 ¡No tienes permisos para utilizar este comando! 🔴")
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setTimestamp()

        let member = message.member;
        let staff = ["738366811451555941","875932218118258708","738215059519438899"]
        if(!staff.some(id => message.member.roles.cache.has(id))){
            return message.channel.send(noPerms)
        }

        let sureMessage = new discord.MessageEmbed()
        .setDescription('**¿Estas seguro que quieres eliminar la base de datos de Reportes?**\n\nReacciona al emoji:\n🟢 > Eliminar base de datos\n🔴 > Cancelar')
        .setColor('YELLOW')
        .setAuthor(message.author.tag, message.member.user.displayAvatarURL())
        .setTitle('🚧 Reportes 🚧')

        let timeError = new discord.MessageEmbed()
        .setDescription(`**${message.member} has tardado demasiado, el comando ha sido cancelado**`)
        .setColor('RED')
        .setAuthor(message.author.tag, message.member.user.displayAvatarURL())
        .setTitle('🚧 Reportes 🚧')

        let Cancel = new discord.MessageEmbed()
        .setDescription('**¡El comando ha sido cancelado por cuenta propia!**')
        .setColor('RED')
        .setAuthor(message.author.tag, message.member.user.displayAvatarURL())
        .setTitle('🚧 Reportes 🚧')


        let Exito = new discord.MessageEmbed()
        .setDescription('**¡La base de datos de los Reportes ha sido borrada con éxito!**')
        .setColor('GREEN')
        .setAuthor(message.author.tag, message.member.user.displayAvatarURL())
        .setTitle('🚧 Reportes 🚧')

        let canalLogs = client.channels.resolve("870085706041659483")

        try {
            message.channel.send(sureMessage).then(async(m) => {
                await m.react('🟢')
                await m.react('🔴')

                const filter = (reaction, user) => {
                    return ["🟢","🔴"].includes(reaction.emoji.name) && user.id == message.member.id;
                }
    
                m.awaitReactions(filter,{
                    max: 1,
                    time: 10000,
                    errors: ["time"]
                }).catch(async() => {
                    await m.reactions.removeAll()
                    await m.edit(timeError)
                }).then(async(collected) => {
                    const reaction = collected.first()
    
                    if(reaction.emoji.name === '🟢'){
                        await m.reactions.removeAll()
                        try{
                            await totalReports.purgeall()
                            await m.edit(Exito)
                            await canalLogs.send(
                                new discord.MessageEmbed()
                                .setDescription(`El Staff ${message.member} ha borrado la base de datos de los reportes por completo`)
                                .setColor("GREEN")
                                .setAuthor(message.author.tag, message.member.user.displayAvatarURL())
                                .setTitle('HAN BORRADO LA DB')
                            )
                        } catch (err){
                            let Errorr = new discord.MessageEmbed()
                            .setDescription(`**¡Ha ocurrido un error!**\n\n\`\`\`${err.stack}\`\`\``)
                            .setColor('RED')
                            .setAuthor(message.author.tag, message.member.user.displayAvatarURL())
                            .setTitle('🕔 Reportes 🕔')
                            m.edit(Errorr)
                        }
                    }
                    if(reaction.emoji.name === '🔴'){
                        await m.reactions.removeAll()
                        await m.edit(Cancel)
                    }
                })
            })
        } catch (err) {
            console.log(err.stack)
        }

    }
}