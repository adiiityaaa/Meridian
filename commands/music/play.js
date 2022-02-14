module.exports = {
name: "play",
description: "Play a Song in your Voice Channel!",
category: "Music",
type: 1,
developerOnly: false,
voiceChannel: true,
mutualChannel: true,
djOnly: false,    
clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS", "CONNECT", "SPEAK"],
authorPerms: [""],    
options: [
    {
      name: "song",
      type: "STRING",
      description: "Name/URL of the song.",
      required: true,
    },
  ],    
run: async(client, interaction) => {  
  const err = client.embeds.error(client);
  const plcheck = client.manager.players.get(interaction.guild.id);
  if(!plcheck) {
      const player = interaction.client.manager.create({
      guild: interaction.guild.id,
      voiceChannel: interaction.member.voice.channel.id,
      textChannel: interaction.channel.id,
      selfDeafen: true,
    }) }
 const player = client.manager.players.get(interaction.guild.id);
 const ischeck = await client.modules.hasrequest(client, player);    
 const query = interaction.options.getString("song")
 const noresult = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **No Results found for __${query}__!**`)
 if(player.state !== "CONNECTED") player.connect()
 let res;
 try {
    res = await client.manager.search(query, interaction.user)
    if (res.loadType === 'LOAD_FAILED') {
      if (!player.queue.current) player.destroy()
      await interaction.reply({ embeds: [err] })
    }
  } catch (err) {
    await interaction.reply({ embeds: [noresult] })
  }

  switch (res.loadType) {
    case 'NO_MATCHES':
      if (!player.queue.current) player.destroy()
      await interaction.reply({ embeds: [noresult] });

    case 'TRACK_LOADED':
      await player.queue.add(res.tracks[0])
      if (!player.playing && !player.paused && !player.queue.length) player.play()
      const embed2 = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Song added to Queue!**\n${client.emotes.parrow} [${res.tracks[0].title}](${res.tracks[0].uri}) by ${res.tracks[0].author}\n${client.emotes.parrow} Requester: ${res.tracks[0].requester} | Duration: ${client.modules.duration(client, res.tracks[0].duration)}`)
       await interaction.reply({ embeds: [embed2] })
       if(ischeck === true) { await client.modules.editqembed(client, player) }
      return;

    case 'PLAYLIST_LOADED':
      await player.queue.add(res.tracks)
      if (!player.playing && !player.paused) player.play();
            const embed3 = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Playlist added to Queue!**\n${client.emotes.parrow} ${res.playlist.name} [${res.tracks.length} Songs]\n${client.emotes.parrow} Requester: ${res.tracks[0].requester} | Duration: ${client.modules.duration(client, res.playlist.duration)}`)
       await interaction.reply({ embeds: [embed3] })
       if(ischeck === true) { await client.modules.editqembed(client, player) }
      return;

    case 'SEARCH_RESULT':
      await player.queue.add(res.tracks[0])
      if (!player.playing && !player.paused && !player.queue.length) player.play()
      const embed4 = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Song added to Queue!**\n${client.emotes.parrow} [${res.tracks[0].title}](${res.tracks[0].uri}) by ${res.tracks[0].author}\n${client.emotes.parrow} Requester: ${res.tracks[0].requester} | Duration: ${client.modules.duration(client, res.tracks[0].duration)}`)
       await interaction.reply({ embeds: [embed4] })  
       if(ischeck === true) { await client.modules.editqembed(client, player) }
      return;
  }
}}