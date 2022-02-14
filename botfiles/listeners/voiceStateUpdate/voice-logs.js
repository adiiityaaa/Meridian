module.exports.run = async(client, oS, nS) => {
const check = client.db.get(`voicelogs_${nS.guild.id}`);    
if(check) {
if(!oS.channelId && nS.channelId) {
const embed = client.modules.embed(client, client.colors.green, `${client.emotes.info} | **Member Joined Voice Channel!**\n\n${client.emotes.garrow} Member: <@${nS.id}>\n${client.emotes.garrow} Channel: <#${nS.channelId}>`)
client.channels.cache.get(check).send({ embeds: [embed] })
}
if(oS.channelId && !nS.channelId) {    
const embed = client.modules.embed(client, client.colors.red, `${client.emotes.info} | **Member Left Voice Channel!**\n\n${client.emotes.rarrow} Member: <@${nS.id}>\n${client.emotes.rarrow} Channel: <#${oS.channelId}>`)    
client.channels.cache.get(check).send({ embeds: [embed] })    
}
if(oS.channelId && nS.channelId && oS.channelId !== nS.channelId) {
const embed = client.modules.embed(client, client.colors.yellow, `${client.emotes.info} | **Member switched Voice Channel!**\n\n${client.emotes.garrow} Member: <@${nS.id}>\n${client.emotes.rarrow} Old Channel: <#${oS.channelId}>\n${client.emotes.garrow} New Channel: <#${nS.channelId}>`)
client.channels.cache.get(check).send({ embeds: [embed] })
}    
if(!oS.selfVideo && nS.selfVideo) {
const embed = client.modules.embed(client, client.colors.green, `${client.emotes.info} | **Member turned on Video!**\n\n${client.emotes.garrow} Member: <@${nS.id}>\n${client.emotes.garrow} Channel: <#${nS.channelId}>`)
client.channels.cache.get(check).send({ embeds: [embed] })    
}
if(oS.selfVideo && !nS.selfVideo) {
const embed = client.modules.embed(client, client.colors.red, `${client.emotes.info} | **Member turned off Video!**\n\n${client.emotes.rarrow} Member: <@${nS.id}>\n${client.emotes.rarrow} Channel: <#${nS.channelId}>`) 
client.channels.cache.get(check).send({ embeds: [embed] })    
}    
if(!oS.mute && nS.mute) {
const embed = client.modules.embed(client, client.colors.red, `${client.emotes.info} | **Member has been Muted!**\n\n${client.emotes.rarrow} Member: <@${nS.id}>\n${client.emotes.rarrow} Channel: <#${nS.channelId}>\n${client.emotes.rarrow} Mute type: ${nS.mute}`) 
client.channels.cache.get(check).send({ embeds: [embed] })    
}   
if(oS.mute && !nS.mute) {
const embed = client.modules.embed(client, client.colors.green, `${client.emotes.info} | **Member has been Unmuted!**\n\n${client.emotes.garrow} Member: <@${nS.id}>\n${client.emotes.garrow} Channel: <#${nS.channelId}>\n${client.emotes.garrow} Mute type: ${oS.mute}`) 
client.channels.cache.get(check).send({ embeds: [embed] })  
}  
if(oS.streaming && !nS.streaming) {
const embed = client.modules.embed(client, client.colors.red, `${client.emotes.info} | **Member stopped Streaming!**\n\n${client.emotes.rarrow} Member: <@${nS.id}>\n${client.emotes.rarrow} Channel: <#${nS.channelId}>`) 
client.channels.cache.get(check).send({ embeds: [embed] })       
}  
if(!oS.streaming && nS.streaming) {
const embed = client.modules.embed(client, client.colors.green, `${client.emotes.info} | **Member started Streaming!**\n\n${client.emotes.garrow} Member: <@${nS.id}>\n${client.emotes.garrow} Channel: <#${nS.channelId}>`) 
client.channels.cache.get(check).send({ embeds: [embed] })       
}      
if(!oS.deaf && nS.deaf) {
const embed = client.modules.embed(client, client.colors.red, `${client.emotes.info} | **Member has been Deafened!**\n\n${client.emotes.rarrow} Member: <@${nS.id}>\n${client.emotes.rarrow} Channel: <#${nS.channelId}>\n${client.emotes.rarrow} Deafen type: ${oS.deaf}`) 
client.channels.cache.get(check).send({ embeds: [embed] })   
}   
if(oS.deaf && !nS.deaf) {
const embed = client.modules.embed(client, client.colors.green, `${client.emotes.info} | **Member has been Undeafened!**\n\n${client.emotes.garrow} Member: <@${nS.id}>\n${client.emotes.garrow} Channel: <#${nS.channelId}>\n${client.emotes.garrow} Deafen type: ${oS.deaf}`) 
client.channels.cache.get(check).send({ embeds: [embed] })   
}}}