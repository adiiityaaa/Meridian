module.exports.run = async(client, player) => {
player.setVolume(100)
const vc = client.channels.cache.get(player.voiceChannel);
const tc = client.channels.cache.get(player.textChannel);
const embed = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Player Created!**\n\n${client.emotes.garrow} Bound to: ${tc}\n${client.emotes.garrow} Voice Channel: ${vc}`)
const check = await client.modules.isrequest(client, player.textChannel, player.guild);
if(check === false) { await tc.send({ embeds: [embed] }) }
else if(check === true) { return; }}