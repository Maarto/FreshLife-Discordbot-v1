const discord = require('discord.js')
const ms = require('ms')
module.exports = {
    nombre: 'iniciar',
    alias: [],
    desc: "Inicia un sorteo",
    run: async (client, message, args) => {

        if (!message.member.hasPermission('ADMINISTRATOR') && !message.member.roles.cache.some((r) => r.name === "Giveaways")) {
            return message.channel.send(':x: No tienes permisos para hacer sorteos.');
        }

        let giveawayChannel = message.mentions.channels.first();
        if (!giveawayChannel) {
            return message.channel.send(':x: Tienes que mencionar un canal vรกlido!');
        }

        let giveawayDuration = args[1];
        if (!giveawayDuration || isNaN(ms(giveawayDuration))) {
            return message.channel.send(':x: Tenes que especificar una duraciรณn vรกlida!');
        }

        let giveawayNumberWinners = args[2];
        if (isNaN(giveawayNumberWinners) || (parseInt(giveawayNumberWinners) <= 0)) {
            return message.channel.send(':x: Debes especificar la cantidad de ganadores!');
        }

        let giveawayPrize = args.slice(3).join(' ');
        if (!giveawayPrize) {
            return message.channel.send(':x: Tienes que colocar un premio!');
        }

        client.giveawaysManager.start(giveawayChannel, {
            time: ms(giveawayDuration),
            prize: giveawayPrize,
            winnerCount: parseInt(giveawayNumberWinners),
            hostedBy: client.config.hostedBy ? message.author : null,
            messages: {
                giveaway: (client.config.everyoneMention ? "@everyone\n\n" : "") + "๐๐ **SORTEO** ๐๐",
                giveawayEnded: (client.config.everyoneMention ? "@everyone\n\n" : "") + "๐๐ **SORTEO TERMINADO** ๐๐",
                timeRemaining: "Tiempo restante: **{duration}**!",
                inviteToParticipate: "Reacciona con ๐ para participar!",
                winMessage: "Felicidades, {winners}! Ganaste **{prize}**!",
                embedFooter: "Giveaways",
                noWinner: "Sorteo cancelado, no hay participantes vรกlidos.",
                hostedBy: "Creado por: {user}",
                winners: "Ganador(es)",
                endedAt: "Terminado",
                units: {
                    seconds: "Segundos",
                    minutes: "Minutos",
                    hours: "Horas",
                    days: "Dรญas",
                    pluralS: false // Not needed, because units end with a S so it will automatically removed if the unit value is lower than 2
                }
            }
        });

        message.channel.send(`Giveaway started in ${giveawayChannel}!`)
    }
}