const discord = require('discord.js')


module.exports = {
    nombre: 'terminos',
    alias: [],
    desc: "Enseña los términos de compra",
    run: async(client, message, args) => {

        const canallogs = client.channels.resolve('852372554617978910')
        const terminos = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("#EA4FFF")
        .setTitle("- Términos y condiciones de pago -")
        .setDescription("**ᴀʟ ᴄᴏᴍᴘʀᴀʀ ᴜɴ ᴀʀᴛɪᴄᴜʟᴏ ᴇꜱᴛᴀꜱ ᴀᴄᴇᴘᴛᴀɴᴅᴏ ᴜɴᴏꜱ ᴛᴇʀᴍɪɴᴏꜱ ᴅᴇ ᴅᴏɴᴀᴄɪᴏɴᴇꜱ**\n\n**1.** ɴᴏ ᴇꜱᴛᴀ ᴘᴇʀᴍɪᴛɪᴅᴏ ʀᴇᴍʙᴏʟꜱᴀʀ\n**2.** ɴᴏ ꜱᴇ ᴘᴏᴅʀᴀ ᴄᴀᴍʙɪᴀʀ ᴇʟ ᴀʀᴛɪᴄᴜʟᴏ ᴘᴏʀ ᴏᴛʀᴏ\n**3.** ᴛɪᴇɴᴇ Qᴜᴇ ꜱᴇʀ ᴄᴏᴍᴏ ᴀᴍɪɢᴏ ʏ ꜰᴀᴍɪʟɪᴀ ʏ ꜱɪ ɴᴏ ᴇꜱ ᴅᴇ ᴇꜱᴀ ꜰᴏʀᴍᴀ ɴᴏ ᴇꜱᴛᴀ ᴘᴇʀᴍɪᴛɪᴅᴏ ʀᴇᴍʙᴏʟꜱᴀʀ\n**4.** ᴇɴ ᴇʟ ᴘᴀɢᴏ ᴛᴇɴᴅʀᴀɴ Qᴜᴇ ᴍᴀɴᴅᴀʀ ꜱᴜ ɴᴏᴍʙʀᴇ ᴅᴇ ᴅɪꜱᴄᴏʀᴅ")
        .setFooter("FreshLife Shop","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")

        const error = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("RED")
        .setDescription("**¡Ha ocurrido un error!** \n*Posibles errores*\n- No has mencionado al usuario \n- El usuario no tiene los mensajes al dm abiertos")
        .setFooter("¡Si sigue sin funcionar contacta al developer!", "https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")

        const exito = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("GREEN")
        .setDescription("**¡Se ha enviado los términos con éxito!**\n\nDile al usuario que revise sus mensajes privados!\n\n\n*Nota : Si no le llegó probablemente tenga los mensajes privados bloqueados `¡DESBLOQUEALOS!`* ")


        const canal = client.channels.resolve('837441782622847056')
        const usuario = message.mentions.members.first()

        if(!usuario){
            return message.channel.send(error)
        }

        const embedaceptado = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("GREEN")
        .setDescription(`El usuario <@${usuario.user.id}> ha aceptado los términos y condiciones de compra.`)

        const embedrecha = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("RED")
        .setDescription(`El usuario <@${usuario.user.id}> ha rechazado los términos y condiciones de compra.`)

        const embedaceptadoU = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("GREEN")
        .setDescription(`<@${usuario.user.id}> has aceptado los términos y condiciones de compra.`)

        const embedrechaU = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("RED")
        .setDescription(`<@${usuario.user.id}> has rechazado los términos y condiciones de compra.`)

        const errortiempo = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("RED")
        .setDescription(`\n**ERROR:** __TIEMPO DE ESPERA EXCEDIDO__\n\n<@${usuario.user.id}> No has ni aceptado ni rechazado los términos y condiciones de compra. \n\n\`Solicita a un soporte que te envíen nuevamente los términos\``)

        const rechazado = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("#EA4FFF")
        .setDescription("🔴 `¡No tienes permisos para utilizar este comando!` 🔴")
        .setTimestamp()

        const staff = ["829880807799128114","817978346343890964","738215060115292232", "738215059519438899", "738215054004191292","738366811451555941", "824356462586363994", "790425188465377280", "799403097687326750", "738215062023438339", "738215061323251722"]
        /*if(!staff.some(id => message.member.roles.cache.has(id))){
            message.delete() 
            return message.channel.send(rechazado)
        }*/

        message.delete()
        message.channel.send(exito)
        usuario.send(terminos).then(async (m) =>{
            await m.react("✅");
            await m.react("❌");

            const filter = (reaction, user) => {
                return ["✅","❌"].includes(reaction.emoji.name) && user.id == usuario.id;
            }

            m.awaitReactions(filter,{
                max: 1,
                time: 20000,
                errors: ["time"]
            }).catch(async() => {
                await m.edit(errortiempo)
            }).then(async(collected) => {
                const reaction = collected.first()

                if(reaction.emoji.name === '✅'){
                    await m.delete()
                    await usuario.send(embedaceptadoU)
                    await canallogs.send(embedaceptado)
                    await canal.send(embedaceptado)
                }

                if(reaction.emoji.name === '❌'){
                    await m.delete()
                    await usuario.send(embedrechaU)
                    await canallogs.send(embedrecha)
                    await canal.send(embedrecha)
                }
            })
        })
    }
}