module.exports.run = async(client, oS, nS) => {
if(nS.id !== client.user.id && oS.channelId && !nS.channelId || nS.channelId) {
const player = client.manager.players.get(nS.guild.id);
if(player && oS.channelId == player.voiceChannel) {
let vc = nS.guild.channels.cache.get(player.voiceChannel);
if(!vc) { return player.destroy() }    
if(!vc.members || vc.members.size == 0 || vc.members.filter(mem => !mem.user.bot).size < 1) {    
player.pause(true)
console.log("your mom is")    
const check = await client.modules.hasrequest(client, player)    
if(check === true) { await client.modules.editpembed(client, player) }}}}
if(nS.id !== client.user.id && !oS.channelId && nS.channelId) {
const player = client.manager.players.get(nS.guild.id);
if(player && nS.channelId == player.voiceChannel) {    
let vc = nS.guild.channels.cache.get(player.voiceChannel);
if(!vc) { return player.destroy() }        
if(vc.members && vc.members.size > 0 || vc.members.filter(mem => !mem.user.bot).size < 1) {    
player.pause(false)    
console.log("Gay")    
const check = await client.modules.hasrequest(client, player)    
if(check === true) { await client.modules.editpembed(client, player) }}}}}