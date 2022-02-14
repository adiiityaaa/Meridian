module.exports = {
name: "loop",
description: "Toggle the Loop Mode for the Player!",
category: "Music",
type: 1,
developerOnly: false,
voiceChannel: true,
mutualChannel: true,
djOnly: true,     
clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS"],
run: async(client, interaction) => {
  const noq = client.embeds.noqueue(client);
  const player = client.manager.players.get(interaction.guild.id);
  if(!player) { return interaction.reply({ embeds: [noq] }) }
  if(player) {
   if(!player.queue || !player.playing) { return interaction.reply({ embeds: [noq] }) }
   let description;
   if(!player.queueRepeat && !player.trackRepeat) {
                await player.setQueueRepeat(true)
                description = "Now Looping the Queue.";
            } else if (player.queueRepeat) {
                await player.setQueueRepeat(false)
                await player.setTrackRepeat(true)
                description = "Now Looping the Current Song.";
            } else if (player.trackRepeat) {
                await player.setTrackRepeat(false)
                description = "Loop Mode Disabled.";
            }       
   const success = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **${description}**`)    
   await interaction.reply({ embeds: [success] })
   const ischeck = await client.modules.hasrequest(client, player);
   if(ischeck === true) { await client.modules.editpembed(client, player) }
   else { return; } 
}}}