module.exports = {
name: "addrelated_song",
mutualChannel: true,
voiceChannel: true,
djOnly: false,   
run: async(client, interaction) => {
  const noq = client.embeds.noqueue(client);
  const err = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **No Related Song Found.**`)
  const player = client.manager.players.get(interaction.guild.id);
  if(!player) { interaction.reply({ embeds: [noq] }) }
  if(player) {
  if(!player.queue || !player.playing) { return interaction.reply({ embeds: [noq] }) }
  let track = player.queue.current;
 const query = `https://www.youtube.com/watch?v=${track.identifier}&list=RD${track.identifier}`;
 const response = await client.manager.search(query, interaction.user);
 if(!response || response.loadType === 'LOAD_FAILED' || response.loadType !== 'PLAYLIST_LOADED') { return interaction.reply({ embeds: [err] }) }
 else { 
 let track = response.tracks[Math.floor(Math.random() * Math.floor(response.tracks.length))];
 player.queue.add(track)
 const embed = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Related Song added to Queue.**\n${client.emotes.parrow} [${track.title}](${track.uri}) by ${track.author}\n${client.emotes.parrow} Requester: ${track.requester}`)
 await client.modules.editqembed(client, player) 
 await interaction.reply({ embeds: [embed] })
}}}}      