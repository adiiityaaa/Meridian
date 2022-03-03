module.exports.run = async(client, channel) => {
if(channel.type === "GUILD_TEXT" && channel.id === client.db.get(`cmdlogs_${channel.guild.id}`)) {
await client.db.delete(`cmdlogs_${channel.guild.id}`) 
}}