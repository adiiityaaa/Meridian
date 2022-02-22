module.exports.run = async(client, oS, nS) => {
if(nS.member.user.bot) { return; }
if(!nS.member.guild) { return; }
if(!oS.channelId && nS.channelId) {
if(client.db.has(`invcroles_${nS.guild.id}`)) {
const data = client.db.get(`invcroles_${nS.guild.id}`)    
for(const invcRole of data) {
if(!nS.guild.roles.cache.get(invcRole)) {
  client.db.delete(`invcroles_${nS.guild.id}`);
  continue;
}
  nS.member.roles.add(invcRole).catch(e => { return; })
}    
}} else if(oS.channelId && !nS.channelId) {
if(client.db.has(`invcroles_${nS.guild.id}`)) {
const data = client.db.get(`invcroles_${nS.guild.id}`)    
for(const invcRole of data) {
if(!nS.guild.roles.cache.get(invcRole)) {
  client.db.delete(`invcroles_${nS.guild.id}`);
  continue;
}
  nS.member.roles.remove(invcRole).catch(e => { return; })
}        
}}}