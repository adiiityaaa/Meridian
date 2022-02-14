module.exports.run = async(client, channel) => {
if(channel.type === "GUILD_TEXT" && client.db.has(`isystemcheck_${channel.guild.id}`)) {    
if(channel.id === client.db.get(`isystemchx_${channel.guild.id}`)) {
await client.db.delete(`isystemcheck_${channel.guild.id}`)
await client.db.delete(`isystemchx_${channel.guild.id}`)
await client.db.delete(`isystemqembed_${channel.guild.id}`)
await client.db.delete(`isystempembed_${channel.guild.id}`)     
}}}