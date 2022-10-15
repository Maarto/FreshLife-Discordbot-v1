let discord = require('discord.js')
let db = require('../../models/suggest')

module.exports = {
    nombre: 'aceptarsuggest',
    alias: ["acceptsugg", "aceptarsugg"],
    descripcion: "Aceptaras la sugerencia",
    run: async(client, message, args) => {
        message.delete()

        let staff = ["738366811451555941", /*Support Team*/]

        if(!staff.some(id => message.member.roles.cache.has(id))){
            return message.channel.send(`${message.member}, No tienes permisos para aceptar y/o rechazar una sugerencia.`)
        }

        let canalsugerencias = client.channels.resolve('870085706041659483')

        let messageFind = args[0];

        let reason = args.slice(1).join(" ")

        if(!messageFind) return message.channel.send(`${message.member} no has colocado la ID del mensaje.`)
        if(isNaN(messageFind)) return message.channel.send(`${message.member} la ID del mensaje tiene que ser un número.`)

        db.findOne({messageID: messageFind}, async(err, data) => {
            if(err) throw err;

            if(!data){
                return message.channel.send(`${message.member}, no se ha encontrado un mensaje para editar en esa ID.`)
            } else {
                
                let embedAceptado = new discord.MessageEmbed()
                .setTitle(`Nueva sugerencia de ${data.username}:`)
                .setDescription(`${data.Suggest}\n\n<:arrowder:932855600067510292> **Estado:**\n<:space:928190445337604107><:Chek:932855599983628348> La sugerencia ha sido aceptada!\n\n<:staffinf:932855599958470727> **Respuesta del Staff (${message.member}):**\n<:space:928190445337604107>${reason}`)
                .setColor('GREEN')
                
                canalsugerencias.messages.fetch(data.messageID).then(m => m.edit(embedAceptado))
                message.channel.send(`Se ha aceptado la sugerencia \`${data.messageID}\``).then(m => m.delete({timeout:5000}))
            }

        })

    }
}