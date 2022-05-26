
const discord = require('discord.js'); // Define the discord.js module
const client = new discord.Client(); // Create a discord.js client (constructor)
const disbut = require('discord-buttons');
const config = require("../config.json")
const { MessageEmbed } = require("discord.js")


module.exports = {
    name: "zamknij",

//////////////////////////////////////////////////////////////////////////////////// moduły

    run: async (bot, message, args) => {

        if(message.channel.id == config.zamknij.id_kanalu_dla_komendy) { // id kanału dla komend (brane z configu)
        let zamkniete = new MessageEmbed()   
            .setColor("RED")
            .setTitle(`Okienko Zamknięte!`)
            .setDescription(`> <@${message.author.id}> Zamyka okienko`)
            .setTimestamp()
            .setFooter(`Pytający - ${message.author.tag} `, `${message.author.displayAvatarURL()}`)
            message.delete({ timeout: 1000 }); // usuwa twoją wiadomość
      
            console.log(`------------------------------------------------------------\n[LOG] ${message.author.tag} zamyka okienko\n------------------------------------------------------------`) // log
      message.channel.send(zamkniete);
}}}