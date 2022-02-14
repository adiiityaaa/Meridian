module.exports.run = async(client, player, track, payload) => {
let description;
if(player.queue.size === 0) { description = `${client.emotes.cross} | **An error occured while playing the Song!**` }
else { description = `${client.emotes.cross} | **An error occured while playing the Song!**\n${client.emotes.rarrow} Skipping to next song!` }    
const embed = client.modules.embed(client, client.colors.red, description)    
player.stop()
client.channels.cache.get(player.textChannel).send({ embeds: [embed] })  
console.log(payload)    
}