const discord = require('discord.js')
const db = require('megadb')
const staff_db = new db.crearDB('recuento')

module.exports = {
    nombre: 'solucionado',
    alias: [],
    descripción: 'Envía un mensaje de reporte solucionado.',
    run: async(client, message, args) => {
        
        var canal = client.channels.resolve("877059171126747136")

        let cliente = message.member;
        let usuario = message.mentions.members.first()
        message.delete()
        console.log(usuario)
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

        let noMention = new discord.MessageEmbed()
        .setDescription(`${cliente}, \`\`\`No has mencionado al Usuario.\`\`\``)
        .setColor("RED")
        //.setColor("#EA4FFF")
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setFooter("FreshLifeRP | Staff","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")

        // Si no menciona //
        if(!usuario) return message.channel.send(noMention).then( m = async(m) => {
            m.delete({timeout: 5000})
        });

        let mensajeExitoNeutral = new discord.MessageEmbed()
        .addFields([
            {name: '🔰 Staff:', value: cliente, inline: true},
            {name: '👦 Ciudadano:', value: usuario, inline: true}
        ])
        .setDescription(`\`\`\`Ciudadano ${usuario.user.username}, ¿Su problema ha sido solucionado?\`\`\`\n\`\`\`diff\n- ¿El reporte no ha sido solucionado con éxito?\n+ Si fue solucionado reacciona al ✅\n+ En cambio Puedes reaccionar a la " ❌ " y abrir un Ticket con tus inquietudes.\`\`\``)
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setFooter("FreshLifeRP | Staff","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setTimestamp()
        .setColor('#D14BF5')

        let mensajeExitoSolucionado = new discord.MessageEmbed()
        .addFields([
            {name: '🔰 Staff:', value: cliente, inline: true},
            {name: '👦 Ciudadano:', value: usuario, inline: true}
        ])
        .setDescription(`\`\`\`El reporte hecho por el Ciudadano ${usuario.user.username} ha sido solucionado!\`\`\``)
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setFooter("FreshLifeRP | Staff","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setTimestamp()
        .setColor('GREEN')

        let mensajeExitoNoSolucionado = new discord.MessageEmbed()
        .addFields([
            {name: '🔰 Staff:', value: cliente, inline: true},
            {name: '👦 Ciudadano:', value: usuario, inline: true}
        ])
        .setDescription(`\`\`\`El reporte hecho por el Ciudadano ${usuario.user.username} lamentablemente no ha sido solucionado.\`\`\`\n\`\`\`diff\n- ¿El reporte no ha sido solucionado con éxito?\n+ Puedes abrir un Ticket y comentar tus inquietudes para poder solucionar el problema.\`\`\``)
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setFooter("FreshLifeRP | Staff","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setTimestamp()
        .setColor('RED')


        let reportes = await staff_db.obtener(`${cliente.id}`) // Definimos el contador

        if(!reportes){  // Si no hay reportes en su DB
            try {
                canal.send(mensajeExitoNeutral).then( m = async(m) => {
                    await staff_db.establecer(`${cliente.id}`, {reportesSolucionados: 0, reportesNoSolucionados: 0 })
                    await m.react('✅')
                    await m.react('❌')

                    const filtro = (reaction, user) => {
                        return ["✅", "❌"].includes(reaction.emoji.name) && user.id == usuario.id;
                    }

                    m.awaitReactions(filtro, {
                        max: 1,
                        time: 50000,
                        errors: ["time"]
                    }).catch(async () => {
                        await m.edit(mensajeExitoSolucionado)
                        await m.reactions.removeAll()
                        await staff_db.sumar(`${cliente.id}.reportesSolucionados`, 1)
                    }).then(async (collect) => {
                        let reaccion = collect.first()

                        if(reaccion.emoji.name === '✅'){
                            await m.reactions.removeAll()
                            await m.edit(mensajeExitoSolucionado)
                            await staff_db.sumar(`${cliente.id}.reportesSolucionados`, 1)
                        }
                        
                        if(reaccion.emoji.name === '❌'){
                            await m.reactions.removeAll()
                            await m.edit(mensajeExitoNoSolucionado)
                            await staff_db.sumar(`${cliente.id}.reportesNoSolucionados`, 1)
                        }

                    })

                })
            } catch (err) {
                console.error(err)
            }
            
        }

        if(reportes){
            try {
                canal.send(mensajeExitoNeutral).then( m = async(m) => {
                    await m.react('✅')
                    await m.react('❌')

                    const filtro = (reaction, user) => {
                        return ["✅", "❌"].includes(reaction.emoji.name) && user.id == usuario.id;
                    }

                    m.awaitReactions(filtro, {
                        max: 1,
                        time: 50000,
                        errors: ["time"]
                    }).catch(async () => {
                        await m.edit(mensajeExitoSolucionado)
                        await m.reactions.removeAll()
                        await staff_db.sumar(`${cliente.id}.reportesSolucionados`, 1)
                    }).then(async (collect) => {
                        let reaccion = collect.first()

                        if(reaccion.emoji.name === '✅'){
                            await m.reactions.removeAll()
                            await m.edit(mensajeExitoSolucionado)
                            await staff_db.sumar(`${cliente.id}.reportesSolucionados`, 1)
                        }
                        
                        if(reaccion.emoji.name === '❌'){
                            await m.reactions.removeAll()
                            await m.edit(mensajeExitoNoSolucionado)
                            await staff_db.sumar(`${cliente.id}.reportesNoSolucionados`, 1)
                        }

                    })

                })
            } catch (err) {
                console.error(err)
            }
        }

        // try {
        //     message.channel.send(mensajeExito)
        // } catch (err) {
        //     console.log(err)
        // }
        
    }
}