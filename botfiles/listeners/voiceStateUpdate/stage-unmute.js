const { Permissions } = require("discord.js");

module.exports.run = async(client, oS, nS) => {
if(!oS.channelId && nS.channelId && nS.channel.type === "GUILD_STAGE_VOICE" && nS.guild.me.voice.suppress) {
const player = client.manager.players.get(nS.guild.id);
if(player && nS.channelId === player.voiceChannel) {
if(nS.guild.me.permissions.has(Permissions.FLAGS.SPEAK) || (nS.channel && nS.channel.permissionsFor(nS.guild.me).has(Permissions.FLAGS.SPEAK))) { 
const embed = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Invite the Bot as speaker to continue Music Experience.**`)    
nS.guild.me.voice.setSuppressed(false).catch((e) => { nS.guild.me.voice.setRequestToSpeak(true) });    
}}}}