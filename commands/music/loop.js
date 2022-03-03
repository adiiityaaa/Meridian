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
options: [
    {
        name: "mode",
        type: "STRING",
        description: "Choose the Loop Mode to Set",
        required: true,
        choices: [
          {
              name: "Loop the Guild Queue",
              value: "queue",
          },
          {
              name: "Loop the Current Song",
              value: "current",
          },
          {
              name: "Disable the Loop Function",
              value: "disable",
          },
       ],  
   },    
], 
run: async(client, interaction) => {
  const option = interaction.options.getString('mode');
  const cur = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Already Looping the Current Song.**`)
  const que = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Already Looping the Guild Queue.**`)
  const dis = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Loop is already Disabled.**`)
  const current = client.modules.embed(client, client.colors.green, `${client.emotes.cross} | **Now Looping the Current Song.**`)
  const queue = client.modules.embed(client, client.colors.green, `${client.emotes.cross} | **Now Looping the Guild queue.**`)
  const disable = client.modules.embed(client, client.colors.green, `${client.emotes.cross} | **Loop mode is now disabled.**`)
  const noq = client.embeds.noqueue(client);
  const player = client.manager.players.get(interaction.guild.id);
  if(!player) { return interaction.reply({ embeds: [noq] }) }
  if(player) {
   if(!player.queue || !player.playing) { return interaction.reply({ embeds: [noq] }) }
   let description;
   switch(option) {
   case 'queue':
   if(player.queueRepeat) { return interaction.reply({ embeds: [que] })}
   if(player.trackRepeat) { await player.setTrackRepeat(false) }   
   await player.setQueueRepeat(true)
   interaction.reply({ embeds: [queue] })
   break;
   case 'current':
   if(player.trackRepeat) { return interaction.reply({ embeds: [cur] })}
   if(player.queueRepeat) { await player.setQueueRepeat(false) }   
   await player.setTrackRepeat(true)
   interaction.reply({ embeds: [current] })
   break;
   case 'disabled':
   if(!player.queueRepeat && !player.trackRepeat) { return interaction.reply({ embeds: [dis] })}
   if(player.queueRepeat) { await player.setQueueRepeat(false) }
   if(player.trackRepeat) { await player.setQueueRepeat(false) }
   interaction.reply({ embeds: [disable] })
   break;
}}}}