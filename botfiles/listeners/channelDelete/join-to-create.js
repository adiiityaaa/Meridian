module.exports.run = async(client, channel) => {
    if(channel.type === "GUILD_VOICE" && channel.id === client.db.get(`tempvc_${channel.guild.id}`)) {
    await client.db.delete(`tempvc_${channel.guild.id}`)
}}