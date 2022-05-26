
const discord = require('discord.js'); // Define the discord.js module
const client = new discord.Client(); // Create a discord.js client (constructor)
const disbut = require('discord-buttons');
const config = require("../config.json")
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "otworz",

//////////////////////////////////////////////////////////////////////////////////// moduły

    run: async (bot, message, args) => {
        const role = message.guild.roles.cache.get('966354404464795668'); // rola wl checkerów (NIE TRZEBA)
        if(message.channel.id == config.otworz.id_kanalu_dla_komends) { // gdzie mozna otwierac okienko (ustawiane w configu)

        let przycisk = new disbut.MessageButton() // przycisk
        .setStyle('url') // typ przycisku. url = przycisk link
		.setLabel(' 📋 Regulamin') // tytuł przycisku
		.setURL('https://docs.google.com/document/d/1BQTy_6RJGJe6EuwhtYB31cdisH4ab0rKiPwCpKBQI68/edit') // link przekierowyjący
		.setDisabled(false); // wyłączenie przycisku z użytku

        let otwarte = new MessageEmbed()  // embed 
            .setColor("GREEN") // kolor
            .setTitle(`${role} Okienko Otwarte!`) // tytul
            .setDescription(`> Zapraszamy na poczeklanie w celu zdania Whitelist'y.
            > Przed wejściem, zapoznaj się z regulaminem serwera oraz przygotuj [hexa](http://www.vacbanned.com/engine/check).
            
            > <@&966354404464795668> ma **pierwszeństwo** w kolejce`) // opis
            .setTimestamp() // czas
            .setFooter(`Pytający - ${message.author.tag} `, `${message.author.displayAvatarURL()}`) // footer
            message.delete({ timeout: 1000 }); // usuniecie twojej wiadomosci
      
            console.log(`------------------------------------------------------------\n[LOG] ${message.author.tag} otwiera okienko\n------------------------------------------------------------`) // log
      message.channel.send(otwarte, przycisk); // wyslanie wiadomości
}}}