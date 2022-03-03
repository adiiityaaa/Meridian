module.exports.run = async(client, channel) => {
if(channel.type === "GUILD_TEXT" && channel.id === client.db.get(`chatbot_${channel.guild.id}`)) {
await client.db.delete(`chatbot_${channel.guild.id}`)
}}