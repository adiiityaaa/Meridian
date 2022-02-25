module.exports.run = async(client, message) => {
const rccheck = await client.modules.isrequest(client, message.channel.id, message.guild.id);
if(rccheck === false) { return; }   
if(message.author.id === client.user.id) { setTimeout(function() { message.delete().catch(e => { console.log(e) }) }, 5000) }
else { message.delete().catch(e => { console.log(e) }) }
if(message.author.bot) { return; }
const query = message.content;
const novc = client.embeds.novoice(client);
  const nomutu = client.embeds.nomutual(client);
  const nosong = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Please provide a Song Name/Link!**`);
  const cantjoin = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Cannot join your Voice Channel.**`);
  const nomen = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Please don't mention anyone!**`);
  const noinv = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **No invite links in this Channel!**`);
  const err = client.embeds.error(client);
  const channel = message.member.voice.channel;
  if(!channel) { return message.channel.send({ embeds: [novc] }) }
  if(message.guild.me.voice.channel && message.guild.me.voice.channel.id !== message.member.voice.channel.id) { return message.channel.send({ embeds: [nomutu] }) }
  if(!channel.joinable) { return message.channel.send({ embeds: [cantjoin] }) }
  if(query.includes("discord.gg/") || query.includes("dsc.gg/") || query.includes("/invite/") || query.includes("discord.io")) { return message.channel.send({ embeds: [noinv] }) }
  if(message.mentions.members.size > 0) { return message.channel.send({ embeds: [nomen] }) }
  let reqchx;
  const check = client.manager.players.get(message.guild.id);
  if(!check) {
      const player = message.client.manager.create({
      guild: message.guild.id,
      voiceChannel: channel.id,
      textChannel: message.channel.id,
      selfDeafen: true,
    }) }
 const player = client.manager.players.get(message.guild.id);
 if(channel.id !== player.voiceChannel) { return message.channel.send({ embeds: [nomutu] }) }
 if(!channel.joinable) { return message.channel.send({ embeds: [cantjoin] }) }
 if(!query) { return message.channel.send({ embeds: [nosong] })}
 const noresult = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **No Results found for __${query}__!**`)
 if(player.state !== "CONNECTED") player.connect()
 let res;
 try {
    res = await client.manager.search(query, message.author)
    if (res.loadType === 'LOAD_FAILED') {
      if (!player.queue.current) player.destroy()
      message.channel.send({ embeds: [err] })
    }
  } catch (err) {
    return message.channel.send({ embeds: [noresult] })
  }

  switch (res.loadType) {
    case 'NO_MATCHES':
      if (!player.queue.current) player.destroy()
      return message.channel.send({ embeds: [noresult] });

    case 'TRACK_LOADED':
      player.queue.add(res.tracks[0])
      if (!player.playing && !player.paused && !player.queue.length) player.play()
       client.modules.editqembed(client, player)  
      return;

    case 'PLAYLIST_LOADED':
      player.queue.add(res.tracks)
      if (!player.playing && !player.paused) player.play();
       client.modules.editqembed(client, player)  
      return;

    case 'SEARCH_RESULT':
      player.queue.add(res.tracks[0])
      if (!player.playing && !player.paused && !player.queue.length) player.play()
       client.modules.editqembed(client, player)    
      return;
  }    
}