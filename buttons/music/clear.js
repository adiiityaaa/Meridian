module.exports = {
    name: "clear_song",
    mutualChannel: true,
    voiceChannel: true,
    djOnly: true,   
    run: async(client, interaction) => {
      const noq = client.embeds.noqueue(client);
      const success = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Player queue has been cleared.**`)
      const last = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Last song in the queue.**`)  
      const player = client.manager.players.get(interaction.guild.id);
      if(!player) { interaction.reply({ embeds: [noq] }) }
      if(player) {
      if(!player.queue || !player.playing) { return interaction.reply({ embeds: [noq] }) }
      if(player.queue.size === 0) { return interaction.reply({ embeds: [last] }) }
      await player.queue.clear()
      await interaction.reply({ embeds: [success] }) 
      await client.modules.editqembed(client, player)   
    }}}    