module.exports.run = async(client, message) => {
if(message.author.bot || !message.guild) { return; }
if(client.db.has(`afk_${message.author.id}_${message.guild.id}`)) {
await client.db.delete(`afk_${message.author.id}_${message.guild.id}`)
await client.db.delete(`afktime_${message.author.id}_${message.guild.id}`)    
return message.channel.send(`Welcome back <@${message.author.id}>, you are no longer AFK!`)    
} else if(message.mentions.members.size > 0) {
message.mentions.members.forEach(user => {    
if(client.db.has(`afk_${user.id}_${message.guild.id}`)) {
const reason = client.db.fetch(`afk_${user.id}_${message.guild.id}`);
const rawtime = client.db.fetch(`afktime_${user.id}_${message.guild.id}`);
const time = Math.floor(rawtime / 1000).toFixed(0);
return message.channel.send(`${user.user.username} is currently AFK: ${reason} - <t:${time}:R>`)    
}})}}