module.exports = { 
name: "disconnect",
description: "Disconnect a user from Voice Channel.",
category: "Moderative",
type: 1,    
developerOnly: false,
voiceChannel: false,
mutualChannel: false,
djOnly: false,    
clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS", "MOVE_MEMBERS"],
authorPerms: ["MOVE_MEMBERS"],
options: [
    {
        name: "option",
        type: "STRING",
        description: "Specify whom you want to Disconnect.",
        required: true,
        choices: [
          {
              name: "Specific Member",
              value: "member",
          },
          {
              name: "Everyone in Voice",
              value: "everyone",
          },
       ],  
   },    
   {
    name: "member",
    type: "USER",
    description: "Member whom you want to Disconnect.",
    required: false,
   },
   {
    name: "channel",
    type: "CHANNEL",
    description: "Channel from which you want to Disconnect everyone.",
    channelTypes: ["GUILD_VOICE"],
    required: false,
   },
], 
run: async(client, interaction) => {
 const option = interaction.options.getString('option')
 const nomember = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Please provide a Member to Disconnect.**`)
 const nochannel = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Please provide a Channel to Disconnect from.**`)
 switch(option) {
 case "member":
 const member = interaction.options.getMember('member');
 if(!member) { return interaction.reply({ embeds: [nomember] }) }
 const membersuccess = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Disconnected <@${member.id}> from Voice Channel.**`)
 const novc = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **<@${member.id}> is not in a Voice Channel.**`)
 if(!member.voice.channel) { return interaction.reply({ embeds: [novc] }) }
 member.voice.disconnect({ reason: `Command used by ${interaction.user.tag}` })
 interaction.reply({ embeds: [membersuccess] })
 break;
 case "everyone":
 const channel = interaction.options.getChannel('channel');
 if(!channel) { return interaction.reply({ embeds: [nochannel] }) }
 const noone = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Noone has joined <#${channel.id}>.**`)
 const everyonesuccess = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Disconnected everyone from <#${channel.id}>.**`)
 if(channel.members.size === 0) { return interaction.reply({ embeds: [noone] }) }
 for (let memberi of channel.members) {
 memberi[1].voice.disconnect({ reason: `Command used by ${interaction.user.tag}` }); }
 interaction.reply({ embeds: [everyonesuccess] })
 break;
}}}