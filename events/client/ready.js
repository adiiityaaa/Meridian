module.exports.run = async(client) => { 
const embed = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Established Connection with Client!**`)
client.channels.cache.get(client.settings.clientlog).send({ embeds: [embed] })
await client.manager.init(client.user.id)
let i = 0
 setInterval(() => {
 const textArray = [
   `Application Commands are here!`,
   `High Quality Music`,
   `Tracks from Request Channel`     
  ]
 const activityArray = [
   "STREAMING",
   "STREAMING",
   "STREAMING"
  ]
client.user.setActivity(textArray[i], { type: activityArray[i], url: "https://twitch.tv/jarvis_3653" })
client.user.setStatus('dnd')         
i++ 
if(i == 3) i = 0
}, 900000)    
await client.modules.updatestats(client)
setTimeout(async function() {
await client.modules.rejoinplayer(client)             
}, 10000)    
setInterval(() => {
    client.modules.updatestats(client);
  }, 900000);
}