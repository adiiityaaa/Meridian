module.exports = { 
    name: "undeafen",
    description: "Undeafen a user from Voice Channel.",
    category: "Moderative",
    type: 1,    
    developerOnly: false,
    voiceChannel: false,
    mutualChannel: false,
    djOnly: false,    
    clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS", "DEAFEN_MEMBERS"],
    authorPerms: ["DEAFEN_MEMBERS"],
    options: [
        {
            name: "option",
            type: "STRING",
            description: "Specify whom you want to Undeafen.",
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
        description: "Member whom you want to Undeafen.",
        required: false,
       },
       {
        name: "channel",
        type: "CHANNEL",
        description: "Channel from which you want to Undeafen everyone.",
        required: false,
       },
    ], 
    run: async(client, interaction) => {
     const option = interaction.options.getString('option')
     const nomember = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Please provide a Member to Undeafen.**`)
     const nochannel = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Please provide a Channel to Undeafen from.**`)
     switch(option) {
     case "member":
     const member = interaction.options.getMember('member');
     if(!member) { return interaction.reply({ embeds: [nomember] }) }
     const membersuccess = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Undeafened <@${member.id}> in Voice Channel.**`)
     const novc = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **<@${member.id}> is not in a Voice Channel.**`)
     const noundeaf = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **<@${member.id}> is not Deafened.**`)
     if(!member.voice.channel) { return interaction.reply({ embeds: [novc] }) }
     if(!member.voice.serverDeaf) { return interaction.reply({ embeds: [noundeaf] }) }
     member.voice.setDeaf(false, `Command used by ${interaction.user.tag}`)
     interaction.reply({ embeds: [membersuccess] })
     break;
     case "everyone":
     const channel = interaction.options.getChannel('channel');
     if(!channel) { return interaction.reply({ embeds: [nochannel] }) }
     const noone = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Noone has joined <#${channel.id}>.**`)
     const everyonesuccess = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Undeafened everyone in <#${channel.id}>.**`)
     const notdeafen = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Noone is Deafened in <#${channel.id}>`)
     if(channel.members.size === 0) { return interaction.reply({ embeds: [noone] }) }
     const data = channel.members.filter(member => member.voice.serverDeaf).size;
     if(data === 0) { return interaction.reply({ embeds: [notdeafen] }) }      
     for (let memberi of channel.members) {
     memberi[1].voice.setDeaf(false, `Command used by ${interaction.user.tag}`); }
     interaction.reply({ embeds: [everyonesuccess] })
     break;
    }}}