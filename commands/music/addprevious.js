module.exports = {
name: "addprevious",
description: "Add the previous song to the Queue!",
category: "Music",
type: 1,
developerOnly: false,
voiceChannel: true,
mutualChannel: true,
djOnly: false,    
clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS", "CONNECT", "SPEAK"],
authorPerms: [""],    
run: async(client, interaction) => {  
  const err = client.embeds.error(client);
  const noprev = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **There is no previous song.**`)
  const added = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Previous song added to Queue.**`) 
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
 if(!player.queue.previous) { return interaction.reply({ embeds: [noprev] }) }
 if(player.state !== "CONNECTED") player.connect()
 let res;
 try {
    res = await player.search(player.queue.previous.uri, interaction.user)
    if (res.loadType === 'LOAD_FAILED' || res.loadType === 'NO_RESULT') {
      if (!player.queue.current) player.destroy()
      await interaction.reply({ embeds: [err] })
    }
  } catch (err) {
    await interaction.reply({ embeds: [err] })
    console.log(err)
  }

  switch (res.loadType) {
    case 'TRACK_LOADED':
      await player.queue.add(res.tracks[0])
      if (!player.playing && !player.paused && !player.queue.length) player.play()
      await interaction.reply({ embeds: [added] })
      if(ischeck === true) { await client.modules.editqembed(client, player) }         
      return;
          
    case 'SEARCH_RESULT':
      await player.queue.add(res.tracks[0])
      if (!player.playing && !player.paused && !player.queue.length) player.play()
       await interaction.reply({ embeds: [added] })  
       if(ischeck === true) { await client.modules.editqembed(client, player) }          
      return;
  }
}}