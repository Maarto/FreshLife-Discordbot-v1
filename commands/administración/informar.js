let discord = require('discord.js');
const ms = require('ms');

module.exports = {
    nombre: 'informar',
    alias: [],
    descripcion: "Envia un mensaje al dm del usuario al que gustas informar",
    run: async (client, message, args) => {

        let informante = message.member;
        let informado = message.mentions.members.first() || message.guild.roles.resolve(args[0])
        if (!informado) return message.channel.send('🔴 ¡Algo ha fallado, recuerda colocar \`.informar ID/@usuario <Mensaje>\`');

        let filter = (m) => m.author.id === message.author.id;
        let collector = new discord.MessageCollector(message.channel, filter, {max: 2, time:60000, errors: ['time']})

        collector.on('collect', async(message, col) => {

            message.channel.send(`¿Cual es la razón del informe? (Razón breve)`)
            console.log(`Mensajes recolectados: ${message.content}`)
        })
        
        collector.on('end', async(collected) => {
            message.channel.send(``)
        })

        // let filter = (m) => m.author.id === message.author.id

        // message.channel.send('¿Cual es la Razón del informe? (Comentario breve)')
        // message.channel.awaitMessages(filter, {max: 2, time: 60000, errors: ['time']}).then( async(collected) => {
        //     let razón = collected.first()
        //     let informacion = collected.second()
        // }).then(async(m) => {
        //     console.log(m)

        //     // let InformaciónEnviado = new discord.MessageEmbed()
        //     // .setDescription(`**__Buenos días ${informado}!__ >> __este mensaje es enviado desde el servidor de FreshLifeRP para informarte por__ \`${razón}\`**\n\n\`\`\`${informe}\`\`\``)
        //     // .setColor("GREEN")
        //     // .setFooter(`Remitente: ${informante.user.username}`, informante.user.displayAvatarURL({dinamyc: true}))
        //     // informado.send(InformaciónEnviado).catch((err) => console.log(err))
        // })

        // // message.channel.awaitMessages(filter, { max: 1, time: 5000, errors: ['time']}).then((m) => {

        // //     let msg = m.first()

        // //     message.channel.send(`He escuchado ${m.size} mensajes > ${msg}`)
        // //     console.log(msg.content)
        // // }).catch((err) => console.log(err))
    }
}