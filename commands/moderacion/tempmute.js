const { MessageEmbed } = require('discord.js')
let ms = require('ms')
let db = require('megadb')
let mutedb = new db.crearDB('mute_db')

module.exports = {
    nombre: 'mute',
    alias: [],
    descripcion: "Mutea a la persona que gustes con este comando.",
    run: async (client, message, args) => {
        message.delete()
        let muteRole = "881672624441286756"
        let miembro = message.mentions.members.first()
        if (!miembro) return message.channel.send("¡No has mencionado a un usuario!")
        if (miembro === message.member) return message.channel.send("¡No puede mutearte a ti mismo!")
        if (miembro === message.guild.me) return message.channel.send("No puede mutearme a mi!")
        if (miembro.roles.highest.position >= message.member.roles.highest.position) return message.channel.send("No puede mutear a una persona con igual y/o mayor rango que tu.")
        if (!args[1]) return message.channel.send('Porfavor ingresa un tiempo para mutear.')

        let time = ms(args[1])
        if (!time || time > 1209600000) return message.channel.send('Porfavor ingresa un tiempo menor a 14 dias! (1s/m/h/d)')
        let reason = args.slice(2).join(' ');
        if (!reason) reason = '`No reason provided.`'
        if (reason.length > 1024) reason = reason.slice(0, 1021) + '...'

        if (miembro.roles.cache.has(muteRole)) return message.channel.send('El usuario ya está muteado!')

        // Mutea al usuario
        let fecha = Date.now()
        let total = fecha + time


        if (mutedb.tiene(miembro.id)) {
            try {
                await mutedb.eliminar(miembro.id)
                await miembro.roles.add(muteRole)
                await mutedb.establecer(miembro.id, { tiempo: total })
            } catch (err) {
                message.channel.send(err.stack)
                return console.error(err)
            }
        }

        if (!mutedb.tiene(miembro.id)) {
            try {
                await miembro.roles.add(muteRole)
                await mutedb.establecer(`${miembro.id}.tiempo`, total)
            } catch (err) {
                return message.channel.send(err.stack);
            }
        }

        const muteEmbed = new MessageEmbed()
            .setTitle('FreshLife Moderación')
            .setDescription(`El usuario ${miembro} ha sido muteado por **${ms(time, { long: true })}**.`)
            .addField('Moderador', message.member, true)
            .addField('Miembro', miembro, true)
            .addField('Tiempo', `\`${ms(time)}\``, true)
            .addField('Razón', reason)
            .setFooter(message.member.displayName, message.author.displayAvatarURL({
                dynamic: true
            }))
            .setTimestamp()
            .setColor("GREEN");
        message.channel.send(muteEmbed);

        // // UnMute

        // miembro.timeout = message.client.setTimeout(async () => {
        //     try {
        //         await miembro.roles.remove(muteRole);
        //         const unmuteEmbed = new MessageEmbed()
        //             .setTitle('FreshLife Moderación')
        //             .setDescription(`${miembro} ha sido desmuteado.`)
        //             .setTimestamp()
        //             .setColor(message.guild.me.displayHexColor);
        //         message.channel.send(unmuteEmbed);
        //     } catch (err) {
        //         console.log(err.stack)
        //     }
        // }, time)

    }
}