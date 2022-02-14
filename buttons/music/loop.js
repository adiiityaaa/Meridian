module.exports = {
name: "loop_song",
mutualChannel: true,
voiceChannel: true,
djOnly: true,   
run: async(client, interaction) => {
  const noq = client.embeds.noqueue(client);
  const player = client.manager.players.get(interaction.guild.id);
   if(!player) { return interaction.reply({ embeds: [noq] }) }
   if(player) {
   if(!player.queue || !player.playing) { return interaction.reply({ embeds: [noq] }) }
   let description;
    if (!player.queueRepeat && !player.trackRepeat) {
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
   await client.modules.editpembed(client, player)
   await interaction.reply({ embeds: [success] })
}}}