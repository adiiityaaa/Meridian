module.exports.run = async(client, player, track) => {
  const embed = new client.discord.MessageEmbed()
  .setDescription(`${client.emotes.music} | **Now Playing**\n\n${client.emotes.parrow} [${track.title}](${track.uri}) by ${track.author}\n${client.emotes.parrow} Requested by: ${track.requester} | Duration: ${client.modules.duration(client, track.duration)}`)
  .setThumbnail(track.thumbnail)
  .setColor(client.colors.green)
if(client.db.has(`247_${player.guild}`)) {  
const pd = {
 vc: player.voiceChannel,
 tc: player.textChannel
}
client.db.set(`playerdata_${player.guild}`, pd) }
const ischeck = client.modules.hasrequest(client, player);
 if(ischeck === true) { client.modules.editqembed(client, player) 
 client.modules.editpembed(client, player) }  
const rccheck = await client.modules.isrequestchannel(client, player);
 if(rccheck === false) { client.channels.cache.get(player.textChannel).send({ embeds: [embed] }) }
const aucheck = client.db.get(`autoplay_${player.guild}`);
 if(aucheck === true) {
 const data = { identity: track.identifier }
 setTimeout(() => {      
  client.db.set(`autoplaydata_${player.guild}`, data)     
}, 3000)
}}  