module.exports = {
name: "play",
type: 3,            
voiceChannel: true,
mutualChannel: true,
run: async (client, interaction) => {
const error = client.embeds.error(client);
const nosong = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **You can only play songs in Message Content.**`)
const plcheck = client.manager.players.get(interaction.guild.id);
if(!plcheck) {
      const player = interaction.client.manager.create({
      guild: interaction.guild.id,
      voiceChannel: interaction.member.voice.channel.id,
      textChannel: interaction.channel.id,
      selfDeafen: true,
    }) }
const player = client.manager.players.get(interaction.guild.id);    
 const sycheck = client.modules.hasrequest(client, player)
 const query = interaction.targetMessage.content;
 console.log(query)
 if(!query) { return interaction.reply({ embeds: [nosong] }) }
 const noresult = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **No Results found for __${query}__!**`)   
 if(player.state !== "CONNECTED") { player.connect() }
 let res;    
 try {
    res = await client.manager.search(query, interaction.member)
    if (res.loadType === 'LOAD_FAILED') {
      if (!player.queue.current) player.destroy()
      interaction.reply({ embeds: [noresult] })
    }
  } catch (err) {
    console.log(err)
    return interaction.reply({ embeds: [error] })
  }

  switch (res.loadType) {
    case 'NO_MATCHES':
      if (!player.queue.current) player.destroy()
      return interaction.reply({ embeds: [noresult] });

    case 'TRACK_LOADED':
      await player.queue.add(res.tracks[0])
      if (!player.playing && !player.paused && !player.queue.length) player.play()
      const embed2 = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Song added to Queue!**\n${client.emotes.parrow} [${res.tracks[0].title}](${res.tracks[0].uri}) by ${res.tracks[0].author}\n${client.emotes.parrow} Requester: ${res.tracks[0].requester} | Duration: ${client.modules.duration(client, res.tracks[0].duration)}`)
      await interaction.reply({ embeds: [embed2] })      
      if(sycheck === false) { return; }    
       else if(sycheck === true) { await client.modules.editpembed(client, player) 
       await client.modules.editqembed(client, player) }    
      break;

    case 'PLAYLIST_LOADED':
      await player.queue.add(res.tracks)
      if (!player.playing && !player.paused) player.play();
       const embed3 = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Playlist added to Queue!**\n${client.emotes.parrow} ${res.playlist.name} [${res.tracks.length} Songs]\n${client.emotes.parrow} Requester: ${res.tracks[0].requester} | Duration: ${client.modules.duration(client, res.playlist.duration)}`)   
       await interaction.reply({ embeds: [embed3] })  
      if(sycheck === false) { return; }    
       else if(sycheck === true) { await client.modules.editpembed(client, player) 
       await client.modules.editqembed(client, player) }    
      break;

    case 'SEARCH_RESULT':
      await player.queue.add(res.tracks[0])
      if (!player.playing && !player.paused && !player.queue.length) player.play()
      const embed4 = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Song added to Queue!**\n${client.emotes.parrow} [${res.tracks[0].title}](${res.tracks[0].uri}) by ${res.tracks[0].author}\n${client.emotes.parrow} Requester: ${res.tracks[0].requester} | Duration: ${client.modules.duration(client, res.tracks[0].duration)}`)
       await interaction.reply({ embeds: [embed4] }) 
      if(sycheck === false) { return; }    
       else if(sycheck === true) { await client.modules.editpembed(client, player) 
       await client.modules.editqembed(client, player) }     
      break;
  }    
}}