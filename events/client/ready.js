module.exports.run = async(client) => {
client.user.setActivity(`Music with ${client.users.cache.size} Users`, { type: "LISTENING" })   
client.user.setStatus('dnd')    
const embed = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Established Connection with Client!**`)
client.channels.cache.get(client.settings.clientlog).send({ embeds: [embed] })
await client.manager.init(client.user.id)
await client.modules.updatestats(client)
  setInterval(() => {
    client.modules.updatestats(client);
  }, 900000);
}