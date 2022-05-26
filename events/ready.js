module.exports = {
    name: "ready",
     /* event run */
    async run(client) {
        console.log(`------------------------------------------------------------\n[LOGI] zalogowano poprawnie jako ${client.user.tag}\n------------------------------------------------------------`) // logi w cmd
        client.user.setPresence({
            activity: {
                name: `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} użytkowników`, // aktywność bota
                type: "WATCHING" // typ aktywności
            },
            status: "idle" // status bota
        })
    }
}