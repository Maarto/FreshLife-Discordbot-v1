const discord = require('discord.js')
const db = require('megadb')
const staff_db = new db.crearDB('recuento')

module.exports = {
    nombre: 'removereports',
    alias: [],
    descripcion: 'Agrega reports con éxito o sin éxito a un Staff',
    run: async(client, message, args) => {

        const staff = ["738366811451555941", "875932218118258708", "738215059519438899", "738215060115292232"]
        if(!staff.some(id => message.member.roles.cache.has(id))){
            message.delete()
            return message.channel.send(noPerms)
        }


        let usuario = message.mentions.members.first();
        let cliente = message.member;

        // Borra mensaje //

        message.delete();

        let ejemplo = new discord.MessageEmbed()
        .setDescription(`${cliente}, \`\`\`diff\nPara utilizar el comando usa el siguiente comando\n\n-> .removereports @usuario Exito | Fracasados <Cantidad>\`\`\``)
        .setColor("RED")
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setFooter("FreshLifeRP | Staff","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")

        // Si no menciona //
        if(!usuario) return message.channel.send(ejemplo).then( m = async(m) => {
            m.delete({timeout: 5000})
        });

        let noReports = new discord.MessageEmbed()
        .setDescription(`${cliente}, \`\`\`diff\nEl usuario no tiene ningun reporte en su perfil\`\`\``)
        .setColor("RED")
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setFooter("FreshLifeRP | Staff","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")

        if(!staff_db.has(`${usuario.id}`)){
            return message.channel.send(noReports).then(m = async(m) => {
                m.delete({timeout: 5000})
            })
        }

        let valorExito = await staff_db.obtener(`${usuario.id}.reportesSolucionados`)
        let valorSinExito = await staff_db.obtener(`${usuario.id}.reportesNoSolucionados`)
        let cantidad = args[2]

        let noCant = new discord.MessageEmbed()
        .setDescription(`${cliente}, \`\`\`No has colocado una cantidad o el número no es válido.\`\`\``)
        .setColor("RED")
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setFooter("FreshLifeRP | Staff","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")

        let noCant2 = new discord.MessageEmbed()
        .setDescription(`${cliente}, \`\`\`No puedes quitar mayor cantidad de lo que tiene la persona.\`\`\``)
        .setColor("RED")
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setFooter("FreshLifeRP | Staff","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")

        if(!cantidad || isNaN(cantidad)){
            return message.channel.send(noCant).then(m = async (m) => {
                m.delete({timeout: 5000})
            })
        }

        // Mensaje éxito Agregar //
        let exitoAgregar = new discord.MessageEmbed()
        .setDescription(`${cliente}, \`\`\`Le has quitado con éxito ${cantidad} de reportes solucionados a ${usuario.user.username}\`\`\``)
        .setColor("GREEN")
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setFooter("FreshLifeRP | Staff","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        
        // Mensaje éxito quitar //
        let exitoQuitar = new discord.MessageEmbed()
        .setDescription(`${cliente}, \`\`\`Le has quitado con éxito ${cantidad} de reportes fracasados a ${usuario.user.username}\`\`\``)
        .setColor("GREEN")
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setFooter("FreshLifeRP | Staff","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        

        // if(args[1].toLowerCase != 'exito' != 'fracasados'){
        //     return message.channel.send(ejemplo).then(m = async(m) => {m.delete({timeout:5000})})
        // }

        if(args[1].toLowerCase() === 'exito'){
            
            if(cantidad > valorExito){
                return message.channel.send(noCant2).then(m = async(m) => {
                    m.delete({timeout:5000})
                })
            }

            try {
                message.channel.send(exitoAgregar).then(m = m => {m.delete({timeout:5000})})
                staff_db.restar(`${usuario.id}.reportesSolucionados`, cantidad)
            } catch (err) {
                console.log(err)
                message.channel.send('¡Ha ocurrido un error!').then(m = m => {m.delete({timeout:5000})})
            }
        }

        if(args[1].toLowerCase() === 'fracasados'){

            if(cantidad > valorSinExito){
                return message.channel.send(noCant2).then(m = async(m) => {
                    m.delete({timeout:5000})
                })
            }

            try {
                message.channel.send(exitoQuitar).then(m = m => {m.delete({timeout:5000})})
                staff_db.restar(`${usuario.id}.reportesNoSolucionados`, cantidad)
            } catch (err) {
                console.log(err)
                message.channel.send('¡Ha ocurrido un error!').then(m = m => {m.delete({timeout:5000})})
            }
        }

    }
}