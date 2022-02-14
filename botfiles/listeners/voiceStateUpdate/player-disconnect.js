module.exports.run = async(client, oS, nS) => {
if(oS.id === client.user.id) {
if(oS.channel && !nS.channel) { 
let player = client.manager.players.get(oS.guild.id);
if(!player) { return; }    
const embed = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Player has been Disconnected.**`)
client.channels.cache.get(player.textChannel).send({ embeds: [embed] })
await player.destroy()    
} else if(oS.channel && nS.channel && oS.channelId !== nS.channelId) {
const player = client.manager.players.get(oS.guild.id);
if(!player) { return; }    
player.setVoiceChannel(nS.channelId)    
if(player.paused) { return; }    
setTimeout(() => {
player.pause(true);
setTimeout(() => player.pause(false), client.ws.ping * 2);
}, client.ws.ping * 2)}}}