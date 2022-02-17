module.exports.run = async(client) => {
client.user.setActivity(`High Definition Music`, { type: "STREAMING", url: "https://twitch.tv/jarvis_3653" })   
client.user.setStatus('dnd')    
const embed = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Established Connection with Client!**`)
client.channels.cache.get(client.settings.clientlog).send({ embeds: [embed] })
await client.manager.init(client.user.id)
await client.modules.updatestats(client)
setTimeout(async function() {
await client.modules.rejoinplayer(client)             
}, 10000)    
setInterval(() => {
    client.modules.updatestats(client);
  }, 900000);
}