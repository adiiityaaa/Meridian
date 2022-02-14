module.exports.run = async(client, channel) => {
if(channel.type === "GUILD_TEXT" && channel.id === client.db.get(`voicelogs_${channel.guild.id}`)) {
await client.db.delete(`voicelogs_${channel.guild.id}`) }}