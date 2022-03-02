module.exports.run = async(client, oS, nS) => {
if(!oS.channel && nS.channel) {
if(client.db.has(`voiceban_${nS.member.id}_${nS.guild.id}`)) { nS.member.voice.disconnect() }
const embed = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **<@${nS.member.id}> tried to join voice channel.**`)
if(client.db.has(`voicelogs_${nS.guild.id}`)) { client.channels.cache.get(client.db.get(`voicelogs_${nS.guild.id}`)).send({ embeds: [embed] }) }
}}    