const config = require("../config.json")
const { MessageEmbed } = require("discord.js");
require('discord-reply'); //
module.exports = {
    name: "losuj",

//////////////////////////////////////////////////////////////////////////////////// moduły

    run: async (bot, message, args) => {
        require("./eoeooddychacniemoge.js"); // moduł odpowiadający za odpowiadanie w linii wiadmosci przez bota

        if(message.channel.id == config.losuj.id_kanalu_dla_komend) { // kanał na którym można używac tej komendy
        const channel = message.guild.channels.cache.get(config.losuj.id_poczekalni); // z jakiego kanału bot ma losować ludzi (mozliwosc zmainy w configu)
        if(channel.members.random() != null) { // losowanie
            let wylosowano = new MessageEmbed() // embed  
            .setColor("GREEN") // kolor
                .setDescription(`> Wylosowałeś <@` + channel.members.random() + `>`) // opis
                message.lineReplyNoMention(wylosowano); // wyslanie wiadomosci
        } else { // jesli
            let niktnieczeka = new MessageEmbed() // embed
                .setDescription(`> Nikt nie czeka`) // tytul
                .setColor("RED") // kolor
                message.lineReplyNoMention(niktnieczeka)  // wyslanie wiadmosci

                console.log(`------------------------------------------------------------\n[LOG] ${message.author.tag} losuje uzytkownika\n------------------------------------------------------------`) // log
        }
        }
    }
}