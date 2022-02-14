module.exports.run = async(client, channel) => {
if(channel.type === "GUILD_TEXT") {
const player = client.manager.players.get(channel.guild.id);
if(player && player.textChannel === channel.id) {        
await player.destroy() }}}