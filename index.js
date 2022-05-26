const { Client, Collection } = require('discord.js');
const { MessageEmbed } = require("discord.js");
const disbut = require('discord-buttons');
const fs = require('fs');
const { MessageButton, MessageActionRow } = require('discord-buttons'); 
const client = new Client();
client.__command = new Collection();
client.__event = new Collection();
disbut(client);
//////////////////////////////////////////////////////////////////////////////////// moduły

fs.readdir('./commands/', async (err, files) => {
    if (err) throw new Error(err);
    files.forEach(async (file) => {
        var command = require(`./commands/${file}`);
        client.__command.set(command.name, command);
    });
});

fs.readdir('./events/', async (err, files) => {
    if (err) throw new Error(err);
    files.forEach(async (file) => {
        var event = require(`./events/${file}`);
        client.__event.set(event.name, event);
    });
});
//////////////////////////////////////////////////////////////////////////////////// nie ruszaj

//////////////////////////////////////////////////////////////////////////////////// weryfikacja
client.on("message", (message) => {
    if (message.content !== "%setup") return; // komenda która odpala weryfikacje
    message.delete({ timeout: 1000 }); // usuwa twoją wiadomość
      const embed = new MessageEmbed()
      .setDescription("> Naciśnij poniższy przycisk, aby się zweryfikować") // tekst embedu
      .setColor("GREEN")
      
      let weryfikacja = new MessageButton()
       .setLabel("Zweryfikuj się!") // tytuł przycisku
       .setStyle("green")
       .setID("weryfikacja")
    
    
      message.channel.send({
        button: weryfikacja,
        embed: embed 
      });
    })
    client.on('clickButton', async (button) => {
        if (button.id !== "weryfikacja") return;
        button.reply.send('Zweryfikowano.', true) // wiadomość po kliknięciu
        const role = button.guild.roles.cache.get("937772967767711804") // id roli po kliknięciu
        const member = button.clicker.member
        await member.roles.add(role)
    })

//////////////////////////////////////////////////////////////////////////////////// nie ruszaj  

client.on('ready', async () => client.__event.get('ready').run(client));
client.on('message', async (message) => client.__event.get('message').run(client, message));

client.login('TWOJTOKEN'); // wklej tu swój token