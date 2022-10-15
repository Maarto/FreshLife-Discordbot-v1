const discord = require('discord.js')

module.exports = {
    nombre: "ticket",
    alias: [],
    desc: "Test de tickets",
    run: async (client, message, args) => {
        /* 
        Donación
        Streamers
        perdida de objetos
        report mafia
        report usuario
        Bug
        Coche Boost
        Coche VIP
        Otro */

        const rechazado = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("#EA4FFF")
        .setDescription("🔴 `¡No tienes permisos para utilizar este comando!` 🔴")

        const staff = ["829880807799128114","817978346343890964","738215060115292232", "738215059519438899", "738215054004191292","738366811451555941", "824356462586363994", "790425188465377280", "799403097687326750", "738215062023438339", "738215061323251722"]
        if(!staff.some(id => message.member.roles.cache.has(id))){
            message.delete()
            return message.channel.send(rechazado)
        }

        const usuario = message.mentions.members.first()

        /* Menú principal 🟢 */

        const menuprinci = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("#EA4FFF")
        .setTitle("- Menú principal de ayuda -")
        .setDescription(`Bienvenido ${usuario} al sistema de ayuda automático de **FreshLifeRP**\n\n\`1.\` *Donaciones* = 💵\n\`2.\` *Streamer* = 📹 \n\`3.\` *Pérdida de objetos* = 🗑️\n\`4.\` *Report Máfia* = 🔪\n\`5.\` *Report Usuario* = 🕯️\n\`6.\` *Bug* = 🤖\n\`7.\` *Coche BOOST* = 🚀\n\`8.\` *Coche VIP* = 💠\n\`9.\` *Otro* = 🔖`)

        /* Errores 🟢 */

        const error = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("RED")
        .setDescription("**¡Ha ocurrido un error!** \n*Posibles errores*\n- No has mencionado al usuario")
        .setFooter("¡Si sigue sin funcionar contacta al developer!", "https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        
        /* Donaciones 🟢 */

        const donaciones = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("#EA4FFF")
        .setTitle("- Menú donaciones -")
        .setDescription("`| Pasos para hacer una donación |` \n\n\n **1.** Pedír los términos y condiciones a un Soporte. \n\n**2.** Determinar cuanto es que vas a donar. \n\n**3.** Enviar el pago como amigo al siguiente mail `elmetodo15@gmail.com` \n\n**4.** Y como paso final esperar la aprobación de VMetodo.")
        
        /* Objetos perdidos 🟢 */

        const objperdidos = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("#EA4FFF")
        .setTitle("- Menú objetos perdidos -")
        .setDescription("`| Pasos para recuperar objetos perdidos |` \n\n\n **1.** Colocar como fueron los hechos / motivos por los cuales perdiste tus objetos. \n\n **2.** Adjuntar pruebas en el Ticket para que los Objetos se te sean devueltos. \n\n**3.** Una vez hechos los pasos previos un Soporte taggeara a un Staff. \n\n**4.** Deberás entrar a sala y esperar a que te muevan para poder hacer la devolución de tus cosas.")

        /* Streaming 🟢 */

        const streaming = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("#EA4FFF")
        .setTitle("- Menú Streaming -")
        .setDescription("\n\n`|> Requisitos <|` \n\n | <@&854004135313014784> | \n\n**Cantidad de followers:** `100 - 300`\n**Media de viewers:** `1 - 20` \n**Cantidad de streamings por semana del servidor:** `Mínimo 1 `\n**Cantidad de Horas mínimas:** `5 Por semana`" + "\n\n\n| <@&853600583726530571> | \n\n**Cantidad de followers:** `300 - 1000`\n**Media de viewers:** `20 - 40`\n**Cantidad de streamings por semana del servidor:** `Mínimo 2`\n**Cantidad de Horas mínimas:** `10 por semana`" + "\n\n\n| <@&853600578424274946> | \n\n**Cantidad de followers:** `1000 - ∞`\n**Media de viewers:** `40 - 70`\n**Cantidad de streaming por semana del servidor:** `Mínimo 3`\n**Cantidad de Horas mínimas:** `15 por semana`" +"\n\n\n\n`1.` Enviar tu canal \n\n`2.` Escribir a que rol quieres postular \n\n`3.` Esperar a que un soporte taggee a un Encargado de Streaming. \n\n`4.` Y ahora solo te queda esperar a respuesta!")

        /* Máfia 🟢 */

        const mafia = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("#EA4FFF")
        .setTitle("- Menú Máfia -")
        .setDescription("`| Pasos para realizar un reporte |` \n\n\n `1.` Describir todo lo sucedido \n\n`2.` Adjuntar pruebas de los hechos \n\n`3.` Esperar a que un Soporte mencione a un encargado de máfias!")

        /* Reporte Usuario 🟢 */

        const rusuario = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("#EA4FFF")
        .setTitle("- Menú reporte usuario -")
        .setDescription("`| Pasos para realizar un reporte |` \n\n\n `1.` Describir todo lo sucedido \n\n`2.` Adjuntar pruebas de los hechos \n\n`3.` Esperar a que un Soporte mencione al equipo de Staff!")

        /* Bug 🟢 */

        const bug = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("#EA4FFF")
        .setTitle("- Menú Bug -")
        .setDescription("`| Pasos para reportar un Bug |` \n\n\n`1.` Sacar pruebas del BUG que encontraste \n\n`2.` Describir el Bug que encontraste \n\n`3.` Y ahora solo toca esperar a que un soporte mencione al equipo de desarrolladores. \n\n\n*Muchas gracias por reportar!*")

        /* Boost 🟢 */

        const boost = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("#EA4FFF")
        .setTitle("- Menú coche Boost -")
        .setDescription("`| Pasos para reportar un Bug |` \n\n\n`1.` Deberás enseñar pruebas de que has Boosteado **2** veces el Discord. \n\n`2.` Una vez hecho el paso 1 solo espera a que un Soporte mencione a un encargado de autos.\n\n`3.` Ahora solo te toca esperar a que un Staff pueda ingresar y dartelo! \n\n\n*Muchas gracias por Boostear!*")

        /* Vip 🟢 */

        const vip = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("#EA4FFF")
        .setTitle("- Menú VIP -")
        .setDescription("`| Pasos para reclamar rango VIP |` \n\n\n`1.` Deberás adjuntar el comprobante de pago de la donación que hayas efectuado. \n\n`2.` En cuanto hayas completado el paso anterior solo toca esperar a que VMetodo confirme tu donación y se te otorgará el Rango. \n\n\n*Muchas gracias por Donar!*")
        
        /* Otros 🟢 */

        const otro = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("#EA4FFF")
        .setTitle("- Menú Otros -")
        .setDescription("`¡Describe lo que quieras reportar con PRUEBAS!`")

        if(!usuario){
            message.delete()
            return message.channel.send(error)
        }

        message.delete()
        message.channel.send(menuprinci).then(async (m) => {
            await m.react("💵")
            await m.react("📹")
            await m.react("🗑️")
            await m.react("🔪")
            await m.react("🕯️")
            await m.react("🤖")
            await m.react("🚀")
            await m.react("💠")
            await m.react("🔖")

            const filter = (reaction, user) => {
                return ["💵","📹","🗑️","🔪","🕯️","🤖","🚀","💠","🔖"].includes(reaction.emoji.name) && user.id == usuario.id
            }

            m.awaitReactions(filter, {
                max: 1,
                time: 100000,
                errors: ["time"]
            }).then(async(collected) => {
                const reaction = collected.first()

                if(reaction.emoji.name === '💵'){
                    await m.reactions.removeAll()
                    await m.edit(donaciones)
                }

                if(reaction.emoji.name === '📹'){
                    await m.reactions.removeAll()
                    await m.edit(streaming)
                }

                if(reaction.emoji.name === '🗑️'){
                    await m.reactions.removeAll()
                    await m.edit(objperdidos)
                }

                if(reaction.emoji.name === '🔪'){
                    await m.reactions.removeAll()
                    await m.edit(mafia)
                }

                if(reaction.emoji.name === '🕯️'){
                    await m.reactions.removeAll()
                    await m.edit(rusuario)
                }

                if(reaction.emoji.name === '🤖'){
                    await m.reactions.removeAll()
                    await m.edit(bug)
                }

                if(reaction.emoji.name === '🚀'){
                    await m.reactions.removeAll()
                    await m.edit(boost)
                }

                if(reaction.emoji.name === '💠'){
                    await m.reactions.removeAll()
                    await m.edit(vip)
                }

                if(reaction.emoji.name === '🔖'){
                    await m.reactions.removeAll()
                    await m.edit(otro)
                }
            })

        })

    }
}