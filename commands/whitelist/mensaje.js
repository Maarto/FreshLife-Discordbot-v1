const { MessageEmbed } = require('discord.js')

module.exports = {
    nombre: 'test',
    alias: [],
    descripcion: "Envia un mensaje de prueba",
    run: async(client, message, args) => {
        
        let usuario = message.mentions.members.first()
        let fallos = parseInt(args[1])

        let aprobado = new MessageEmbed()
        .setTitle("__Resultado Entrevista__")
        .setDescription(`\n__**¡Felicidades**__ ${usuario}, **__has aprobado el examen de WhiteList con__ \`${fallos}\` __errores!__**\n\n\n\`Ya tenes un paso adentro para ingresar a cualquier facción y/o Mafia, ¡la Administración de FreshLife te desea mucha suerte en tu recorrido!\``)
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setThumbnail(`${usuario.user.displayAvatarURL({dynamic: true})}`)
        .addField("\u200B", "\u200B")
        .addField(`👦 **__Usuario__**:`, `${usuario}`, true)
        .addField(`📚 **__Entrevistador__**:`, `${message.author}`, true)
        .setColor("GREEN")
        .setFooter(`Entrevistador: ${message.member.user.id} - Usuario: ${usuario.id} `, "https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
       

        // let embed = new MessageEmbed()
        
        // .setDescription(`**${usuario} __has desaprobado el examen con__ \`${fallos} \` __errores.__** 😥\n\n\`No te desanimes, puedes volver a intentarlo nuevamente en 24 horas, ¡no olvides repasar la normativa antes de entrar a rendir!\``)
        // .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        // .setColor("RED")
        // .setThumbnail(usuario.user.displayAvatarURL({dynamic: true}))
        // .addField("\u200B", "\u200B")
        // .addField(`👦 **__Usuario__**:`, `${usuario}`, true)
        // .addField(`📚 **__Entrevistador__**:`, `${message.author}`, true)

        let embedTerminos = new MessageEmbed()
        .setColor("GREEN")
        .setThumbnail("https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png?")
        .setAuthor(usuario.user.username, usuario.user.displayAvatarURL({dinamyc: true}))
        .setDescription(`
            💵 **__Terminos y condiciones de donación__** 💵\n

            \`⋗ 1 .\` El dinero una vez enviado **__NO__** se puede reembolsar.\n
            \`⋗ 2 .\` Una vez entregado el producto **__NO__** se puede cambiar por otro producto.\n
            \`⋗ 3 .\` FreshLifeRP **__NO__** se hace responsable por cualquier tipo de pérdida del producto.\n
            \`⋗ 4 .\` FreshLifeRP entiende que al aceptar los términos tu has leido, comprendes y eres responsable de la donación que efectuas.\n
            ~~▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼~~\n
            *__NOTA__ :* *Los vehiculos **VIP** requieren un nivel IC especifico en cada vehiculo para poder sacarlos del garaje.*
            \n~~▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲~~
            \`\`\`Donar es un acto VOLUNTARIO que se hace a la comunidad para poder pagar el servidor y demás estructura necesaria para su correcto funcionamiento\`\`\`
        `)
        // .addField("\u200B", "\u200B")
        .setFooter(`Tienda FreshLifeRP`, "https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")

        message.channel.send(embedTerminos)

    }
}