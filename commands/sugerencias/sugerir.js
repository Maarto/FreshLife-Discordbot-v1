let discord = require('discord.js')
let db = require('../../models/suggest')

module.exports = {
    nombre: 'sugerir',
    alias: ["suggest"],
    descripción: "Crea una sugerencia que el Staff podrá aceptar y responder con un mensaje.",
    run: async(client, message, args) => {
        message.delete();

        let userInfo = message.member;
        let suggest = args.join(' ')

        if(!suggest) return message.channel.send('No has colocado la sugerencia.')

        if(suggest.lengt > 2000) return message.channel.send('Ha ocurrido un error, la sugerencia debe ser menor a 2000 carácteres.')

        let embedNeutralSuggestion = new discord.MessageEmbed()
        .setColor("grey")
        .setTitle(`Nueva sugerencia ${userInfo.user.tag}:`)
        .setDescription(`<:space:928190445337604107>${suggest}\n\n<:arrowder:932855600067510292> **Estado:**\n<:space:928190445337604107><:message:932855600000430080> La sugerencia está en espera de una respuesta oficial del equipo de Staff.`)

        let canalsugerencias = client.channels.resolve('870085706041659483')

        canalsugerencias.send(embedNeutralSuggestion).then( async(m) => {
            const infoDB = new db({
                messageID: m.id,
                username: userInfo.user.tag,
                user_id: userInfo.user.id,
                Suggest: suggest,
            })
            
            infoDB.save(function (err){
                if(err) return handleError(err);
                console.log('Se ha guardado con éxito la información.')
            })
        })
    }
}

// Sugerir hecho - Funcional