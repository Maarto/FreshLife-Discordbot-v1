const discord = require('discord.js')
let config = require('../../configuracion/settings.json')
let PlayerCount = require('../../server/players')

module.exports = {
    nombre: 'status',
    alias: ["estado"],
    desc: "Enseña el estado del servidor",
    run: async(client, message, args) => {

        PlayerCount.getPlayerCount().then((result) => {
            if(result.status === 200){
                const onlineEmbed = new discord.MessageEmbed()
                .setColor('#03fc41')
                .setTitle(config.SERVER_NAME)
                .setDescription(`**IP:** \`connect cfx.re/join/ykdqom\``)
                .setThumbnail(config.SERVER_LOGO)
                .addFields(
                    { name: 'Usuarios conectados', value: result.data.length + '/600', inline: true  },
                    { name: 'Estado', value: '✅ ONLINE', inline: true },
                   
                )
                .setTimestamp(new Date())
                .setFooter('Enviado por: '+message.author.tag, `${config.SERVER_LOGO}`);
                message.delete()
                message.channel.send(onlineEmbed).then(async(m) => m.delete({timeout: 5000}));
            }
        }).catch (function(){
            const offlineEmbed = new discord.MessageEmbed()
            .setColor('#fc0303')
            .setTitle(config.SERVER_NAME)
            .setDescription('IP: `Desconectado`')
            .setThumbnail(config.SERVER_LOGO)
            .addFields(
              { name: 'Usuarios conectados', value: 'NONE', inline: true  },
              { name: 'Estado', value: '❌ OFFLINE', inline: true },
             
          )
            .setTimestamp(new Date())
            .setFooter('Enviado por: '+message.author.tag, `${config.SERVER_LOGO}`);
            message.delete()
            message.channel.send(offlineEmbed).then(async(m) => m.delete({timeout: 5000}));
        })

    }    
}