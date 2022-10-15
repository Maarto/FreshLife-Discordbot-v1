let discord = require('discord.js')
let disbut = require('discord-buttons');

module.exports = {
    nombre: 'normativas',
    alias: [],
    descripcion: "test",
    run: async(client, message, args) => {
        let messageEmbed = new discord.MessageEmbed()
        .setDescription('**`¿Eres nuevo en el servidor?`** \n\n ```Recuerda leerte las normativas del servidor para rendir la WhiteList, evitar sanciones y poder entrar a las facciones!.```\n\n```diff\n- HAS CLICK EN LOS BOTONES PARA INGRESAR A LA NORMATIVA -\n```')
        .setColor('#FC523E')
        .setTitle('🍫 Normativas FreshLifeRP 🍫')
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setFooter("Normativas FreshLife", "https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setThumbnail('https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png')

        let messageEmbed2 = new discord.MessageEmbed()
        .setColor('#FC523E')
        .setTitle('🍫 Normativas FreshLifeRP 🍫')
        let gen = new disbut.MessageButton()
        .setLabel('General')
        .setStyle("url")
//        .setID('gen')
        .setURL('https://docs.google.com/document/d/11to5lM-tpSZsg8Sx6xBRKsKaU38QO2Fh1auZmj6yYrU/edit')
        let mafia = new disbut.MessageButton()
        .setLabel('Mafia')
        .setStyle("url")
//        .setID('maf')
        .setURL('https://docs.google.com/document/d/16BEQlUWonuDB1RExao8ZvyOoPeqEJSGBpHV2iCyV-E8/edit?usp=sharing')
        let lspd = new disbut.MessageButton()
        .setLabel('LSPD')
        .setStyle("url")
//        .setID('lspd')
        .setURL('https://docs.google.com/document/d/1J5JRUae6diCQZ6gmbUO392sXLP5Y98nPTaDd7FVNQfg/edit?usp=sharing')
        let taxista = new disbut.MessageButton()
        .setLabel('Taxista')
        .setStyle("url")
        .setURL('https://docs.google.com/document/d/1pWFIgHWsk7s-g67bIOX8KJsMYkjxxYvvWI9zDarMYLE/edit?usp=sharing')
        let armero = new disbut.MessageButton()
        .setLabel('Armero')
        .setStyle("url")
        .setURL('https://docs.google.com/document/d/1pWFIgHWsk7s-g67bIOX8KJsMYkjxxYvvWI9zDarMYLE/edit?usp=sharing')
        let ems = new disbut.MessageButton()
        .setLabel('EMS')
        .setStyle("url")
        .setURL('https://docs.google.com/document/d/1_H19v1ND4xM616YAXque0feGvt_dBHaESBdXrWaYPjg/edit?usp=sharing')
        let Vuelo = new disbut.MessageButton()
        .setLabel('Vuelo')
        .setStyle("url")
        .setURL('https://docs.google.com/document/d/1AgrrGAzEjTxbumaWAQmEZ3Grws0gj_JOxq78fIY8Xfw/edit?usp=sharing')
        let dea = new disbut.MessageButton()
        .setLabel('DEA')
        .setStyle("url")
        .setURL('https://docs.google.com/document/d/1GA5laL3bjrZpUUz8G4Q2PbHdDevKtml-kMhsoBUtDo8/edit?usp=sharing')

        let row = new disbut.MessageActionRow()
        .addComponent(gen)
        .addComponent(mafia)
        .addComponent(lspd)
        .addComponent(taxista)
        .addComponent(armero)

        let row2 = new disbut.MessageActionRow()
        .addComponent(ems)
        .addComponent(Vuelo)
        .addComponent(dea)

        message.delete();
        message.channel.send(messageEmbed, row)
        message.channel.send(messageEmbed2, row2)
    }
}